import Blockly from 'blockly';
import { quantitative_vars, quantitative_vars_alt } from '../../constants';

/**
 * Simple Linear Regression block definition
 */
Blockly.Blocks['slrsummary'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('summary(lm(')
      .appendField(new Blockly.FieldDropdown(quantitative_vars), 'quantitative_variable_1')
      .appendField('~')
      .appendField(new Blockly.FieldDropdown(quantitative_vars_alt), 'quantitative_variable_2')
      .appendField(', data = ')
      .appendField(new Blockly.FieldDropdown([['HELPrct', 'HELPrct']]), 'data')
      .appendField('))');
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#039be5');
    this.setTooltip('simple linear regression');
    this.setHelpUrl('https://www.rdocumentation.org/packages/stats/versions/3.6.2/topics/lm');
  },
};

/**
 * Generator for SLR block
 */
Blockly.JavaScript['slrsummary'] = function (block) {
  var dropdown_quantitative_var1_name = block.getFieldValue('quantitative_variable_1');
  var dropdown_quantitative_var2_name = block.getFieldValue('quantitative_variable_2');
  var dropdown_data_name = block.getFieldValue('data');
  var code =
    'summary(lm(' +
    dropdown_quantitative_var1_name +
    '~' +
    dropdown_quantitative_var2_name +
    ', data = ' +
    dropdown_data_name +
    '))\n';
  return code;
};

/**
 * Generic SLR block definition with text inputs
 */
Blockly.Blocks['Gslrsummary'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('summary(lm(')
      .appendField(new Blockly.FieldTextInput(''), 'quantitative_variable_1')
      .appendField('~')
      .appendField(new Blockly.FieldTextInput(''), 'quantitative_variable_2')
      .appendField(', data = ')
      .appendField(new Blockly.FieldTextInput(''), 'data')
      .appendField('))');
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#039be5');
    this.setTooltip('simple linear regression');
    this.setHelpUrl('https://www.rdocumentation.org/packages/stats/versions/3.6.2/topics/lm');
  },
};

/**
 * Generator for generic SLR block
 */
Blockly.JavaScript['Gslrsummary'] = function (block) {
  var dropdown_quantitative_var1_name = block.getFieldValue('quantitative_variable_1');
  var dropdown_quantitative_var2_name = block.getFieldValue('quantitative_variable_2');
  var dropdown_data_name = block.getFieldValue('data');
  var code =
    'summary(lm(' +
    dropdown_quantitative_var1_name +
    '~' +
    dropdown_quantitative_var2_name +
    ', data = ' +
    dropdown_data_name +
    '))\n';
  return code;
};

export default {};
