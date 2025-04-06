import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import CustomerForm from './components/CustomerForm';
import CustomerList from './components/CustomerList';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [showCustomerForm, setShowCustomerForm] = useState(false);
  const [customers, setCustomers] = useState([]);

  const handleLogin = () => {
    setIsLoggedIn(true);
    setShowRegister(false);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setShowCustomerForm(false);
  };

  const handleGuestLogin = () => {
    setIsLoggedIn(true);
    setShowRegister(false);
  };

  const handleUserRegister = (user) => {
    // 本来はバックエンド登録処理などあるが、ここではログイン扱い
    console.log('ユーザー登録完了:', user);
    setIsLoggedIn(true);
    setShowRegister(false);
  };

  // const handleRegisterCustomer = (customer) => {
  //   setCustomers([...customers, customer]);
  //   setShowCustomerForm(false);
  // };

  const [editIndex, setEditIndex] = useState(null);

const handleRegisterCustomer = (customer) => {
  let updatedList = [...customers];
  if (editIndex !== null) {
    updatedList[editIndex] = customer;
  } else {
    updatedList.push(customer);
  }
  setCustomers(updatedList);
  setShowCustomerForm(false);
  setEditIndex(null);
};

useEffect(() => {
  const saved = localStorage.getItem('customers');
  if (saved) {
    setCustomers(JSON.parse(saved));
  }
}, []);

// 顧客データ保存（customersが変更されるたびに）
useEffect(() => {
  localStorage.setItem('customers', JSON.stringify(customers));
}, [customers]);

const handleEdit = (index) => {
  setEditIndex(index);
  setShowCustomerForm(true);
};

const handleDelete = (index) => {
  const updated = [...customers];
  updated.splice(index, 1);
  setCustomers(updated);
};

  return (
    <div>
      <Header
        isLoggedIn={isLoggedIn}
        onLogout={handleLogout}
        onRegister={() => setShowCustomerForm(true)}
      />
      {!isLoggedIn ? (
        showRegister ? (
          <RegisterForm onRegister={handleUserRegister} />
        ) : (
          <LoginForm
            onLogin={handleLogin}
            onGuestLogin={handleGuestLogin}
            onRegisterClick={() => setShowRegister(true)}
          />
        )
      ) : showCustomerForm ? (
        <CustomerForm onAddCustomer={handleRegisterCustomer} />
      ) : (
        <CustomerList
          customers={customers}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      )}
    </div>
  );
}

export default App;
