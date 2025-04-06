// src/components/CustomerList.js
import React, { useState } from 'react';
import {
  Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow, Paper, Button, TextField, IconButton
} from '@mui/material';
import { ArrowUpward, ArrowDownward } from '@mui/icons-material';

const initialCustomers = [
  { id: 1, name: '山田 太郎', email: 'yamada@example.com', phone: '090-1234-5678', date: '2024/04/01' },
  { id: 2, name: '佐藤 花子', email: 'sato@example.com', phone: '080-2345-6789', date: '2024/03/25' },
  { id: 3, name: '高橋 次郎', email: 'takahashi@example.com', phone: '070-3456-7890', date: '2024/04/05' },
];

const CustomerList = () => {
  const [customers, setCustomers] = useState(initialCustomers);
  const [sortOrder, setSortOrder] = useState('asc'); // 'asc' or 'desc'
  const [sortField, setSortField] = useState('name'); // 'name' or 'date'
  const [searchQuery, setSearchQuery] = useState('');

  // 名前で並び替え
  const toggleSortByName = () => {
    const newOrder = sortOrder === 'asc' ? 'desc' : 'asc';
    const sorted = [...customers].sort((a, b) => {
      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();

      if (newOrder === 'asc') {
        return nameA.localeCompare(nameB, 'ja');
      } else {
        return nameB.localeCompare(nameA, 'ja');
      }
    });
    setCustomers(sorted);
    setSortOrder(newOrder);
    setSortField('name');
  };

  // 登録日で並び替え
  const toggleSortByDate = () => {
    const newOrder = sortOrder === 'asc' ? 'desc' : 'asc';
    const sorted = [...customers].sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);

      return newOrder === 'asc' ? dateA - dateB : dateB - dateA;
    });
    setCustomers(sorted);
    setSortOrder(newOrder);
    setSortField('date');
  };

  // 名前で絞り込み
  const filteredCustomers = customers.filter((customer) =>
    customer.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div style={{ padding: 20 }}>
      <TextField
        label="名前で検索"
        variant="outlined"
        fullWidth
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        margin="normal"
      />

      <Button variant="outlined" onClick={toggleSortByName} sx={{ marginTop: 2 }}>
        名前順で並び替え
        {sortField === 'name' && (sortOrder === 'asc' ? <ArrowDownward /> : <ArrowUpward />)}
      </Button>
      <Button variant="outlined" onClick={toggleSortByDate} sx={{ marginTop: 2, marginLeft: 2 }}>
        登録日順で並び替え
        {sortField === 'date' && (sortOrder === 'asc' ? <ArrowDownward /> : <ArrowUpward />)}
      </Button>

      <TableContainer component={Paper} sx={{ marginTop: 2 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>顧客名</TableCell>
              <TableCell>メールアドレス</TableCell>
              <TableCell>電話番号</TableCell>
              <TableCell>登録日</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredCustomers.map((customer) => (
              <TableRow key={customer.id}>
                <TableCell>{customer.name}</TableCell>
                <TableCell>{customer.email}</TableCell>
                <TableCell>{customer.phone}</TableCell>
                <TableCell>{customer.date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default CustomerList;
