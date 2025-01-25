import React from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { app } from '../firebase';
import './modules/styles/base.css';

export default function Auth() {
  const navigate = useNavigate();

  const signInWithGoogle = async () => {
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      navigate('/dashboard');
    } catch (error) {
      console.error('Error signing in with Google:', error);
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        background: 'var(--primary-m)',
        paddingBottom: '20vh', // Push content up
        transform: 'translateY(-10vh)', // Shift everything up
      }}
    >
      <h1 className="header">RBlocks Studio</h1>
      <button
        className="base-button"
        onClick={signInWithGoogle}
        style={{
          marginTop: '1rem', // Reduced from 2rem
          backgroundColor: 'var(--secondary-h)',
          borderTop: '2px solid var(--secondary-m)',
          borderLeft: '2px solid var(--secondary-m)',
          borderRight: 'none',
          borderBottom: 'none',
        }}
      >
        Sign in with Google
      </button>
    </div>
  );
}
