import React, { useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from '@components/front/HomePage';
import LoginForm from '@components/admin/auth/LoginForm';
import AdminHomePage from '@components/admin/HomePage';
import ProtectedRoute from '@components/admin/auth/ProtectedRoute';
import { AuthProvider } from '@components/admin/auth/AuthContext';


function App() {
  return (
  <AuthProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin/login" element={<LoginForm />} />
          <Route path="/admin/home" element={
            <ProtectedRoute>
              <AdminHomePage />
            </ProtectedRoute>
          } />
      </Routes>
    </BrowserRouter>
  </AuthProvider>
  );
}

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App />);
