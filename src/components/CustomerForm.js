// src/components/CustomerForm.js
import React, { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';

const CustomerForm = ({ onAddCustomer }) => {
  const [companyName, setCompanyName] = useState('');  // 会社名
  const [firstName, setFirstName] = useState(''); // 顧客名（名字）
  const [lastName, setLastName] = useState(''); // 顧客名（名前）
  const [position, setPosition] = useState(''); // 役職
  const [email, setEmail] = useState('');  // メールアドレス
  const [phone, setPhone] = useState('');  // 電話番号
  const [password, setPassword] = useState(''); // パスワード
  const [note, setNote] = useState('');  // 備考欄
  const [error, setError] = useState(''); // エラーメッセージ
  
  const handleSubmit = (e) => {
    e.preventDefault();

    // 必須項目のチェック
    if (!companyName || !firstName || !lastName || !password) {
      setError('すべての必須項目を入力してください');
      return;
    }

    const registrationDate = new Date().toLocaleDateString(); // 登録日を現在の日付で設定
    const newCustomer = {
      companyName,
      customerName: `${firstName} ${lastName}`,  // 顧客名は名字と名前を結合
      position,
      email,
      phone,
      password, // パスワード
      note,
      registrationDate, // 登録日
    };

    onAddCustomer(newCustomer);

    // 入力フィールドのリセット
    setCompanyName('');
    setFirstName('');
    setLastName('');
    setPosition('');
    setEmail('');
    setPhone('');
    setPassword('');
    setNote('');
    setError(''); // エラーメッセージのリセット
  };

  return (
    <Box sx={{ width: 400, margin: 'auto', padding: 2 }}>
      <Typography variant="h6" gutterBottom>顧客登録</Typography>
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
      
      {/* 顧客登録ボタン */}
      <Button variant="contained" fullWidth onClick={handleSubmit} sx={{ marginTop: 2 }}>
        顧客登録
      </Button>
    </Box>
  );
};

export default CustomerForm;
