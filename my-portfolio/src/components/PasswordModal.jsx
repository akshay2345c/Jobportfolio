import { memo, useState } from 'react';
import '../styles/PasswordModal.css';

function PasswordModal({ isOpen, onClose, onSubmit }) {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (password === 'admin123') {
      onSubmit();
      setPassword('');
    } else {
      setError('Incorrect password. Try again.');
      setPassword('');
    }
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-backdrop" onClick={handleBackdropClick}>
      <div className="password-modal">
        <button className="modal-close" onClick={onClose}>
          ��
        </button>
        <h2 className="modal-title">Admin Access</h2>
        <p className="modal-subtitle">Enter the admin password to access the control panel.</p>

        <form onSubmit={handleSubmit} className="password-form">
          <div className="form-group">
            <label htmlFor="admin-password">Password</label>
            <input
              type="password"
              id="admin-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              autoFocus
            />
            {error && <p className="error-message">{error}</p>}
          </div>

          <div className="modal-buttons">
            <button type="button" className="btn btn-secondary" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="btn btn-primary">
              Access
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default memo(PasswordModal);
