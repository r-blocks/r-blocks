/**
 * Workspace Component for RBlocks
 *
 * Main workspace implementation that allows users to create R statistical analysis
 * code using a block-based programming interface. Contains the Blockly workspace
 * configuration and block definitions for statistical operations.
 *
 * Dependencies:
 * - React
 * - Blockly
 * - react-blockly
 * - @mui/icons-material
 *
 * Related:
 * - See Toolbar component for navigation controls
 * - See ./blockly/blocks for block definitions
 */

import React, { useState } from 'react';

//Blockly
import Blockly from 'blockly';
import { BlocklyWorkspace } from 'react-blockly';
import './blockly/blocks';

// Contexts

// Style
import './styles/base.css';

/**
 * Renders a Blockly visual programming workspace for creating R statistical analysis code.
 * Includes blocks for general functionality, numerical summaries, data visualization
 * and statistical inference.
 *
 * @returns {JSX.Element} A Blockly workspace component
 */
export default function Workspace() {
  const [xml, setXml] = useState('');

  const [javascriptCode, setJavascriptCode] = useState('');

  const initialXml =
    '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="text" x="70" y="30"><field name="TEXT"></field></block></xml>';

  /**
   * @constant {Object} toolboxCategories - Configuration object defining the toolbox categories and blocks
   */
  const toolboxCategories = {
    kind: 'categoryToolbox',
    contents: [
      {
        kind: 'category',
        name: 'mosaic',
        colour: '#4a148c',
        contents: [
          {
            kind: 'category',
            name: 'General Functions',
            colour: '20',
            contents: [
              { kind: 'block', type: 'lib' },
              { kind: 'block', type: 'names' },
              { kind: 'block', type: 'glimpse' },
              { kind: 'block', type: 'head' },
              { kind: 'block', type: 'tail' },
              { kind: 'block', type: 'help' },
            ],
          },
          {
            kind: 'category',
            name: 'Numerical Summaries',
            colour: '230',
            contents: [
              { kind: 'block', type: 'tallydata' },
              { kind: 'block', type: 'tallydataformat' },
              { kind: 'block', type: 'tallysexdata' },
              { kind: 'block', type: 'tallysexdata2' },
              { kind: 'block', type: 'tallysexformatdata' },
              { kind: 'block', type: 'favstatsdata' },
              { kind: 'block', type: 'favstatssubstancedata' },
              { kind: 'block', type: 'favstatssubstancedata2' },
              { kind: 'block', type: 'cor' },
            ],
          },
          {
            kind: 'category',
            name: 'Visualizations',
            colour: '120',
            contents: [
              { kind: 'block', type: 'gf_bar' },
              { kind: 'block', type: 'gf_counts' },
              { kind: 'block', type: 'gf_percents' },
              { kind: 'block', type: 'gf_boxplot' },
              { kind: 'block', type: 'gf_boxplot_substance' },
              { kind: 'block', type: 'gf_histogram' },
              { kind: 'block', type: 'gf_histogram_substance' },
              { kind: 'block', type: 'gf_dens' },
              { kind: 'block', type: 'gf_dens_color' },
              { kind: 'block', type: 'gf_point' },
            ],
          },
          {
            kind: 'category',
            name: 'Statistical Inference',
            colour: '#039be5',
            contents: [
              { kind: 'block', type: 'proptest' },
              { kind: 'block', type: 'proptest2' },
              { kind: 'block', type: 'ttest' },
              { kind: 'block', type: 'ttest2' },
              { kind: 'block', type: 'xchisqtest' },
              { kind: 'block', type: 'anova' },
              { kind: 'block', type: 'slrsummary' },
            ],
          },
        ],
      },
      {
        kind: 'category',
        name: 'ggplot2',
        colour: '#00796b',
        contents: [
          {
            kind: 'category',
            name: 'General Functions',
            colour: '20',
            contents: [
              { kind: 'block', type: 'Glib' },
              { kind: 'block', type: 'Gnames' },
              { kind: 'block', type: 'Gglimpse' },
              { kind: 'block', type: 'Ghead' },
              { kind: 'block', type: 'Gtail' },
              { kind: 'block', type: 'Ghelp' },
            ],
          },
          {
            kind: 'category',
            name: 'Plot Components',
            colour: '120',
            contents: [
              { kind: 'block', type: 'Gggplot_init' },
              { kind: 'block', type: 'Ggeom_point' },
              { kind: 'block', type: 'Ggeom_line' },
              { kind: 'block', type: 'Ggeom_smooth' },
              { kind: 'block', type: 'Ggeom_bar' },
              { kind: 'block', type: 'Ggeom_boxplot' },
              { kind: 'block', type: 'Ggeom_histogram' },
              { kind: 'block', type: 'Ggeom_density' },
              { kind: 'block', type: 'Gtheme_minimal' },
              { kind: 'block', type: 'Glabs' },
            ],
          },
          {
            kind: 'category',
            name: 'Advanced Visualizations',
            colour: '120',
            contents: [
              { kind: 'block', type: 'Gpie' },
              { kind: 'block', type: 'Gmosaicplot' },
              { kind: 'block', type: 'Ggf_bar' },
              { kind: 'block', type: 'Ggf_counts' },
              { kind: 'block', type: 'Ggf_percents' },
              { kind: 'block', type: 'Ggf_boxplot' },
              { kind: 'block', type: 'Ggf_boxplot_substance' },
              { kind: 'block', type: 'Ggf_histogram' },
              { kind: 'block', type: 'Ggf_histogram_substance' },
              { kind: 'block', type: 'Ggf_dens' },
              { kind: 'block', type: 'Ggf_dens_color' },
              { kind: 'block', type: 'Ggf_point' },
            ],
          },
          {
            kind: 'category',
            name: 'Statistical Functions',
            colour: '#039be5',
            contents: [
              { kind: 'block', type: 'Gproptest' },
              { kind: 'block', type: 'Gproptest2' },
              { kind: 'block', type: 'Gttest' },
              { kind: 'block', type: 'Gttest2' },
              { kind: 'block', type: 'Gxchisqtest' },
              { kind: 'block', type: 'Ganova' },
              { kind: 'block', type: 'Gslrsummary' },
            ],
          },
        ],
      },
    ],
  };

  /**
   * Handles workspace changes by converting blocks to code and updating the embedded R snippet
   * @param {Object} workspace - The Blockly workspace instance
   */
  function workspaceDidChange(workspace) {
    const code = Blockly.JavaScript.workspaceToCode(workspace);
    //setJavascriptCode(code);
    //document.getElementById('codeBody').innerText = code;
    const linked = 'https://rdrr.io/snippets/embed/?code=' + encodeURI(code);
    //document.getElementById('URIBody').innerText = linked;
    document.getElementById('snippet').src = linked;
  }

  /*
    function myUpdateFunction(event) {
        var code = Blockly.JavaScript.workspaceToCode(workspace);
        document.getElementById('codeBody').value = code;
        document.getElementById('outputCode').value = code;
    }
    workspace.addChangeListener(myUpdateFunction);
    */

  // reference: https://developers.google.com/blockly/guides/configure/web/code-generators#realtime_generation

  /**
   * Renders the Blockly workspace component
   * @returns {JSX.Element} BlocklyWorkspace component with configured toolbox and handlers
   */
  return (
    <BlocklyWorkspace
      className="blockly"
      toolboxConfiguration={toolboxCategories}
      initialXml={initialXml}
      workspaceConfiguration={{
        grid: {
          spacing: 20,
          length: 3,
          colour: '#ccc',
          snap: true,
        },
      }}
      onWorkspaceChange={workspaceDidChange}
      onXmlChange={setXml}
    />
  );
}
