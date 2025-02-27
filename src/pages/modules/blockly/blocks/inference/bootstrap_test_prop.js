import Blockly from 'blockly';
import { categorical_vars, categorical_vars_alt } from '../../constants';

// HELPrct-specific bootstrap test block
Blockly.Blocks['bootstrap_test_prop'] = {
  init: function() {
    this.appendDummyInput()
      .appendField("Bootstrap Test (HELPrct):")
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
      .appendField("Null value:")
      .appendField(new Blockly.FieldNumber(0.5, 0, 1, 0.01), "NULL_VALUE");
    this.appendDummyInput()
      .appendField("Sample size:")
      .appendField(new Blockly.FieldNumber(100, 1), "SAMPLE_SIZE");
    this.appendDummyInput()
      .appendField("Alternative:")
      .appendField(new Blockly.FieldDropdown([
        ["less than", "less"],
        ["greater than", "greater"],
        ["not equal", "two.sided"]
      ]), "ALTERNATIVE");
    
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("Bootstrap test for one proportion using HELPrct data");
  }
};

// Generic bootstrap test block
Blockly.Blocks['Gbootstrap_test_prop'] = {
  init: function() {
    this.appendDummyInput()
      .appendField("Bootstrap Test:")
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
      .appendField("Null value:")
      .appendField(new Blockly.FieldNumber(0.5, 0, 1, 0.01), "NULL_VALUE");
    this.appendDummyInput()
      .appendField("Sample size:")
      .appendField(new Blockly.FieldNumber(100, 1), "SAMPLE_SIZE");
    this.appendDummyInput()
      .appendField("Alternative:")
      .appendField(new Blockly.FieldDropdown([
        ["less than", "less"],
        ["greater than", "greater"],
        ["not equal", "two.sided"]
      ]), "ALTERNATIVE");
    
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("Bootstrap test for one proportion");
  }
};

// Code generator function for both blocks
function generateBootstrapTestCode(block) {
  const seed = block.getFieldValue('SEED');
  const variable = block.getFieldValue('VAR');
  const success = block.getFieldValue('SUCCESS');
  const dataset = block.getType() === 'bootstrap_test_prop' ? 'HELPrct' : block.getFieldValue('DATASET');
  const nullValue = block.getFieldValue('NULL_VALUE');
  const sampleSize = block.getFieldValue('SAMPLE_SIZE');
  const alternative = block.getFieldValue('ALTERNATIVE');
  
  let code = `set.seed(${seed})\n`;
  code += `sim_null <- do(5000) * rflip(n = ${sampleSize}, prob = ${nullValue})\n`;
  
  switch(alternative) {
    case 'less':
      code += `prop(~ (prop <= ${nullValue}), data = sim_null) ## P-value for less than ##\n`;
      break;
    case 'greater':
      code += `prop(~ (prop >= ${nullValue}), data = sim_null) ## P-value for greater than ##\n`;
      break;
    case 'two.sided':
      code += `prop(~ (abs(prop-${nullValue}) >= abs(${nullValue}-${nullValue})), data = sim_null) ## P-value for not equal ##\n`;
      break;
  }
  
  return code;
}

Blockly.JavaScript['bootstrap_test_prop'] = generateBootstrapTestCode;
Blockly.JavaScript['Gbootstrap_test_prop'] = generateBootstrapTestCode;

export default {};