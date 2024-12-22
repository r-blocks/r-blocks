import Blockly from 'blockly';
import 'blockly/javascript';
import { BlocklyR } from './blockly_compressed';

// Import block definitions directly
import './blocks/inference/anova';
import './blocks/inference/ttest';
import './blocks/statistics/favstats'; 
import './blocks/visualization/gf_boxplot';
import './blocks/visualization/gf_histogram';
// Import other block files as needed

// Setup R blocks generator
Blockly.RBlocks = new Blockly.Generator('RBlocks');

export { Blockly, BlocklyR };