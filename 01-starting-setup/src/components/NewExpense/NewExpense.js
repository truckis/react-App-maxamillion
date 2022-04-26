
import './NewExpense.css'
import ExpenseForm from './ExpenseForm';


const NewExpense = (props) => {
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: (Math.random()*10).toString(),
        }
        props.onAddExpense(expenseData)
    }

    return (
        <div className='new-expense'>
            {/* onSaveExpenseData is a custom prop that is passed to its child component ExpenseForm */}
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
        </div>
    )
};

export default NewExpense;