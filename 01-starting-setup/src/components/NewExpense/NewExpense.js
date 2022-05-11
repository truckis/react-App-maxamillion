import React, { useState } from 'react';
import './NewExpense.css'
import ExpenseForm from './ExpenseForm';


const NewExpense = (props) => {
    const [isEditig, setIsEditig] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: (Math.random()*10).toString(),
        }
        props.onAddExpense(expenseData) //This line passes the expenseData (created in newExpense but entered by user in ExpenseForm) to App.js
    }

    const startEditigHandler = () => {
        setIsEditig(true);
    }

    const stopEditingHandler = () => {
        setIsEditig(false);
    }

    return (
        <div className='new-expense'>

            {/* This check to see the state of isEditing then renders the button */}
            {!isEditig && <button onClick={startEditigHandler}>Add New Expense</button> }
            
            {isEditig &&
             <ExpenseForm 
                onSaveExpenseData={saveExpenseDataHandler} 
                onCancel={stopEditingHandler}
            />  }
             {/* onSaveExpenseData is a custom prop that takes data from its child component ExpenseForm and 
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


