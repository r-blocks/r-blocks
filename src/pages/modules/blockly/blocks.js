import Blockly from 'blockly';
import 'blockly/javascript';
import { BlocklyR } from './blockly_compressed';

// Import block definitions directly
import './blocks/general/glimpse';
import './blocks/general/head';
import './blocks/general/help';
import './blocks/general/lib';
import './blocks/general/names';
import './blocks/general/tail';
import './blocks/inference/anova';
import './blocks/inference/proptest';
import './blocks/inference/regression';
import './blocks/inference/ttest';
import './blocks/statistics/correlation';
import './blocks/statistics/tally';
import './blocks/statistics/favstats'; 
import './blocks/visualization/gf_boxplot';
import './blocks/visualization/gf_histogram';
import './blocks/visualization/gf_bar';
import './blocks/visualization/gf_point';
import './blocks/visualization/gf_dens';
import './blocks/visualization/gf_counts';
import './blocks/visualization/gf_dens_color';
import './blocks/visualization/gf_percents';
import './blocks/visualization/mosaicplot';
import './blocks/visualization/pie';

// Setup R blocks generator
Blockly.RBlocks = new Blockly.Generator('RBlocks');

export { Blockly, BlocklyR };