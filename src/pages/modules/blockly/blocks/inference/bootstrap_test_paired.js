import Blockly from 'blockly';
import { quantitative_vars } from '../../constants';

// HELPrct-specific bootstrap test for paired mean difference block
Blockly.Blocks['bootstrap_test_paired'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('set.seed(')
      .appendField(new Blockly.FieldNumber(123, 1, 99999), 'SEED')
      .appendField(')');
    this.appendDummyInput()
      .appendField('HELPrct <- mutate(HELPrct, pair.diff = ')
      .appendField(new Blockly.FieldDropdown(quantitative_vars), 'POST_VAR')
      .appendField(' - ')
      .appendField(new Blockly.FieldDropdown(quantitative_vars), 'PRE_VAR')
      .appendField(')');
    this.appendDummyInput().appendField('bar_d <- mean(~ pair.diff, data = HELPrct)');
    this.appendDummyInput().appendField('HELPrct <- mutate(HELPrct, new_diff = pair.diff - bar_d)');
    this.appendDummyInput()
      .appendField('sim_null <- do(')
      .appendField(new Blockly.FieldNumber(500, 10, 10000), 'ITERATIONS')
      .appendField(') * mean(~ new_diff, data = resample(HELPrct))');
    this.appendDummyInput()
      .appendField('prop(~ (')
      .appendField(
        new Blockly.FieldDropdown([
          ['mean <= bar_d', 'less'],
          ['mean >= bar_d', 'greater'],
          ['abs(mean) >= abs(bar_d)', 'two.sided'],
        ]),
        'ALTERNATIVE'
      )
      .appendField('), data = sim_null)');

    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('Bootstrap test for paired mean difference using HELPrct data');
  },
};

// Generic bootstrap test for paired mean difference block
Blockly.Blocks['Gbootstrap_test_paired'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('set.seed(')
      .appendField(new Blockly.FieldNumber(123, 1, 99999), 'SEED')
      .appendField(')');
    this.appendDummyInput()
      .appendField('')
      .appendField(new Blockly.FieldTextInput(''), 'DATASET')
      .appendField(' <- mutate(')
      .appendField(new Blockly.FieldTextInput(''), 'ORIG_DATASET')
      .appendField(', pair.diff = ')
      .appendField(new Blockly.FieldTextInput(''), 'POST_VAR')
      .appendField(' - ')
      .appendField(new Blockly.FieldTextInput(''), 'PRE_VAR')
      .appendField(')');
    this.appendDummyInput()
      .appendField('bar_d <- mean(~ pair.diff, data = ')
      .appendField(new Blockly.FieldTextInput(''), 'MEAN_DATASET')
      .appendField(')');
    this.appendDummyInput()
      .appendField('')
      .appendField(new Blockly.FieldTextInput(''), 'DATASET2')
      .appendField(' <- mutate(')
      .appendField(new Blockly.FieldTextInput(''), 'DATASET3')
      .appendField(', new_diff = pair.diff - bar_d)');
    this.appendDummyInput()
      .appendField('sim_null <- do(')
      .appendField(new Blockly.FieldNumber(500, 10, 10000), 'ITERATIONS')
      .appendField(') * mean(~ new_diff, data = resample(')
      .appendField(new Blockly.FieldTextInput(''), 'RESAMPLE_DATASET')
      .appendField('))');
    this.appendDummyInput()
      .appendField('prop(~ (')
      .appendField(
        new Blockly.FieldDropdown([
          ['mean <= bar_d', 'less'],
          ['mean >= bar_d', 'greater'],
          ['abs(mean) >= abs(bar_d)', 'two.sided'],
        ]),
        'ALTERNATIVE'
      )
      .appendField('), data = sim_null)');

    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('Bootstrap test for paired mean difference');

    // Automatically update fields when dataset changes
    this.setOnChange(function (changeEvent) {
      if (
        changeEvent.name === 'DATASET' ||
        (changeEvent.element === 'field' && changeEvent.name === 'DATASET')
      ) {
        const datasetValue = this.getFieldValue('DATASET');
        this.setFieldValue(datasetValue, 'MEAN_DATASET');
        this.setFieldValue(datasetValue, 'DATASET2');
        this.setFieldValue(datasetValue, 'DATASET3');
        this.setFieldValue(datasetValue, 'RESAMPLE_DATASET');
      }
      if (
        changeEvent.name === 'ORIG_DATASET' ||
        (changeEvent.element === 'field' && changeEvent.name === 'ORIG_DATASET')
      ) {
        const datasetValue = this.getFieldValue('ORIG_DATASET');
        this.setFieldValue(datasetValue, 'DATASET');
      }
    });
  },
};

// Code generator function for both blocks
function generateBootstrapTestPairedCode(block) {
  const seed = block.getFieldValue('SEED');
  const iterations = block.getFieldValue('ITERATIONS');
  const alternative = block.getFieldValue('ALTERNATIVE');

  let code = '';

  if (block.type === 'bootstrap_test_paired') {
    const preVar = block.getFieldValue('PRE_VAR');
    const postVar = block.getFieldValue('POST_VAR');

    code = `# Bootstrap test for paired mean difference\n`;
    code += `HELPrct <- mutate(HELPrct, pair.diff = ${postVar} - ${preVar})\n`;
    code += `bar_d <- mean(~ pair.diff, data = HELPrct)\n`;
    code += `HELPrct <- mutate(HELPrct, new_diff = pair.diff - bar_d)\n`;
    code += `set.seed(${seed})\n`;
    code += `sim_null <- do(${iterations}) * mean(~ new_diff, data = resample(HELPrct))\n\n`;

    switch (alternative) {
      case 'less':
        code += `prop(~ (mean <= bar_d), data = sim_null) ## P-value for less than ##\n`;
        break;
      case 'greater':
        code += `prop(~ (mean >= bar_d), data = sim_null) ## P-value for greater than ##\n`;
        break;
      case 'two.sided':
        code += `prop(~ (abs(mean) >= abs(bar_d)), data = sim_null) ## P-value for not equal ##\n`;
        break;
    }
  } else {
    const dataset = block.getFieldValue('DATASET');
    const origDataset = block.getFieldValue('ORIG_DATASET');
    const preVar = block.getFieldValue('PRE_VAR');
    const postVar = block.getFieldValue('POST_VAR');
    const meanDataset = block.getFieldValue('MEAN_DATASET');
    const dataset2 = block.getFieldValue('DATASET2');
    const dataset3 = block.getFieldValue('DATASET3');
    const resampleDataset = block.getFieldValue('RESAMPLE_DATASET');

    code = `# Bootstrap test for paired mean difference\n`;
    code += `${dataset} <- mutate(${origDataset}, pair.diff = ${postVar} - ${preVar})\n`;
    code += `bar_d <- mean(~ pair.diff, data = ${meanDataset})\n`;
    code += `${dataset2} <- mutate(${dataset3}, new_diff = pair.diff - bar_d)\n`;
    code += `set.seed(${seed})\n`;
    code += `sim_null <- do(${iterations}) * mean(~ new_diff, data = resample(${resampleDataset}))\n\n`;

    switch (alternative) {
      case 'less':
        code += `prop(~ (mean <= bar_d), data = sim_null) ## P-value for less than ##\n`;
        break;
      case 'greater':
        code += `prop(~ (mean >= bar_d), data = sim_null) ## P-value for greater than ##\n`;
        break;
      case 'two.sided':
        code += `prop(~ (abs(mean) >= abs(bar_d)), data = sim_null) ## P-value for not equal ##\n`;
        break;
    }
  }

  return code;
}

Blockly.JavaScript['bootstrap_test_paired'] = generateBootstrapTestPairedCode;
Blockly.JavaScript['Gbootstrap_test_paired'] = generateBootstrapTestPairedCode;

export default {};
