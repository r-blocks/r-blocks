import Blockly from 'blockly';
import { quantitative_vars } from '../../constants';

// HELPrct-specific bootstrap test for mean block
Blockly.Blocks['bootstrap_test_mean'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('set.seed(')
      .appendField(new Blockly.FieldNumber(123, 1, 99999), 'SEED')
      .appendField(')');
    this.appendDummyInput()
      .appendField('observed_mean <- mean(~')
      .appendField(new Blockly.FieldDropdown(quantitative_vars), 'VAR')
      .appendField(', data=HELPrct)');
    this.appendDummyInput()
      .appendField('HELPrct_shifted <- mutate(HELPrct, new_')
      .appendField(new Blockly.FieldDropdown(quantitative_vars), 'VAR')
      .appendField(' = ')
      .appendField(new Blockly.FieldDropdown(quantitative_vars), 'VAR')
      .appendField(' - observed_mean + ')
      .appendField(new Blockly.FieldNumber(0, -999999, 999999), 'NULL_VALUE')
      .appendField(')');
    this.appendDummyInput()
      .appendField('sim_null <- do(')
      .appendField(new Blockly.FieldNumber(500, 10, 10000), 'ITERATIONS')
      .appendField(') * mean(~ new_')
      .appendField(new Blockly.FieldDropdown(quantitative_vars), 'VAR')
      .appendField(', data = resample(HELPrct_shifted))');
    this.appendDummyInput()
      .appendField('prop(~ (')
      .appendField(
        new Blockly.FieldDropdown([
          ['mean <= observed_mean', 'less'],
          ['mean >= observed_mean', 'greater'],
          ['abs(mean-NULL) >= abs(observed_mean-NULL)', 'two.sided'],
        ]),
        'ALTERNATIVE'
      )
      .appendField('), data = sim_null)');

    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('230');  // Match color with other inference blocks
    this.setTooltip('Bootstrap test for one mean using HELPrct data');
    this.setHelpUrl('https://www.rdocumentation.org/packages/mosaic/topics/resample');
  },
};

// Generic bootstrap test for mean block
Blockly.Blocks['Gbootstrap_test_mean'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('set.seed(')
      .appendField(new Blockly.FieldNumber(123, 1, 99999), 'SEED')
      .appendField(')');
    this.appendDummyInput()
      .appendField('observed_mean <- mean(~')
      .appendField(new Blockly.FieldDropdown(quantitative_vars), 'VAR')
      .appendField(', data=')
      .appendField(new Blockly.FieldDropdown([
        ['HELPrct', 'HELPrct'],
        ['mosaicData::Whickham', 'mosaicData::Whickham'],
        ['mosaicData::Births', 'mosaicData::Births']
      ]), 'DATASET')
      .appendField(')');
    this.appendDummyInput()
      .appendField('')
      .appendField(new Blockly.FieldDropdown([
        ['HELPrct', 'HELPrct'],
        ['mosaicData::Whickham', 'mosaicData::Whickham'],
        ['mosaicData::Births', 'mosaicData::Births']
      ]), 'SHIFTED_DATASET')
      .appendField('_shifted <- mutate(')
      .appendField(new Blockly.FieldDropdown([
        ['HELPrct', 'HELPrct'],
        ['mosaicData::Whickham', 'mosaicData::Whickham'],
        ['mosaicData::Births', 'mosaicData::Births']
      ]), 'ORIG_DATASET')
      .appendField(', new_')
      .appendField(new Blockly.FieldDropdown(quantitative_vars), 'VAR2')
      .appendField(' = ')
      .appendField(new Blockly.FieldDropdown(quantitative_vars), 'VAR3')
      .appendField(' - observed_mean + ')
      .appendField(new Blockly.FieldNumber(0, -999999, 999999), 'NULL_VALUE')
      .appendField(')');
    this.appendDummyInput()
      .appendField('sim_null <- do(')
      .appendField(new Blockly.FieldNumber(500, 10, 10000), 'ITERATIONS')
      .appendField(') * mean(~ new_')
      .appendField(new Blockly.FieldDropdown(quantitative_vars), 'VAR4')
      .appendField(', data = resample(')
      .appendField(new Blockly.FieldDropdown([
        ['HELPrct', 'HELPrct'],
        ['mosaicData::Whickham', 'mosaicData::Whickham'],
        ['mosaicData::Births', 'mosaicData::Births']
      ]), 'RESAMPLE_DATASET')
      .appendField('_shifted))');
    this.appendDummyInput()
      .appendField('prop(~ (')
      .appendField(
        new Blockly.FieldDropdown([
          ['mean <= observed_mean', 'less'],
          ['mean >= observed_mean', 'greater'],
          ['abs(mean-NULL) >= abs(observed_mean-NULL)', 'two.sided'],
        ]),
        'ALTERNATIVE'
      )
      .appendField('), data = sim_null)');

    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('230');  // Match color with other inference blocks
    this.setTooltip('Bootstrap test for one mean using selected dataset');
    this.setHelpUrl('https://www.rdocumentation.org/packages/mosaic/topics/resample');

    // Automatically update related fields when dataset changes
    this.setOnChange(function (changeEvent) {
      if (
        changeEvent.name === 'DATASET' ||
        (changeEvent.element === 'field' && changeEvent.name === 'DATASET')
      ) {
        const datasetValue = this.getFieldValue('DATASET');
        this.setFieldValue(datasetValue, 'SHIFTED_DATASET');
        this.setFieldValue(datasetValue, 'ORIG_DATASET');
        this.setFieldValue(datasetValue, 'RESAMPLE_DATASET');
      }
      if (
        changeEvent.name === 'VAR' ||
        (changeEvent.element === 'field' && changeEvent.name === 'VAR')
      ) {
        const varValue = this.getFieldValue('VAR');
        this.setFieldValue(varValue, 'VAR2');
        this.setFieldValue(varValue, 'VAR3');
        this.setFieldValue(varValue, 'VAR4');
      }
    });
  },
};

// Separate generator functions for each block
Blockly.JavaScript['bootstrap_test_mean'] = function(block) {
  const seed = block.getFieldValue('SEED');
  const variable = block.getFieldValue('VAR');
  const nullValue = block.getFieldValue('NULL_VALUE');
  const alternative = block.getFieldValue('ALTERNATIVE');
  const iterations = block.getFieldValue('ITERATIONS');

  let code = `set.seed(${seed})\n`;
  code += `observed_mean <- mean(~${variable}, data=HELPrct)\n`;
  code += `HELPrct_shifted <- mutate(HELPrct, new_${variable} = ${variable} - observed_mean + ${nullValue})\n`;
  code += `sim_null <- do(${iterations}) * mean(~ new_${variable}, data = resample(HELPrct_shifted))\n`;

  switch (alternative) {
    case 'less':
      code += `prop(~ (mean <= observed_mean), data = sim_null)\n`;
      break;
    case 'greater':
      code += `prop(~ (mean >= observed_mean), data = sim_null)\n`;
      break;
    case 'two.sided':
      code += `prop(~ (abs(mean-${nullValue}) >= abs(observed_mean-${nullValue})), data = sim_null)\n`;
      break;
  }
  
  return code;
};

Blockly.JavaScript['Gbootstrap_test_mean'] = function(block) {
  const seed = block.getFieldValue('SEED');
  const variable = block.getFieldValue('VAR');
  const dataset = block.getFieldValue('DATASET');
  const shiftedDataset = block.getFieldValue('SHIFTED_DATASET');
  const origDataset = block.getFieldValue('ORIG_DATASET');
  const var2 = block.getFieldValue('VAR2');
  const var3 = block.getFieldValue('VAR3');
  const var4 = block.getFieldValue('VAR4');
  const resampleDataset = block.getFieldValue('RESAMPLE_DATASET');
  const nullValue = block.getFieldValue('NULL_VALUE');
  const alternative = block.getFieldValue('ALTERNATIVE');
  const iterations = block.getFieldValue('ITERATIONS');

  let code = `set.seed(${seed})\n`;
  code += `observed_mean <- mean(~${variable}, data=${dataset})\n`;
  code += `${shiftedDataset}_shifted <- mutate(${origDataset}, new_${var2} = ${var3} - observed_mean + ${nullValue})\n`;
  code += `sim_null <- do(${iterations}) * mean(~ new_${var4}, data = resample(${resampleDataset}_shifted))\n`;

  switch (alternative) {
    case 'less':
      code += `prop(~ (mean <= observed_mean), data = sim_null)\n`;
      break;
    case 'greater':
      code += `prop(~ (mean >= observed_mean), data = sim_null)\n`;
      break;
    case 'two.sided':
      code += `prop(~ (abs(mean-${nullValue}) >= abs(observed_mean-${nullValue})), data = sim_null)\n`;
      break;
  }
  
  return code;
};

console.log("Bootstrap Test Mean block registered:", !!Blockly.JavaScript['bootstrap_test_mean']);

export default {};