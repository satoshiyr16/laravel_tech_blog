import React, { useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from '@components/front/templates/HomePage';
import ListPost from '@components/front/templates/ListPost';
import SearchPost from '@components/front/templates/SearchPost';
import Profile from '@components/front/templates/Profile';
import Contact from '@components/front/templates/Contact';
import LoginForm from '@components/admin/auth/LoginForm';
import AdminHome from '@components/admin/templates/AdminHome';
import AddPostForm from '@components/admin/templates/postForm/AddPostForm';
// import ProtectedRoute from '@components/admin/auth/ProtectedRoute';
import { AuthProvider } from '@components/admin/auth/AuthContext';


function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* ======フロント側====== */}
          <Route path="/" element={<HomePage />} />
          <Route path="/content" element={<ListPost />} />
          <Route path="/search" element={<SearchPost />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/contact" element={<Contact />} />
          {/* ======管理側====== */}
          <Route path="/admin/login" element={<LoginForm />} />
          <Route path="/admin" element={<AdminHome />} />
          <Route path="/admin/addPost" element={<AddPostForm />} />
          {/* <Route path="/admin" element={
            <ProtectedRoute>
              <AdminHomePage />
            </ProtectedRoute>
          } /> */}
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App />);
