import Blockly from 'blockly';
import { quantitative_vars } from '../../constants';

// HELPrct-specific bootstrap CI for paired mean difference block
Blockly.Blocks['bootstrap_ci_paired'] = {
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
    this.appendDummyInput()
      .appendField('mean_boot <- do(')
      .appendField(new Blockly.FieldNumber(500, 10, 10000), 'ITERATIONS')
      .appendField(') * mean(~ pair.diff, data = resample(HELPrct))');
    this.appendDummyInput()
      .appendField('confint(mean_boot, level = ')
      .appendField(new Blockly.FieldNumber(0.95, 0, 1, 0.01), 'CONF_LEVEL')
      .appendField(', method = "quantile")');

    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('Bootstrap confidence interval for paired mean difference using HELPrct data');
  },
};

// Generic bootstrap CI for paired mean difference block
Blockly.Blocks['Gbootstrap_ci_paired'] = {
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
      .appendField('mean_boot <- do(')
      .appendField(new Blockly.FieldNumber(500, 10, 10000), 'ITERATIONS')
      .appendField(') * mean(~ pair.diff, data = resample(')
      .appendField(new Blockly.FieldTextInput(''), 'RESAMPLE_DATASET')
      .appendField('))');
    this.appendDummyInput()
      .appendField('confint(mean_boot, level = ')
      .appendField(new Blockly.FieldNumber(0.95, 0, 1, 0.01), 'CONF_LEVEL')
      .appendField(', method = "quantile")');

    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('Bootstrap confidence interval for paired mean difference');

    // Automatically update fields when dataset changes
    this.setOnChange(function (changeEvent) {
      if (
        changeEvent.name === 'DATASET' ||
        (changeEvent.element === 'field' && changeEvent.name === 'DATASET')
      ) {
        const datasetValue = this.getFieldValue('DATASET');
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
function generateBootstrapCIPairedCode(block) {
  const seed = block.getFieldValue('SEED');
  const iterations = block.getFieldValue('ITERATIONS');
  const confLevel = block.getFieldValue('CONF_LEVEL');

  let code = '';

  if (block.type === 'bootstrap_ci_paired') {
    const preVar = block.getFieldValue('PRE_VAR');
    const postVar = block.getFieldValue('POST_VAR');

    code = `# Bootstrap confidence interval for paired mean difference\n`;
    code += `HELPrct <- mutate(HELPrct, pair.diff = ${postVar} - ${preVar})\n`;
    code += `set.seed(${seed})\n`;
    code += `mean_boot <- do(${iterations}) * mean(~ pair.diff, data = resample(HELPrct))\n`;
    code += `confint(mean_boot, level = ${confLevel}, method = "quantile")\n`;
  } else {
    const dataset = block.getFieldValue('DATASET');
    const origDataset = block.getFieldValue('ORIG_DATASET');
    const preVar = block.getFieldValue('PRE_VAR');
    const postVar = block.getFieldValue('POST_VAR');
    const resampleDataset = block.getFieldValue('RESAMPLE_DATASET');

    code = `# Bootstrap confidence interval for paired mean difference\n`;
    code += `${dataset} <- mutate(${origDataset}, pair.diff = ${postVar} - ${preVar})\n`;
    code += `set.seed(${seed})\n`;
    code += `mean_boot <- do(${iterations}) * mean(~ pair.diff, data = resample(${resampleDataset}))\n`;
    code += `confint(mean_boot, level = ${confLevel}, method = "quantile")\n`;
  }

  return code;
}

Blockly.JavaScript['bootstrap_ci_paired'] = generateBootstrapCIPairedCode;
Blockly.JavaScript['Gbootstrap_ci_paired'] = generateBootstrapCIPairedCode;

export default {};
