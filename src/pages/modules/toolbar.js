import React, { useState, useEffect } from 'react';
import { getAuth, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { getFirestore, doc, updateDoc, collection, addDoc, getDoc } from 'firebase/firestore';

//Style
import './styles/base.css';

export default function Toolbar({ getCurrentXml, studioId }) {
  const [studioName, setStudioName] = useState('Untitled Studio');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [saveConfirmation, setSaveConfirmation] = useState(false); // Add this line
  const navigate = useNavigate();
  const auth = getAuth();

  const handleSave = async () => {
    if (!studioName.trim() || !studioId) return;

    try {
      const db = getFirestore();
      const studioRef = doc(db, 'studios', studioId);

      await updateDoc(studioRef, {
        name: studioName,
        blocksXml: getCurrentXml(),
        lastModified: Date.now(),
      });

      // Show confirmation and auto-hide after 2 seconds
      setSaveConfirmation(true);
      setTimeout(() => setSaveConfirmation(false), 2000);

      console.log('Studio saved successfully');
    } catch (error) {
      console.error('Error saving studio:', error);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  useEffect(() => {
    const loadStudioData = async () => {
      if (studioId) {
        const db = getFirestore();
        const studioDoc = await getDoc(doc(db, 'studios', studioId));
        if (studioDoc.exists()) {
          setStudioName(studioDoc.data().name);
        }
      }
    };

    loadStudioData();
  }, [studioId]);

  const handleNameSubmit = (e) => {
    e.preventDefault();
    setIsModalOpen(false);
  };

  const buttonStyle = {
    backgroundColor: 'var(--accent-h)',
    borderTop: '2px solid var(--accent-l)',
    borderLeft: '2px solid var(--accent-l)',
    borderRight: 'none',
    borderBottom: 'none',
    margin: 'auto 0.5rem',
  };

  return (
    <nav className="toolbar">
      <ul style={{ width: '100%', flex: 1 }}>
        <h1 className="header">RBlocks</h1>
      </ul>
      <div style={{ width: '100%', flex: 6, display: 'flex', alignItems: 'center' }}>
        <span style={{ margin: 'auto 0.5rem', color: 'white' }}>{studioName}</span>
        <button className="small-button" onClick={() => setIsModalOpen(true)} style={buttonStyle}>
          Change Studio Name
        </button>
        <button
          className="small-button"
          onClick={handleSave}
          style={buttonStyle}
          disabled={!studioName.trim()}
        >
          Save
        </button>
        {saveConfirmation && (
          <span
            style={{
              color: 'white',
              marginLeft: '10px',
              fontSize: '0.9em',
            }}
          >
            Saved successfully!
          </span>
        )}

        {isModalOpen && (
          <div className="modal-overlay">
            <div className="modal-content">
              <form onSubmit={handleNameSubmit}>
                <input
                  type="text"
                  value={studioName}
                  onChange={(e) => setStudioName(e.target.value)}
                  placeholder="Enter studio name"
                  autoFocus
                />
                <div className="modal-buttons">
                  <button type="submit" className="small-button">
                    Confirm
                  </button>
                  <button
                    type="button"
                    className="small-button"
                    onClick={() => setIsModalOpen(false)}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
      <div
        style={{
          width: '100%',
          flex: 3,
          display: 'flex',
          justifyContent: 'flex-end',
          paddingRight: '1rem',
        }}
      >
        <button className="small-button" onClick={() => navigate('/dashboard')} style={buttonStyle}>
          Exit
        </button>
        <button className="small-button" onClick={handleLogout} style={buttonStyle}>
          Logout
        </button>
      </div>
    </nav>
  );
}
