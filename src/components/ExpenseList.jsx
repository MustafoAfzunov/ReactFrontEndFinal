// src/components/ExpenseList.jsx
import React from 'react';
import { List, ListItem, ListItemText, Typography, CircularProgress } from '@mui/material';

function ExpenseList({ expenses }) {
  if (!expenses) return <CircularProgress />;
  if (expenses.length === 0) return <Typography>No expenses found.</Typography>;

  return (
    <div>
      <Typography variant="h6">Expenses</Typography>
      <List>
        {expenses.map((expense) => (
          <ListItem key={expense.id}>
            <ListItemText primary={expense.description} secondary={`Amount: $${expense.amount}`} />
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default ExpenseList;
