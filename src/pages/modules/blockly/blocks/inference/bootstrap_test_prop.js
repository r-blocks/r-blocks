import Blockly from 'blockly';
import { categorical_vars, categorical_vars_alt } from '../../constants';

// HELPrct-specific bootstrap test block
Blockly.Blocks['bootstrap_test_prop'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('set.seed(')
      .appendField(new Blockly.FieldNumber(123, 1, 99999), 'SEED')
      .appendField(')');

    // Store the variable field for later reference
    var varField = new Blockly.FieldDropdown(categorical_vars, (newVar) => {
      // This function will be called when the variable changes
      if (this.workspace) {
        // Update success field based on selected variable
        if (newVar === 'substance') {
          this.getInput('PROP_INPUT').removeField('SUCCESS');
          this.getInput('PROP_INPUT').appendField(
            new Blockly.FieldDropdown([
              ['"alcohol"', '"alcohol"'],
              ['"cocaine"', '"cocaine"'],
              ['"heroin"', '"heroin"'],
            ]),
            'SUCCESS'
          );
        } else if (newVar === 'anysub') {
          this.getInput('PROP_INPUT').removeField('SUCCESS');
          this.getInput('PROP_INPUT').appendField(
            new Blockly.FieldDropdown([
              ['"yes"', '"yes"'],
              ['"no"', '"no"'],
            ]),
            'SUCCESS'
          );
          // Set default for anysub
          this.setFieldValue('"yes"', 'SUCCESS');
        } else if (newVar === 'sex') {
          this.getInput('PROP_INPUT').removeField('SUCCESS');
          this.getInput('PROP_INPUT').appendField(
            new Blockly.FieldDropdown([
              ['"male"', '"male"'],
              ['"female"', '"female"'],
            ]),
            'SUCCESS'
          );
          // Set default for sex
          this.setFieldValue('"male"', 'SUCCESS');
        } else if (newVar === 'homeless') {
          this.getInput('PROP_INPUT').removeField('SUCCESS');
          this.getInput('PROP_INPUT').appendField(
            new Blockly.FieldDropdown([
              ['"homeless"', '"homeless"'],
              ['"housed"', '"housed"'],
            ]),
            'SUCCESS'
          );
          // Set default for homeless
          this.setFieldValue('"homeless"', 'SUCCESS');
        } else if (newVar === 'link') {
          this.getInput('PROP_INPUT').removeField('SUCCESS');
          this.getInput('PROP_INPUT').appendField(
            new Blockly.FieldDropdown([
              ['"yes"', '"yes"'],
              ['"no"', '"no"'],
            ]),
            'SUCCESS'
          );
          // Set default for link
          this.setFieldValue('"yes"', 'SUCCESS');
        } else if (newVar === 'racegrp') {
          this.getInput('PROP_INPUT').removeField('SUCCESS');
          this.getInput('PROP_INPUT').appendField(
            new Blockly.FieldDropdown([
              ['"black"', '"black"'],
              ['"hispanic"', '"hispanic"'],
              ['"white"', '"white"'],
              ['"other"', '"other"'],
            ]),
            'SUCCESS'
          );
          // Set default for racegrp
          this.setFieldValue('"black"', 'SUCCESS');
        } else if (newVar === 'satreat') {
          this.getInput('PROP_INPUT').removeField('SUCCESS');
          this.getInput('PROP_INPUT').appendField(
            new Blockly.FieldDropdown([
              ['"yes"', '"yes"'],
              ['"no"', '"no"'],
            ]),
            'SUCCESS'
          );
          // Set default for satreat
          this.setFieldValue('"yes"', 'SUCCESS');
        } else if (newVar === 'treat') {
          this.getInput('PROP_INPUT').removeField('SUCCESS');
          this.getInput('PROP_INPUT').appendField(
            new Blockly.FieldDropdown([
              ['"yes"', '"yes"'],
              ['"no"', '"no"'],
            ]),
            'SUCCESS'
          );
          // Set default for treat
          this.setFieldValue('"yes"', 'SUCCESS');
        } else {
          this.getInput('PROP_INPUT').removeField('SUCCESS');
          this.getInput('PROP_INPUT').appendField(
            new Blockly.FieldDropdown([
              ['"yes"', '"yes"'],
              ['"no"', '"no"'],
            ]),
            'SUCCESS'
          );
        }
      }
      return newVar;
    });

    this.appendDummyInput('PROP_INPUT')
      .appendField('observed_prop <- prop(~')
      .appendField(varField, 'VAR')
      .appendField(', data=HELPrct, success=')
      .appendField(
        new Blockly.FieldDropdown([
          ['"alcohol"', '"alcohol"'],
          ['"cocaine"', '"cocaine"'],
          ['"heroin"', '"heroin"'],
        ]),
        'SUCCESS'
      )
      .appendField(')');
    this.appendDummyInput()
      .appendField('sim_null <- do(')
      .appendField(new Blockly.FieldNumber(500, 10, 10000), 'ITERATIONS')
      .appendField(') * rflip(n = ')
      .appendField(new Blockly.FieldNumber(100, 1), 'SAMPLE_SIZE')
      .appendField(', prob = ')
      .appendField(new Blockly.FieldNumber(0.5, 0, 1, 0.01), 'NULL_VALUE')
      .appendField(')');
    this.appendDummyInput()
      .appendField('prop(~ (')
      .appendField(
        new Blockly.FieldDropdown([
          ['prop <= observed_prop', 'less'],
          ['prop >= observed_prop', 'greater'],
          ['abs(prop-NULL) >= abs(observed_prop-NULL)', 'two.sided'],
        ]),
        'ALTERNATIVE'
      )
      .appendField('), data = sim_null)');

    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('Bootstrap test for one proportion using HELPrct data');

    // Explicitly ensure the SUCCESS field is "alcohol" initially since substance is the default
    this.setFieldValue('"alcohol"', 'SUCCESS');
  },
};

// Generic bootstrap test block
Blockly.Blocks['Gbootstrap_test_prop'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('set.seed(')
      .appendField(new Blockly.FieldNumber(123, 1, 99999), 'SEED')
      .appendField(')');
    this.appendDummyInput()
      .appendField('observed_prop <- prop(~')
      .appendField(new Blockly.FieldTextInput(''), 'VAR')
      .appendField(', data=')
      .appendField(new Blockly.FieldTextInput(''), 'DATASET')
      .appendField(', success=')
      .appendField(new Blockly.FieldTextInput('"yes"'), 'SUCCESS')
      .appendField(')');
    this.appendDummyInput()
      .appendField('sim_null <- do(')
      .appendField(new Blockly.FieldNumber(500, 10, 10000), 'ITERATIONS')
      .appendField(') * rflip(n = ')
      .appendField(new Blockly.FieldNumber(100, 1), 'SAMPLE_SIZE')
      .appendField(', prob = ')
      .appendField(new Blockly.FieldNumber(0.5, 0, 1, 0.01), 'NULL_VALUE')
      .appendField(')');
    this.appendDummyInput()
      .appendField('prop(~ (')
      .appendField(
        new Blockly.FieldDropdown([
          ['prop <= observed_prop', 'less'],
          ['prop >= observed_prop', 'greater'],
          ['abs(prop-NULL) >= abs(observed_prop-NULL)', 'two.sided'],
        ]),
        'ALTERNATIVE'
      )
      .appendField('), data = sim_null)');

    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('Bootstrap test for one proportion');
  },
};

// Code generator function for both blocks
function generateBootstrapTestCode(block) {
  const seed = block.getFieldValue('SEED');
  const variable = block.getFieldValue('VAR');
  const success = block.getFieldValue('SUCCESS');
  // Changed from block.getType() to block.type
  const dataset = block.type === 'bootstrap_test_prop' ? 'HELPrct' : block.getFieldValue('DATASET');
  const nullValue = block.getFieldValue('NULL_VALUE');
  const sampleSize = block.getFieldValue('SAMPLE_SIZE');
  const alternative = block.getFieldValue('ALTERNATIVE');
  const iterations = block.getFieldValue('ITERATIONS');

  let code = `set.seed(${seed})\n`;
  code += `observed_prop <- prop(~${variable}, data=${dataset}, success=${success})\n`;
  code += `sim_null <- do(${iterations}) * rflip(n = ${sampleSize}, prob = ${nullValue})\n`;

  switch (alternative) {
    case 'less':
      code += `prop(~ (prop <= observed_prop), data = sim_null) ## P-value for less than ##\n`;
      break;
    case 'greater':
      code += `prop(~ (prop >= observed_prop), data = sim_null) ## P-value for greater than ##\n`;
      break;
    case 'two.sided':
      code += `prop(~ (abs(prop-${nullValue}) >= abs(observed_prop-${nullValue})), data = sim_null) ## P-value for not equal ##\n`;
      break;
  }

  return code;
}

Blockly.JavaScript['bootstrap_test_prop'] = generateBootstrapTestCode;
Blockly.JavaScript['Gbootstrap_test_prop'] = generateBootstrapTestCode;

export default {};
