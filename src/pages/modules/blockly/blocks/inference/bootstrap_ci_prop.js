import Blockly from 'blockly';
import { categorical_vars, categorical_vars_alt } from '../../constants';

// HELPrct-specific bootstrap block
Blockly.Blocks['bootstrap_ci_prop'] = {
  init: function() {
    this.appendDummyInput()
      .appendField("Bootstrap CI (HELPrct):")
      .appendField("set.seed(")
      .appendField(new Blockly.FieldNumber(123, 1, 99999), "SEED")
      .appendField(")");
    this.appendDummyInput()
      .appendField("Variable:")
      .appendField(new Blockly.FieldDropdown(categorical_vars), "VAR");
    this.appendDummyInput()
      .appendField("Success value:")
      .appendField(new Blockly.FieldTextInput('"yes"'), "SUCCESS");
    this.appendDummyInput()
      .appendField("Alpha:")
      .appendField(new Blockly.FieldNumber(0.05, 0.01, 0.99, 0.01), "ALPHA");
    this.appendDummyInput()
      .appendField("Test type:")
      .appendField(new Blockly.FieldDropdown([
        ["Two-sided", "two_sided"],
        ["One-sided", "one_sided"]
      ]), "TEST_TYPE");
    
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("Bootstrap confidence interval for one proportion using HELPrct data");
  }
};

// Generic bootstrap block
Blockly.Blocks['Gbootstrap_ci_prop'] = {
  init: function() {
    this.appendDummyInput()
      .appendField("Bootstrap CI:")
      .appendField("set.seed(")
      .appendField(new Blockly.FieldNumber(123, 1, 99999), "SEED")
      .appendField(")");
    this.appendDummyInput()
      .appendField("Variable:")
      .appendField(new Blockly.FieldTextInput(""), "VAR");
    this.appendDummyInput()
      .appendField("Success value:")
      .appendField(new Blockly.FieldTextInput('"yes"'), "SUCCESS");
    this.appendDummyInput()
      .appendField("Data:")
      .appendField(new Blockly.FieldTextInput(""), "DATASET");
    this.appendDummyInput()
      .appendField("Alpha:")
      .appendField(new Blockly.FieldNumber(0.05, 0.01, 0.99, 0.01), "ALPHA");
    this.appendDummyInput()
      .appendField("Test type:")
      .appendField(new Blockly.FieldDropdown([
        ["Two-sided", "two_sided"],
        ["One-sided", "one_sided"]
      ]), "TEST_TYPE");
    
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("Bootstrap confidence interval for one proportion");
  }
};

// Code generator function for both blocks
function generateBootstrapCode(block) {
  const seed = block.getFieldValue('SEED');
  const variable = block.getFieldValue('VAR');
  const success = block.getFieldValue('SUCCESS');
  const dataset = block.getType() === 'bootstrap_prop' ? 'HELPrct' : block.getFieldValue('DATASET');
  const alpha = block.getFieldValue('ALPHA');
  const testType = block.getFieldValue('TEST_TYPE');
  
  let code = `set.seed(${seed})\n`;
  code += `prop_boot <- do(5000) * prop(~${variable}, data = resample(${dataset}), success = ${success})\n`;
  
  if (testType === 'two_sided') {
    code += `confint(prop_boot, level = (1 - ${alpha}), method = "quantile") ## two-sided test at ${alpha} ##\n`;
  } else {
    code += `confint(prop_boot, level = (1 - 2*${alpha}), method = "quantile") ## one-sided test at ${alpha} ##\n`;
  }
  
  return code;
};

Blockly.JavaScript['bootstrap_prop'] = generateBootstrapCode;
Blockly.JavaScript['Gbootstrap_prop'] = generateBootstrapCode;