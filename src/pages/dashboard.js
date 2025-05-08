import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';
import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
  deleteDoc,
  doc,
} from 'firebase/firestore';
import Toolbar from './modules/toolbar';
import './modules/styles/base.css';

export default function Dashboard() {
  const [studios, setStudios] = useState([]);
  const [isHelpModalOpen, setIsHelpModalOpen] = useState(false); 
  const navigate = useNavigate();
  const auth = getAuth();

  useEffect(() => {
    const loadStudios = async () => {
      const db = getFirestore();
      const studiosRef = collection(db, 'studios');
      const q = query(studiosRef, where('userId', '==', auth.currentUser.uid));
      const querySnapshot = await getDocs(q);
      const studiosData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setStudios(studiosData);
    };

    loadStudios();
  }, []);

  const createNewStudio = () => {
    navigate('/studio');
  };

  const handleDeleteStudio = async (e, studioId) => {
    e.stopPropagation(); // Prevent navigation when clicking delete
    if (window.confirm('Are you sure you want to delete this studio?')) {
      try {
        const db = getFirestore();
        await deleteDoc(doc(db, 'studios', studioId));
        setStudios(studios.filter((studio) => studio.id !== studioId));
      } catch (error) {
        console.error('Error deleting studio:', error);
      }
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/');
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <div style={{ 
      width: '100%', 
      height: '100%', 
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      display: 'flex',
      flexDirection: 'column'
    }}>
      <div className="toolbar">
        <h1 className="header">RBlocks</h1>
        <div style={{ flex: 1 }}></div>
        <button className="base-button" onClick={handleLogout}>
          Logout
        </button>
      </div>
      <div style={{ 
        flex: 1, 
        overflowY: 'auto',
        height: 'calc(100% - 4.5rem)', /* Subtract toolbar height */
        background: 'var(--text-extra)',
        paddingTop: 0
      }}>
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          position: 'sticky',
          top: 0,
          backgroundColor: 'var(--text-extra)',
          padding: '1rem 2rem',
          borderBottom: '1px solid var(--primary-p)',
          zIndex: 10
        }}>
          <h2 style={{ margin: 0 }}>My Studios</h2>
          <div>
            <button className="base-button" onClick={() => setIsHelpModalOpen(true)}>
                Getting Started
            </button>
            <button className="base-button" onClick={createNewStudio}>
              Create New Studio
            </button>
          </div>
        </div>

        <div className="studios-grid" style={{ padding: '1.5rem 2rem' }}>
          {studios.map((studio) => (
            <div
              key={studio.id}
              className="studio-card"
              onClick={() => navigate(`/studio/${studio.id}`)}
            >
              <button
                className="delete-studio-button"
                onClick={(e) => handleDeleteStudio(e, studio.id)}
              >
                ×
              </button>
              <h3 style={{ marginTop: '1rem' }}>{studio.name || 'Untitled Studio'}</h3>
              <p>Created: {new Date(studio.createdAt).toLocaleDateString()}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Getting Started Modal */}
      {isHelpModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content" style={{ maxWidth: '600px', maxHeight: '80vh', overflow: 'auto' }}>
            <h2>Getting Started with RBlocks</h2>
            <div style={{ textAlign: 'left', marginBottom: '20px' }}>
              <h3>Basic Instructions:</h3>
              <ol>
                <li>Click "Create New Studio" to start a new project.</li>
                <li>Drag blocks from the toolbox on the left into your workspace.</li>
                <li>Connect blocks together to create R code sequences.</li>
                <li>Use the output panel to see the results of your code.</li>
                <li>Save your work regularly using the Save button.</li>
              </ol>
              
              <h3>Working with Data:</h3>
              <p>The HELPrct dataset is available by default. You can visualize it using plot blocks or analyze it with statistical functions.</p>
              
              <h3>Creating Statistical Analyses:</h3>
              <p>Use the inference blocks to perform bootstrap confidence intervals and hypothesis tests.</p>
              
              <h3>Tips:</h3>
              <ul>
                <li>Hover over blocks to see tooltips with more information.</li>
                <li>Right-click on blocks for additional options.</li>
                <li>Use the zoom controls to adjust your view.</li>
              </ul>
            </div>
            <div className="modal-buttons">
              <button 
                type="button" 
                className="base-button" 
                onClick={() => setIsHelpModalOpen(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
