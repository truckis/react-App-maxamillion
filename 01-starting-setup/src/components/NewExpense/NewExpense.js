
import './NewExpense.css'
import ExpenseForm from './ExpenseForm';


const NewExpense = (props) => {
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: (Math.random()*10).toString(),
        }
        props.onAddExpense(expenseData) //This line passes the expenseData (entered by user in ExpenseForm) to App.js
    }

    return (
        <div className='new-expense'>
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>  {/* onSaveExpenseData is a custom prop that takes data from its child component ExpenseForm and 
            passes that data to saveExpenseDataHandler to create an object (expenseData) which is then passed to
            App.js through the prop "onAddExpense"  */}
        </div>
    )
};

export default NewExpense;

/* onSaveExpenseData is a Prop which is used in ExpenseForm.js in the
submitHandler function. expenseData from ExpenseForm is then passed into 
saveExpenseDataHandler which pretty much takes the existing expenseData object
and adds an id to it. 

Then onAddExpense is a Prop from App.js which takes the new expenseData
and passes it to the addExpenseHandler function in App.js. */
