// src/components/LoginForm.js
import React, { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';

const LoginForm = ({ onLogin, onGuestLogin, onRegisterRedirect }) => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const storedUserId = "user123"; // 仮のユーザーID
  const storedPassword = "password123"; // 仮のパスワード

  const handleLogin = (e) => {
    e.preventDefault();

    if (userId === storedUserId && password === storedPassword) {
      onLogin(userId);
      setError('');
    } else {
      setError('ユーザーIDまたはパスワードが間違っています。');
    }
  };

  return (
    <Box sx={{ width: 400, margin: 'auto', padding: 2 }}>
      <Typography variant="h6" gutterBottom>ログイン</Typography>
      {error && <Typography color="error">{error}</Typography>}

      <TextField
        label="ユーザーID"
        variant="outlined"
        fullWidth
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
        margin="normal"
        required
      />
      <TextField
        label="パスワード"
        type="password"
        variant="outlined"
        fullWidth
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        margin="normal"
        required
      />
      
      <Button variant="contained" fullWidth onClick={handleLogin} sx={{ marginTop: 2 }}>
        ログイン
      </Button>

      <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: 2 }}>
        <Button variant="text" onClick={onGuestLogin}>
          ゲストログイン
        </Button>
        <Button variant="text" onClick={onRegisterRedirect}>
          新規登録
        </Button>
      </Box>
    </Box>
  );
};

export default LoginForm;
