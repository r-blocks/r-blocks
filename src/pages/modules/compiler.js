import React from 'react';
import Blockly from 'blockly';
import './styles/base.css';

export default function Compiler({ workspace }) {
  const handleConvert = () => {
    if (workspace) {
      const code = Blockly.JavaScript.workspaceToCode(workspace);
      const linked = 'https://rdrr.io/snippets/embed/?code=' + encodeURI(code);
      const snippetElement = document.getElementById('snippet');
      if (snippetElement) {
        snippetElement.src = linked;
      }
    }
  };

  return (
    <div className="compiler">
      <div style={{ flex: 2 }}></div>
      <div className="compiler-container" style={{ flex: 100 }}>
        <div style={{ flex: 1 }}></div>

        <button 
          onClick={handleConvert}
          className="convert-button"
          style={{
            padding: '10px 20px',
            margin: '10px 0',
            backgroundColor: '#4A90E2',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Convert to R Code
        </button>

        <div>
          <iframe
            id="snippet"
            width="100%"
            height="800"
            src="https://rdrr.io/snippets/embed/?code=library(mosaic)"
            frameBorder="0"
          >
            Documentation Support: https://rdrr.io/snippets/embedding/
          </iframe>
        </div>
      </div>
      <div style={{ flex: 1 }}></div>
    </div>
  );
}