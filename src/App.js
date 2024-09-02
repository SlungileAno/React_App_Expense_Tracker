
import './App.css';

import React, { useState } from 'react';
import './styles/ExpenseTracker.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Profile from './components/Profile';
import ExpenseList from './components/ExpenseList';
import ExpenseForm from './components/ExpenseForm';


const App =() =>{
const [currentPage, setCurrentPage] = useState( 'home');
const[expenses, setExpenses] = useState([]);

const addExpense = (expense) => {
setExpenses ([...expenses, expense]);
};
const renderPage = () =>{
switch (currentPage) {
case 'home':
return <Home />;
case 'profile':
return <Profile />;
case 'expenses':

return(
<div>

< ExpenseForm addExpense={addExpense} />
< ExpenseList expenses={expenses} />
</div>
);

default:
   return <Home />;
}
};

return(
 <div> 
  < Header setCurrentPage={setCurrentPage} />
  {renderPage()}
  <Footer/>
   </div>
 
);
};


export default App;

  

