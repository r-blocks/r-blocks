import Blockly from 'blockly';
import { quantitative_vars, quantitative_vars_alt } from '../../constants';

// HELPrct-specific bootstrap CI for slope coefficient block
Blockly.Blocks['bootstrap_ci_lm'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('set.seed(')
      .appendField(new Blockly.FieldNumber(123, 1, 99999), 'SEED')
      .appendField(')');
    this.appendDummyInput()
      .appendField('lm_boot <- do(')
      .appendField(new Blockly.FieldNumber(500, 10, 10000), 'ITERATIONS')
      .appendField(') * lm(')
      .appendField(new Blockly.FieldDropdown(quantitative_vars), 'VAR1')
      .appendField(' ~ ')
      .appendField(new Blockly.FieldDropdown(quantitative_vars_alt), 'VAR2')
      .appendField(', data = resample(HELPrct))');
    this.appendDummyInput()
      .appendField('confint(lm_boot, level = ')
      .appendField(new Blockly.FieldNumber(0.95, 0, 1, 0.01), 'CONF_LEVEL')
      .appendField(', method = "quantile")');

    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip(
      'Bootstrap confidence interval for slope coefficient in SLR using HELPrct data'
    );
  },
};

// Generic bootstrap CI for slope coefficient block
Blockly.Blocks['Gbootstrap_ci_lm'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('set.seed(')
      .appendField(new Blockly.FieldNumber(123, 1, 99999), 'SEED')
      .appendField(')');
    this.appendDummyInput()
      .appendField('lm_boot <- do(')
      .appendField(new Blockly.FieldNumber(500, 10, 10000), 'ITERATIONS')
      .appendField(') * lm(')
      .appendField(new Blockly.FieldTextInput(''), 'VAR1')
      .appendField(' ~ ')
      .appendField(new Blockly.FieldTextInput(''), 'VAR2')
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
    this.setTooltip('Bootstrap confidence interval for slope coefficient in SLR');
  },
};

// Code generator function for both blocks
function generateBootstrapCILmCode(block) {
  const seed = block.getFieldValue('SEED');
  const var1 = block.getFieldValue('VAR1');
  const var2 = block.getFieldValue('VAR2');
  const iterations = block.getFieldValue('ITERATIONS');
  const confLevel = block.getFieldValue('CONF_LEVEL');

  let code = '';

  if (block.type === 'bootstrap_ci_lm') {
    code = `# Bootstrap confidence interval for slope coefficient in SLR\n`;
    code += `set.seed(${seed})\n`;
    code += `lm_boot <- do(${iterations}) * lm(${var1} ~ ${var2}, data = resample(HELPrct))\n`;
    code += `confint(lm_boot, level = ${confLevel}, method = "quantile")\n`;
  } else {
    const dataset = block.getFieldValue('DATASET');
    code = `# Bootstrap confidence interval for slope coefficient in SLR\n`;
    code += `set.seed(${seed})\n`;
    code += `lm_boot <- do(${iterations}) * lm(${var1} ~ ${var2}, data = resample(${dataset}))\n`;
    code += `confint(lm_boot, level = ${confLevel}, method = "quantile")\n`;
  }

  return code;
}

Blockly.JavaScript['bootstrap_ci_lm'] = generateBootstrapCILmCode;
Blockly.JavaScript['Gbootstrap_ci_lm'] = generateBootstrapCILmCode;

export default {};
