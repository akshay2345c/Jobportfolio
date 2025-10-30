import React, { useState, useEffect } from 'react';
import { useRoute } from '../context/DataContext';
import PasswordModal from '../components/PasswordModal';
import '../styles/AdminLogin.css';

function AdminLogin() {
  const { navigate } = useRoute();
  const [showModal, setShowModal] = useState(true);

  useEffect(() => {
    setShowModal(true);
  }, []);

  const handlePasswordSuccess = () => {
    setShowModal(false);
    navigate('/admin-panel');
  };

  const handleModalClose = () => {
    navigate('/');
  };

  return (
    <div className="admin-login-page">
      <PasswordModal
        isOpen={showModal}
        onClose={handleModalClose}
        onSubmit={handlePasswordSuccess}
      />
    </div>
  );
}

export default AdminLogin;
