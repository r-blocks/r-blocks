import Blockly from 'blockly';
import { quantitative_vars } from '../../constants';

// HELPrct-specific bootstrap CI for mean block
Blockly.Blocks['bootstrap_ci_mean'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('set.seed(')
      .appendField(new Blockly.FieldNumber(123, 1, 99999), 'SEED')
      .appendField(')');
    this.appendDummyInput()
      .appendField('mean_boot <- do(')
      .appendField(new Blockly.FieldNumber(500, 10, 10000), 'ITERATIONS')
      .appendField(') * mean(~')
      .appendField(new Blockly.FieldDropdown(quantitative_vars), 'VAR')
      .appendField(', data = resample(HELPrct))');
    this.appendDummyInput()
      .appendField('confint(mean_boot, level = (1 - ')
      .appendField(new Blockly.FieldNumber(0.05, 0.01, 0.99, 0.01), 'ALPHA')
      .appendField('), method = "quantile")  # ')
      .appendField(
        new Blockly.FieldDropdown([
          ['Two-sided', 'two_sided'],
          ['One-sided', 'one_sided'],
        ]),
        'TEST_TYPE'
      )
      .appendField(' test #');

    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('Bootstrap confidence interval for one mean using HELPrct data');
  },
};

// Generic version
Blockly.Blocks['Gbootstrap_ci_mean'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('set.seed(')
      .appendField(new Blockly.FieldNumber(123, 1, 99999), 'SEED')
      .appendField(')');
    this.appendDummyInput()
      .appendField('mean_boot <- do(')
      .appendField(new Blockly.FieldNumber(5000, 100, 10000), 'ITERATIONS')
      .appendField(') * mean(~')
      .appendField(new Blockly.FieldTextInput(''), 'VAR')
      .appendField(', data = resample(')
      .appendField(new Blockly.FieldTextInput(''), 'DATASET')
      .appendField('))');
    this.appendDummyInput()
      .appendField('confint(mean_boot, level = (1 - ')
      .appendField(new Blockly.FieldNumber(0.05, 0.01, 0.99, 0.01), 'ALPHA')
      .appendField('), method = "quantile")  # ')
      .appendField(
        new Blockly.FieldDropdown([
          ['Two-sided', 'two_sided'],
          ['One-sided', 'one_sided'],
        ]),
        'TEST_TYPE'
      )
      .appendField(' test #');

    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('Bootstrap confidence interval for one mean');
  },
};

// Code generator function for both blocks
function generateBootstrapMeanCode(block) {
  const seed = block.getFieldValue('SEED');
  const variable = block.getFieldValue('VAR');
  // Changed from block.getType() to block.type
  const dataset = block.type === 'bootstrap_ci_mean' ? 'HELPrct' : block.getFieldValue('DATASET');
  const alpha = block.getFieldValue('ALPHA');
  const testType = block.getFieldValue('TEST_TYPE');
  const iterations = block.getFieldValue('ITERATIONS');

  let code = `set.seed(${seed})\n`;
  code += `mean_boot <- do(${iterations}) * mean(~${variable}, data = resample(${dataset}))\n`;

  if (testType === 'two_sided') {
    code += `confint(mean_boot, level = (1 - ${alpha}), method = "quantile") ## two-sided test at ${alpha} ##\n`;
  } else {
    code += `confint(mean_boot, level = (1 - 2*${alpha}), method = "quantile") ## one-sided test at ${alpha} ##\n`;
  }

  return code;
}

Blockly.JavaScript['bootstrap_ci_mean'] = generateBootstrapMeanCode;
Blockly.JavaScript['Gbootstrap_ci_mean'] = generateBootstrapMeanCode;

export default {};
