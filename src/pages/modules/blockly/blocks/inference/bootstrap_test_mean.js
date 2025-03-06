import Blockly from 'blockly';
import { quantitative_vars } from '../../constants';

// HELPrct-specific bootstrap test for mean block
Blockly.Blocks['bootstrap_test_mean'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('Bootstrap Test for Mean (HELPrct):')
      .appendField('set.seed(')
      .appendField(new Blockly.FieldNumber(123, 1, 99999), 'SEED')
      .appendField(')');
    this.appendDummyInput()
      .appendField('Variable:')
      .appendField(new Blockly.FieldDropdown(quantitative_vars), 'VAR');
    this.appendDummyInput()
      .appendField('Null value:')
      .appendField(new Blockly.FieldNumber(0, -999999, 999999), 'NULL_VALUE');
    this.appendDummyInput()
      .appendField('Sample size:')
      .appendField(new Blockly.FieldNumber(100, 1), 'SAMPLE_SIZE');
    this.appendDummyInput()
      .appendField('Alternative:')
      .appendField(
        new Blockly.FieldDropdown([
          ['less than', 'less'],
          ['greater than', 'greater'],
          ['not equal', 'two.sided'],
        ]),
        'ALTERNATIVE'
      );

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
      .appendField('Bootstrap Test for Mean:')
      .appendField('set.seed(')
      .appendField(new Blockly.FieldNumber(123, 1, 99999), 'SEED')
      .appendField(')');
    this.appendDummyInput()
      .appendField('Variable:')
      .appendField(new Blockly.FieldTextInput(''), 'VAR');
    this.appendDummyInput()
      .appendField('Data:')
      .appendField(new Blockly.FieldTextInput(''), 'DATASET');
    this.appendDummyInput()
      .appendField('Null value:')
      .appendField(new Blockly.FieldNumber(0, -999999, 999999), 'NULL_VALUE');
    this.appendDummyInput()
      .appendField('Sample size:')
      .appendField(new Blockly.FieldNumber(100, 1), 'SAMPLE_SIZE');
    this.appendDummyInput()
      .appendField('Alternative:')
      .appendField(
        new Blockly.FieldDropdown([
          ['less than', 'less'],
          ['greater than', 'greater'],
          ['not equal', 'two.sided'],
        ]),
        'ALTERNATIVE'
      );

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
  const dataset =
    block.getType() === 'bootstrap_test_mean' ? 'HELPrct' : block.getFieldValue('DATASET');
  const nullValue = block.getFieldValue('NULL_VALUE');
  const sampleSize = block.getFieldValue('SAMPLE_SIZE');
  const alternative = block.getFieldValue('ALTERNATIVE');

  let code = `# Get the observed sample mean\nobserved_mean <- mean(~${variable}, data=${dataset})\n\n`;
  code += `# Create shifted data for null hypothesis\n${dataset}_shifted <- mutate(${dataset}, new_${variable} = ${variable} - observed_mean + ${nullValue})\n\n`;
  code += `set.seed(${seed})\n`;
  code += `sim_null <- do(5000) * mean(~ new_${variable}, data = resample(${dataset}_shifted))\n\n`;

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