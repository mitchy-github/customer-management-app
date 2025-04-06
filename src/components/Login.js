import React, { useState } from 'react';
import { TextField, Button, Typography, Box } from '@mui/material';

function Login({ onLogin }) {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (!userId || !password) {
      setError('ユーザーIDとパスワードを入力してください');
    } else {
      setError('');
      onLogin(userId); // 通常ログイン
    }
  };

  const handleGuestLogin = () => {
    onLogin('ゲストユーザー'); // ゲストログイン時のユーザーIDを設定
  };

  return (
    <Box sx={{ maxWidth: 400, margin: 'auto', padding: 2 }}>
      <Typography variant="h5" gutterBottom>
        ログイン
      </Typography>
      <TextField
        label="ユーザーID"
        fullWidth
        margin="normal"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
      />
      <TextField
        label="パスワード"
        type="password"
        fullWidth
        margin="normal"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {error && <Typography color="error">{error}</Typography>}
      <Button variant="contained" fullWidth onClick={handleLogin}>
        ログイン
      </Button>
      <Button variant="outlined" fullWidth sx={{ mt: 2 }} onClick={handleGuestLogin}>
        ゲストとしてログイン
      </Button>
    </Box>
  );
}

export default Login;

// import React, { useState } from 'react';
// import { TextField, Button, Typography, Box } from '@mui/material';

// function Login() {
//   const [userId, setUserId] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

//   const handleLogin = () => {
//     if (!userId || !password) {
//       setError('ユーザーIDとパスワードを入力してください');
//     } else {
//       setError('');
//       // ログイン処理のロジックをここに実装（バックエンド連携なし）
//       alert('ログイン成功');
//     }
//   };

//   return (
//     <Box sx={{ maxWidth: 400, margin: 'auto', padding: 2 }}>
//       <Typography variant="h5" gutterBottom>
//         ログイン
//       </Typography>
//       <TextField
//         label="ユーザーID"
//         fullWidth
//         margin="normal"
//         value={userId}
//         onChange={(e) => setUserId(e.target.value)}
//       />
//       <TextField
//         label="パスワード"
//         type="password"
//         fullWidth
//         margin="normal"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       {error && <Typography color="error">{error}</Typography>}
//       <Button variant="contained" fullWidth onClick={handleLogin}>
//         ログイン
//       </Button>
//     </Box>
//   );
// }

// export default Login;
