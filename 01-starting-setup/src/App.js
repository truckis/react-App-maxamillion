import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2',
   title: 'New TV', 
   amount: 799.49, 
   date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  }
];

const App = () => {

 const [expenses, setExpenses] = useState(DUMMY_EXPENSES)  

  /* This function is invoked when a user submits the NewExpense Form */
  const addExpenseHandler = (expense) => {
    console.log("IN APP.js")
    console.log(expense)
    /* This function creates a new array of expenses with the newly
    added expense, the setExpenses pretty much is a function to update the state*/
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses]
    });
   };

   const filterYearHandler = (year) => {
     let results = expenses.filter(date => date.date.getFullYear() == year)
     console.log("IN filterYearHandler", results)
   }

  return (
    <div>
      
      <NewExpense onAddExpense={addExpenseHandler}/> {/* onAddExpense is a prop that will be used in the NewExpense component
      which points to the addExpenseHandler function. It essentially takes data from NewExpense.js
      and passes it to App.js */}
      <Expenses items={expenses} filterYear={filterYearHandler}/>
    </div>
  );
}

export default App;
