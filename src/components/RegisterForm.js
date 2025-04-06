// src/components/RegisterForm.js
import React, { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';

const RegisterForm = ({ onRegister }) => {
  const [companyName, setCompanyName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [position, setPosition] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [note, setNote] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // 必須項目のチェック
    if (!companyName || !firstName || !lastName || !password) {
      setError('すべての必須項目を入力してください');
      return;
    }

    const registrationDate = new Date().toLocaleDateString(); // 登録日を現在の日付で設定
    const newUser = {
      companyName,
      customerName: `${firstName} ${lastName}`,
      position,
      email,
      phone,
      password,
      note,
      registrationDate,
    };

    onRegister(newUser);

    // 入力フィールドのリセット
    setCompanyName('');
    setFirstName('');
    setLastName('');
    setPosition('');
    setEmail('');
    setPhone('');
    setPassword('');
    setNote('');
    setError('');
  };

  return (
    <Box sx={{ width: 400, margin: 'auto', padding: 2 }}>
      <Typography variant="h6" gutterBottom>新規登録</Typography>
      {error && <Typography color="error">{error}</Typography>}

      {/* 会社名 */}
      <TextField
        label="会社名"
        variant="outlined"
        fullWidth
        value={companyName}
        onChange={(e) => setCompanyName(e.target.value)}
        margin="normal"
        required
      />

      {/* 顧客名（名字） */}
      <TextField
        label="名字（姓）"
        variant="outlined"
        fullWidth
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        margin="normal"
        required
      />

      {/* 顧客名（名前） */}
      <TextField
        label="名前（名）"
        variant="outlined"
        fullWidth
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        margin="normal"
        required
      />

      {/* 役職 */}
      <TextField
        label="役職"
        variant="outlined"
        fullWidth
        value={position}
        onChange={(e) => setPosition(e.target.value)}
        margin="normal"
      />

      {/* メールアドレス */}
      <TextField
        label="メールアドレス"
        variant="outlined"
        fullWidth
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        margin="normal"
      />

      {/* 電話番号 */}
      <TextField
        label="電話番号"
        variant="outlined"
        fullWidth
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        margin="normal"
      />

      {/* パスワード */}
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

      {/* 備考欄 */}
      <TextField
        label="備考"
        variant="outlined"
        fullWidth
        value={note}
        onChange={(e) => setNote(e.target.value)}
        margin="normal"
      />

      {/* 新規登録ボタン */}
      <Button variant="contained" fullWidth onClick={handleSubmit} sx={{ marginTop: 2 }}>
        新規登録
      </Button>
    </Box>
  );
};

export default RegisterForm;
