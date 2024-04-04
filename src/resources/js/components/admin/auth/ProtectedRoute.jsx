import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '@components/admin/auth/AuthContext';

export default function ProtectedRoute({ children }) {
  const { currentUser } = useAuth();

  return currentUser ? children : <Navigate to="/admin/login" />;
}
