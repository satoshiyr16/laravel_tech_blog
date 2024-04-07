import React from 'react';
import { useAuth } from '@components/admin/auth/AuthContext';
import { useNavigate } from 'react-router-dom';

const LogoutButton = ({ children }) => {
    const { logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = async (e) => {
        e.preventDefault();
        await logout();
        navigate('/admin/login');
    };

    if (typeof children === "function") {
        return children({ onLogout: handleLogout });
    }

    return <button onClick={handleLogout}>{children || 'Logout'}</button>;
};

export default LogoutButton;
