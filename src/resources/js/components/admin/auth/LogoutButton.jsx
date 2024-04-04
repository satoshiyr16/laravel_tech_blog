import React from 'react';
import { useAuth } from '@components/admin/auth/AuthContext';
import { useNavigate } from 'react-router-dom';

const LogoutButton = () => {
    const { logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = async () => {
      await logout();
      navigate('/admin/login');
    };

    return <button onClick={handleLogout}>Logout</button>;
};

export default LogoutButton;
