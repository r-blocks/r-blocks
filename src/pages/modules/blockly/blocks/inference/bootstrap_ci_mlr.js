import Blockly from 'blockly';
import { quantitative_vars, quantitative_vars_alt } from '../../constants';

// HELPrct-specific bootstrap CI for MLR coefficients block
Blockly.Blocks['bootstrap_ci_mlr'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('set.seed(')
      .appendField(new Blockly.FieldNumber(123, 1, 99999), 'SEED')
      .appendField(')');
    this.appendDummyInput()
      .appendField('lm_boot <- do(')
      .appendField(new Blockly.FieldNumber(500, 10, 10000), 'ITERATIONS')
      .appendField(') * lm(')
      .appendField(new Blockly.FieldDropdown(quantitative_vars), 'RESP')
      .appendField(' ~ ')
      .appendField(new Blockly.FieldDropdown(quantitative_vars_alt), 'VAR1')
      .appendField(' + ')
      .appendField(new Blockly.FieldDropdown(quantitative_vars), 'VAR2')
      .appendField(', data = resample(HELPrct))');
    this.appendDummyInput()
      .appendField('confint(lm_boot, level = ')
      .appendField(new Blockly.FieldNumber(0.95, 0, 1, 0.01), 'CONF_LEVEL')
      .appendField(', method = "quantile")');

    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('Bootstrap confidence intervals for coefficients in MLR using HELPrct data');
  },
};

// Generic bootstrap CI for MLR coefficients block
Blockly.Blocks['Gbootstrap_ci_mlr'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('set.seed(')
      .appendField(new Blockly.FieldNumber(123, 1, 99999), 'SEED')
      .appendField(')');
    this.appendDummyInput()
      .appendField('lm_boot <- do(')
      .appendField(new Blockly.FieldNumber(500, 10, 10000), 'ITERATIONS')
      .appendField(') * lm(')
      .appendField(new Blockly.FieldTextInput(''), 'RESP')
      .appendField(' ~ ')
      .appendField(new Blockly.FieldTextInput(''), 'MODEL')
      .appendField(', data = resample(')
      .appendField(new Blockly.FieldTextInput(''), 'DATASET')
      .appendField('))');
    this.appendDummyInput()
      .appendField('confint(lm_boot, level = ')
      .appendField(new Blockly.FieldNumber(0.95, 0, 1, 0.01), 'CONF_LEVEL')
      .appendField(', method = "quantile")');

    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('Bootstrap confidence intervals for coefficients in MLR');
  },
};

// Code generator function for both blocks
function generateBootstrapCIMLRCode(block) {
  const seed = block.getFieldValue('SEED');
  const iterations = block.getFieldValue('ITERATIONS');
  const confLevel = block.getFieldValue('CONF_LEVEL');

  let code = '';

  if (block.type === 'bootstrap_ci_mlr') {
    const resp = block.getFieldValue('RESP');
    const var1 = block.getFieldValue('VAR1');
    const var2 = block.getFieldValue('VAR2');

    code = `# Bootstrap confidence intervals for coefficients in MLR\n`;
    code += `set.seed(${seed})\n`;
    code += `lm_boot <- do(${iterations}) * lm(${resp} ~ ${var1} + ${var2}, data = resample(HELPrct))\n`;
    code += `confint(lm_boot, level = ${confLevel}, method = "quantile")\n`;
  } else {
    const resp = block.getFieldValue('RESP');
    const model = block.getFieldValue('MODEL');
    const dataset = block.getFieldValue('DATASET');

    code = `# Bootstrap confidence intervals for coefficients in MLR\n`;
    code += `set.seed(${seed})\n`;
    code += `lm_boot <- do(${iterations}) * lm(${resp} ~ ${model}, data = resample(${dataset}))\n`;
    code += `confint(lm_boot, level = ${confLevel}, method = "quantile")\n`;
  }

  return code;
}

Blockly.JavaScript['bootstrap_ci_mlr'] = generateBootstrapCIMLRCode;
Blockly.JavaScript['Gbootstrap_ci_mlr'] = generateBootstrapCIMLRCode;

export default {};
