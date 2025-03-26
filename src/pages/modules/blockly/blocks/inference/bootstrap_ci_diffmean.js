import Blockly from 'blockly';
import { quantitative_vars } from '../../constants';
import { categorical_vars_alt } from '../../constants';

// HELPrct-specific bootstrap CI for difference in two means block
Blockly.Blocks['bootstrap_ci_diffmean'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('set.seed(')
      .appendField(new Blockly.FieldNumber(123, 1, 99999), 'SEED')
      .appendField(')');
    this.appendDummyInput()
      .appendField('mean_boot <- do(')
      .appendField(new Blockly.FieldNumber(500, 10, 10000), 'ITERATIONS')
      .appendField(') * diffmean(')
      .appendField(new Blockly.FieldDropdown(quantitative_vars), 'VAR')
      .appendField(' ~ ')
      .appendField(new Blockly.FieldDropdown(categorical_vars_alt), 'GROUP')
      .appendField(', data = resample(HELPrct))');
    this.appendDummyInput()
      .appendField('confint(mean_boot, level = ')
      .appendField(new Blockly.FieldNumber(0.95, 0, 1, 0.01), 'CONF_LEVEL')
      .appendField(', method = "quantile")');

    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('Bootstrap confidence interval for difference in two means using HELPrct data');
  },
};

// Generic bootstrap CI for difference in two means block
Blockly.Blocks['Gbootstrap_ci_diffmean'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('set.seed(')
      .appendField(new Blockly.FieldNumber(123, 1, 99999), 'SEED')
      .appendField(')');
    this.appendDummyInput()
      .appendField('mean_boot <- do(')
      .appendField(new Blockly.FieldNumber(500, 10, 10000), 'ITERATIONS')
      .appendField(') * diffmean(')
      .appendField(new Blockly.FieldTextInput(''), 'VAR')
      .appendField(' ~ ')
      .appendField(new Blockly.FieldTextInput(''), 'GROUP')
      .appendField(', data = resample(')
      .appendField(new Blockly.FieldTextInput(''), 'DATASET')
      .appendField('))');
    this.appendDummyInput()
      .appendField('confint(mean_boot, level = ')
      .appendField(new Blockly.FieldNumber(0.95, 0, 1, 0.01), 'CONF_LEVEL')
      .appendField(', method = "quantile")');

    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('Bootstrap confidence interval for difference in two means');
  },
};

// Code generator function for both blocks
function generateBootstrapCIDiffMeanCode(block) {
  const seed = block.getFieldValue('SEED');
  const variable = block.getFieldValue('VAR');
  const group = block.getFieldValue('GROUP');
  const iterations = block.getFieldValue('ITERATIONS');
  const confLevel = block.getFieldValue('CONF_LEVEL');

  let code = '';

  if (block.type === 'bootstrap_ci_diffmean') {
    code = `# Bootstrap confidence interval for difference in two means\n`;
    code += `set.seed(${seed})\n`;
    code += `mean_boot <- do(${iterations}) * diffmean(${variable} ~ ${group}, data = resample(HELPrct))\n`;
    code += `confint(mean_boot, level = ${confLevel}, method = "quantile")\n`;
  } else {
    const dataset = block.getFieldValue('DATASET');
    code = `# Bootstrap confidence interval for difference in two means\n`;
    code += `set.seed(${seed})\n`;
    code += `mean_boot <- do(${iterations}) * diffmean(${variable} ~ ${group}, data = resample(${dataset}))\n`;
    code += `confint(mean_boot, level = ${confLevel}, method = "quantile")\n`;
  }

  return code;
}

Blockly.JavaScript['bootstrap_ci_diffmean'] = generateBootstrapCIDiffMeanCode;
Blockly.JavaScript['Gbootstrap_ci_diffmean'] = generateBootstrapCIDiffMeanCode;

export default {};
