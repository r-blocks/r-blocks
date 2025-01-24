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

import React, { useState, useEffect } from 'react';

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
export default function Workspace({ initialWorkspaceXml, onXmlChange }) {
  const [workspaceXml, setWorkspaceXml] = useState(
    initialWorkspaceXml ||
      '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="text" x="70" y="30"><field name="TEXT"></field></block></xml>'
  );

  // Handle external XML updates
  useEffect(() => {
    if (initialWorkspaceXml) {
      setWorkspaceXml(initialWorkspaceXml);
    }
  }, [initialWorkspaceXml]);

  // Handle XML changes
  const handleXmlChange = (newXml) => {
    setWorkspaceXml(newXml);
    if (onXmlChange) {
      onXmlChange(newXml);
    }
  };

  /**
   * Updated RBlocks Workspace Component with Consistent Directory Structure
   *
   * The dropdown structure for both mosaic and ggplot2 blocks has been updated
   * to have the same categories and options for consistency.
   */

  const toolboxCategories = {
    kind: 'categoryToolbox',
    contents: [
      {
        kind: 'category',
        name: 'General Functions',
        colour: '#FF6B5B',
        contents: [
          { kind: 'block', type: 'Glib' },
          { kind: 'block', type: 'lib' },
          { kind: 'block', type: 'Gnames' },
          { kind: 'block', type: 'names' },
          { kind: 'block', type: 'Gglimpse' },
          { kind: 'block', type: 'glimpse' },
          { kind: 'block', type: 'Ghead' },
          { kind: 'block', type: 'head' },
          { kind: 'block', type: 'Gtail' },
          { kind: 'block', type: 'tail' },
          { kind: 'block', type: 'Ghelp' },
          { kind: 'block', type: 'help' },
        ],
      },
      {
        kind: 'category',
        name: 'mosaic',
        colour: '#4A90E2',
        contents: [
          {
            kind: 'category',
            name: 'Numerical Summaries',
            colour: '#81B1F3',
            contents: [
              { kind: 'block', type: 'tallydata' },
              { kind: 'block', type: 'favstatsdata' },
              { kind: 'block', type: 'cor' },
            ],
          },
          {
            kind: 'category',
            name: 'Statistical Functions',
            colour: '#2171D6',
            contents: [
              { kind: 'block', type: 'Gproptest' },
              { kind: 'block', type: 'proptest' },
              { kind: 'block', type: 'Gproptest2' },
              { kind: 'block', type: 'proptest2' },
              { kind: 'block', type: 'Gttest' },
              { kind: 'block', type: 'ttest' },
              { kind: 'block', type: 'Ganova' },
              { kind: 'block', type: 'anova' },
              { kind: 'block', type: 'Gslrsummary' },
              { kind: 'block', type: 'xchisqtest' },
            ],
          },
          {
            kind: 'category',
            name: 'Visualizations',
            colour: '#5C6BC0',
            contents: [
              { kind: 'block', type: 'Gmosaicplot' },
              { kind: 'block', type: 'mosaicplot' },
            ],
          },
        ],
      },
      {
        kind: 'category',
        name: 'ggplot2',
        colour: '#2E7D32',
        contents: [
          {
            kind: 'category',
            name: 'Numerical Summaries',
            colour: '#66BB6A',
            contents: [
              { kind: 'block', type: 'Gtallydata' },
              { kind: 'block', type: 'tallydata' },
            ],
          },
          {
            kind: 'category',
            name: 'Visualizations',
            colour: '#43A047',
            contents: [
              { kind: 'block', type: 'Ggf_bar' },
              { kind: 'block', type: 'gf_bar' },
              { kind: 'block', type: 'Ggf_counts' },
              { kind: 'block', type: 'gf_counts' },
              { kind: 'block', type: 'Ggf_boxplot' },
              { kind: 'block', type: 'gf_boxplot' },
              { kind: 'block', type: 'Ggf_histogram' },
              { kind: 'block', type: 'gf_histogram' },
              { kind: 'block', type: 'Ggf_dens' },
              { kind: 'block', type: 'gf_dens' },
              { kind: 'block', type: 'Ggf_point' },
              { kind: 'block', type: 'gf_point' },
              { kind: 'block', type: 'Gtheme_minimal' },
              { kind: 'block', type: 'theme_minimal' },
              { kind: 'block', type: 'Glabs' },
              { kind: 'block', type: 'labs' },
              { kind: 'block', type: 'Gpie' },
              { kind: 'block', type: 'pie' },
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
      initialXml={workspaceXml}
      workspaceConfiguration={{
        grid: {
          spacing: 20,
          length: 3,
          colour: '#ccc',
          snap: true,
        },
      }}
      onWorkspaceChange={workspaceDidChange}
      onXmlChange={handleXmlChange}
    />
  );
}
