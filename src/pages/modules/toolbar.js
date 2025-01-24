import React, { useState } from 'react';
import { getAuth, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

//Style
import './styles/base.css';

export default function Toolbar({ blocksData }) {
  const [studioName, setStudioName] = useState('Untitled Studio');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const auth = getAuth();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  const handleSave = async () => {
    if (!studioName.trim()) return;

    try {
      const db = getFirestore();
      await addDoc(collection(db, 'studios'), {
        name: studioName,
        userId: auth.currentUser.uid,
        createdAt: Date.now(),
        blocksXml: blocksData,
      });
    } catch (error) {
      console.error('Error saving studio:', error);
    }
  };

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
        <span style={{ margin: 'auto 0.5rem' }}>{studioName}</span>
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
