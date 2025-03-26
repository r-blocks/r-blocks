import Blockly from 'blockly';
import { quantitative_vars } from '../../constants';

// HELPrct-specific bootstrap test for mean block
Blockly.Blocks['bootstrap_test_mean'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('set.seed(')
      .appendField(new Blockly.FieldNumber(123, 1, 99999), 'SEED')
      .appendField(')');
    this.appendDummyInput()
      .appendField('observed_mean <- mean(~')
      .appendField(new Blockly.FieldDropdown(quantitative_vars), 'VAR')
      .appendField(', data=HELPrct)');
    this.appendDummyInput()
      .appendField('HELPrct_shifted <- mutate(HELPrct, new_')
      .appendField(new Blockly.FieldDropdown(quantitative_vars), 'VAR')
      .appendField(' = ')
      .appendField(new Blockly.FieldDropdown(quantitative_vars), 'VAR')
      .appendField(' - observed_mean + ')
      .appendField(new Blockly.FieldNumber(0, -999999, 999999), 'NULL_VALUE')
      .appendField(')');
    this.appendDummyInput()
      .appendField('sim_null <- do(')
      .appendField(new Blockly.FieldNumber(500, 10, 10000), 'ITERATIONS')
      .appendField(') * mean(~ new_')
      .appendField(new Blockly.FieldDropdown(quantitative_vars), 'VAR')
      .appendField(', data = resample(HELPrct_shifted))');
    this.appendDummyInput()
      .appendField('prop(~ (')
      .appendField(
        new Blockly.FieldDropdown([
          ['mean <= observed_mean', 'less'],
          ['mean >= observed_mean', 'greater'],
          ['abs(mean-NULL) >= abs(observed_mean-NULL)', 'two.sided'],
        ]),
        'ALTERNATIVE'
      )
      .appendField('), data = sim_null)');

    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('Bootstrap test for one mean using HELPrct data');
  },
};

// Generic bootstrap test for mean block
Blockly.Blocks['Gbootstrap_test_mean'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('set.seed(')
      .appendField(new Blockly.FieldNumber(123, 1, 99999), 'SEED')
      .appendField(')');
    this.appendDummyInput()
      .appendField('observed_mean <- mean(~')
      .appendField(new Blockly.FieldTextInput(''), 'VAR')
      .appendField(', data=')
      .appendField(new Blockly.FieldTextInput(''), 'DATASET')
      .appendField(')');
    this.appendDummyInput()
      .appendField('')
      .appendField(new Blockly.FieldTextInput(''), 'DATASET')
      .appendField('_shifted <- mutate(')
      .appendField(new Blockly.FieldTextInput(''), 'DATASET')
      .appendField(', new_')
      .appendField(new Blockly.FieldTextInput(''), 'VAR')
      .appendField(' = ')
      .appendField(new Blockly.FieldTextInput(''), 'VAR')
      .appendField(' - observed_mean + ')
      .appendField(new Blockly.FieldNumber(0, -999999, 999999), 'NULL_VALUE')
      .appendField(')');
    this.appendDummyInput()
      .appendField('sim_null <- do(')
      .appendField(new Blockly.FieldNumber(5000, 100, 10000), 'ITERATIONS')
      .appendField(') * mean(~ new_')
      .appendField(new Blockly.FieldTextInput(''), 'VAR')
      .appendField(', data = resample(')
      .appendField(new Blockly.FieldTextInput(''), 'DATASET')
      .appendField('_shifted))');
    this.appendDummyInput()
      .appendField('prop(~ (')
      .appendField(
        new Blockly.FieldDropdown([
          ['mean <= observed_mean', 'less'],
          ['mean >= observed_mean', 'greater'],
          ['abs(mean-NULL) >= abs(observed_mean-NULL)', 'two.sided'],
        ]),
        'ALTERNATIVE'
      )
      .appendField('), data = sim_null)');

    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('Bootstrap test for one mean');
  },
};

// Code generator function for both blocks
function generateBootstrapTestMeanCode(block) {
  const seed = block.getFieldValue('SEED');
  const variable = block.getFieldValue('VAR');
  // Changed from block.getType() to block.type
  const dataset = block.type === 'bootstrap_test_mean' ? 'HELPrct' : block.getFieldValue('DATASET');
  const nullValue = block.getFieldValue('NULL_VALUE');
  const sampleSize = block.getFieldValue('SAMPLE_SIZE');
  const alternative = block.getFieldValue('ALTERNATIVE');
  const iterations = block.getFieldValue('ITERATIONS');

  let code = `# Get the observed sample mean\nobserved_mean <- mean(~${variable}, data=${dataset})\n\n`;
  code += `# Create shifted data for null hypothesis\n${dataset}_shifted <- mutate(${dataset}, new_${variable} = ${variable} - observed_mean + ${nullValue})\n\n`;
  code += `set.seed(${seed})\n`;
  code += `sim_null <- do(${iterations}) * mean(~ new_${variable}, data = resample(${dataset}_shifted))\n\n`;

  switch (alternative) {
    case 'less':
      code += `prop(~ (mean <= observed_mean), data = sim_null) ## P-value for less than ##\n`;
      break;
    case 'greater':
      code += `prop(~ (mean >= observed_mean), data = sim_null) ## P-value for greater than ##\n`;
      break;
    case 'two.sided':
      code += `prop(~ (abs(mean-${nullValue}) >= abs(observed_mean-${nullValue})), data = sim_null) ## P-value for not equal ##\n`;
      break;
  }

  return code;
}

Blockly.JavaScript['bootstrap_test_mean'] = generateBootstrapTestMeanCode;
Blockly.JavaScript['Gbootstrap_test_mean'] = generateBootstrapTestMeanCode;

export default {};
