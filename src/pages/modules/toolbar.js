import React from 'react';
import { getAuth, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

//Style
import './styles/base.css';

export default function Toolbar() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    const auth = getAuth();
    try {
      await signOut(auth);
      navigate('/');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <nav className="toolbar">
      <ul style={{ width: '100%', flex: 1 }}>
        <h1 className="header">RBlocks</h1>
      </ul>
      <div style={{ width: '100%', flex: 6 }}>
        {/* ...existing code... */}
      </div>
      <div style={{ width: '100%', flex: 1, display: 'flex', justifyContent: 'flex-end', paddingRight: '1rem' }}>
        <button 
          className="small-button"
          onClick={handleLogout}
          style={{
            backgroundColor: 'var(--accent-h)',
            borderTop: '2px solid var(--accent-l)',
            borderLeft: '2px solid var(--accent-l)',
            borderRight: 'none',
            borderBottom: 'none',
            margin: 'auto 0'
          }}
        >
          Logout
        </button>
      </div>
    </nav>
  );
}