import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const Header = ({ isLoggedIn, onLogout, onRegister }) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          顧客管理アプリ
        </Typography>
        {isLoggedIn && (
          <>
            <Button color="inherit" onClick={onRegister}>顧客登録</Button>
            <Button color="inherit" onClick={onLogout}>ログアウト</Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
