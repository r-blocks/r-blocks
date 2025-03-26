import Blockly from 'blockly';
import { categorical_vars, categorical_vars_alt } from '../../constants';

// HELPrct-specific bootstrap CI block
Blockly.Blocks['bootstrap_ci_prop'] = {
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
      .appendField('boot <- do(')
      .appendField(new Blockly.FieldNumber(500, 10, 10000), 'ITERATIONS')
      .appendField(') * {resample(HELPrct) %$% prop(~')
      .appendField(new Blockly.FieldTextInput(''), 'NEW_VAR')
      .appendField(', success=observed_prop[["success"]])}');
    this.appendDummyInput()
      .appendField('confint(boot, level = ')
      .appendField(new Blockly.FieldNumber(0.95, 0, 1, 0.01), 'CONF_LEVEL')
      .appendField(', method = "quantile")');

    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('Bootstrap confidence interval for one proportion using HELPrct data');

    // Explicitly ensure the SUCCESS field is "alcohol" initially since substance is the default
    this.setFieldValue('"alcohol"', 'SUCCESS');

    // Automatically update the NEW_VAR field when VAR changes
    this.setOnChange(function (changeEvent) {
      if (
        changeEvent.name === 'VAR' ||
        (changeEvent.element === 'field' && changeEvent.name === 'VAR')
      ) {
        const varValue = this.getFieldValue('VAR');
        this.setFieldValue(varValue, 'NEW_VAR');
      }
    });
  },
};

// Generic bootstrap CI block
Blockly.Blocks['Gbootstrap_ci_prop'] = {
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
      .appendField('boot <- do(')
      .appendField(new Blockly.FieldNumber(500, 10, 10000), 'ITERATIONS')
      .appendField(') * {resample(')
      .appendField(new Blockly.FieldTextInput(''), 'RESAMPLE_DATASET')
      .appendField(') %$% prop(~')
      .appendField(new Blockly.FieldTextInput(''), 'NEW_VAR')
      .appendField(', success=observed_prop[["success"]])}');
    this.appendDummyInput()
      .appendField('confint(boot, level = ')
      .appendField(new Blockly.FieldNumber(0.95, 0, 1, 0.01), 'CONF_LEVEL')
      .appendField(', method = "quantile")');

    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('Bootstrap confidence interval for one proportion');

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
        changeEvent.name === 'VAR' ||
        (changeEvent.element === 'field' && changeEvent.name === 'VAR')
      ) {
        const varValue = this.getFieldValue('VAR');
        this.setFieldValue(varValue, 'NEW_VAR');
      }
    });
  },
};

// Code generator function for both blocks
function generateBootstrapCICode(block) {
  const seed = block.getFieldValue('SEED');
  const variable = block.getFieldValue('VAR');
  const success = block.getFieldValue('SUCCESS');
  // Changed from block.getType() to block.type
  const dataset = block.type === 'bootstrap_ci_prop' ? 'HELPrct' : block.getFieldValue('DATASET');
  const iterations = block.getFieldValue('ITERATIONS');
  const confLevel = block.getFieldValue('CONF_LEVEL');

  // Changed from block.getType() to block.type
  const resampleDataset =
    block.type === 'bootstrap_ci_prop' ? 'HELPrct' : block.getFieldValue('RESAMPLE_DATASET');
  const newVar = block.getFieldValue('NEW_VAR');

  let code = `# Bootstrap confidence interval for proportion\n`;
  code += `set.seed(${seed})\n`;
  code += `observed_prop <- prop(~${variable}, data=${dataset}, success=${success})\n`;
  code += `boot <- do(${iterations}) * {resample(${resampleDataset}) %$% prop(~${newVar}, success=observed_prop[["success"]])}\n`;
  code += `confint(boot, level = ${confLevel}, method = "quantile")\n`;

  return code;
}

Blockly.JavaScript['bootstrap_ci_prop'] = generateBootstrapCICode;
Blockly.JavaScript['Gbootstrap_ci_prop'] = generateBootstrapCICode;

export default {};
