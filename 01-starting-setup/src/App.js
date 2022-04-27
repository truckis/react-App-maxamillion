import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {

  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
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
    },
  ];

  const addExpenseHandler = expense => {
    console.log("IN APP.js")
    console.log(expense)
  }

  return (
    <div>
      
      <NewExpense onAddExpense={addExpenseHandler}/> {/* onAddExpense is a prop that will be used in the NewExpense component
      which points to the addExpenseHandler function. It essentially takes data from NewExpense.js
      and passes it to App.js */}
      <Expenses item={expenses}/>
    </div>
  );
}

export default App;
