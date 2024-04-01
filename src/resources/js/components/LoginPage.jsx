import React, { useState } from 'react';
import axios from 'axios';

function LoginForm() {
    const [email, setEmail] = useState('admin@example.com'); // テスト用のユーザー情報
    const [password, setPassword] = useState('password1234'); // テスト用のパスワード
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        setErrorMessage(''); // エラーメッセージをリセット

        // CSRFトークンを取得
        await axios.get('http://localhost/sanctum/csrf-cookie', { withCredentials: true });

        // ログインリクエストを送信
        try {
            const response = await axios.post('http://localhost/api/login', {
                email,
                password
            }, {
                headers: {
                    'Content-Type': 'application/json'
                },
                withCredentials: true // CSRF保護とセッションを使用するために必要
            });

            console.log('Login success:', response.data);
            // ログイン成功後の処理をここに追加
        } catch (error) {
            if (error.response) {
                // サーバーからのレスポンスがある場合、エラーメッセージを表示
                setErrorMessage(error.response.data.message);
            } else {
                setErrorMessage('Login failed.');
            }
        }
    };

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit">Login</button>
            </form>
            {errorMessage && <p>{errorMessage}</p>}
        </div>
    );
}

export default LoginForm;
