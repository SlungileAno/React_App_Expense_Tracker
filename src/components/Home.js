import React, { useState } from 'react';

const Home= () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  
   if(email && password){
    alert(`Signed in as: ${email}`);
   

   }else{
    alert('Please enter both email and password');
   }
  };

  return (
    <div>
      <h1>Expense Tracker</h1>
      <img src="expense.jpeg" alt="Expense" height="300" weight="400" />
      <form onSubmit={handleSubmit} >
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default Home;
