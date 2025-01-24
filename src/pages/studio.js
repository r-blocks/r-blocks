//General
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

//Modules (No Minor Modules please)
import Toolbar from './modules/toolbar';
import Workspace from './modules/workspace';
import Compiler from './modules/compiler';

export default function Studio() {
  const [currentBlocks, setCurrentBlocks] = useState('');
  const { id } = useParams(); // Changed from studioId to id to match App.js route

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Toolbar blocksData={currentBlocks} studioId={id} />
      <div className="core">
        <div style={{ flex: 8 }}>
          <Workspace onBlocksChange={setCurrentBlocks} />
        </div>
        <div style={{ flex: 4 }}>
          <Compiler />
        </div>
      </div>
    </div>
  );
}
