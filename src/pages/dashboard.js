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
    <div style={{ width: '100vw', height: '100vh' }}>
      <div className="toolbar">
        <h1 className="header">RBlocks</h1>
        <div style={{ flex: 1 }}></div>
        <button className="base-button" onClick={handleLogout}>
          Logout
        </button>
      </div>
      <div className="dashboard-content">
        <div className="dashboard-header">
          <h2>My Studios</h2>
          <button className="base-button" onClick={createNewStudio}>
            Create New Studio
          </button>
        </div>

        <div className="studios-grid">
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
    </div>
  );
}
