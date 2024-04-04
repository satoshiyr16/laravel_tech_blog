import React from 'react';
import { useAuth } from '@components/admin/auth/AuthContext';
import LogoutButton from '@components/admin/auth/LogoutButton';

const Navbar = () => {
  const { currentUser } = useAuth(); // 現在のユーザー情報を取得

  return (
    <nav style={{ padding: '10px', backgroundColor: 'lightgrey' }}>
        <ul style={{ listStyleType: 'none', padding: 0, display: 'flex', justifyContent: 'space-between' }}>
            <li><a href="/">Home</a></li>
            {currentUser ? (
                <>
                    <li>Welcome, {currentUser.name}!</li> {/* ユーザー名を表示 */}
                    <li><LogoutButton /></li> {/* ログアウトボタンを表示 */}
                </>
            ) : (
                <>
                    {/* ログインしていない時に表示するリンク */}
                    <li><a href="/login">Login</a></li>
                    <li><a href="/signup">Sign Up</a></li>
                </>
            )}
        </ul>
    </nav>
  );
};

export default Navbar;
