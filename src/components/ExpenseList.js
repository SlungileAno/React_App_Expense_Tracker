import React from 'react';

const ExpenseList = ({ expenses }) => {
  return (
    <div className="expense-list">
      <h2>My Expenses</h2>
      <ul>
        {expenses.map((expense, index) => (
          <li key={index}>
            <strong>{expense.title}</strong> - R{expense.amount} 
            {expense.date && ` on ${new Date(expense.date).toLocaleDateString()}`}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseList;
