//General
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getFirestore, doc, getDoc, addDoc, collection } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

//Modules (No Minor Modules please)
import Toolbar from './modules/toolbar';
import Workspace from './modules/workspace';
import Compiler from './modules/compiler';

export default function Studio() {
  const [currentBlocks, setCurrentBlocks] = useState('');
  const [studioId, setStudioId] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();
  const auth = getAuth();
  
  useEffect(() => {
    const initializeStudio = async () => {
      const db = getFirestore();
      
      if (!id) {
        // Create new studio
        const docRef = await addDoc(collection(db, 'studios'), {
          name: 'Untitled Studio',
          userId: auth.currentUser.uid,
          createdAt: Date.now(),
          blocksXml: '',
        });
        setStudioId(docRef.id);
        navigate(`/studio/${docRef.id}`, { replace: true });
      } else {
        // Load existing studio
        const studioDoc = await getDoc(doc(db, 'studios', id));
        if (studioDoc.exists()) {
          setStudioId(id);
          setCurrentBlocks(studioDoc.data().blocksXml || '');
        }
      }
    };

    initializeStudio();
  }, [id]);

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Toolbar blocksData={currentBlocks} studioId={studioId} />
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
