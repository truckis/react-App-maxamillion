import React, { useState } from 'react';
import './ExpenseForm.css'

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '', 
    //     enteredSate: '',
    // })

/* These Handler functions are pointed to from the JSX elements. 
These function use the "useState" functionality to store user input data
to a specific STATE by passing the event data to a setFunction tied to a variable name, like enteredTitle.
The STATE data can then be used (as in submitHandler() like global state variables */
    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value)
        // setUserInput( (prevState) => {
        //    return { 
        //     ...prevState,
        //     enteredTitle: event.target.value,
        //    }
        // })
        console.log(event.target.value)
    };

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value)
        // setUserInput( (prevState) => {
        //     return { 
        //      ...prevState,
        //      enteredAmount: event.target.value,
        //     }
        //  })
        console.log(event.target.value)
    }

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value)
        // setUserInput( (prevState) => {
        //     return { 
        //      ...prevState,
        //      enteredDate: event.target.value,
        //     }
        //  })
        console.log(event.target.value)
    }

    const submitHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate),
        }
        props.onSaveExpenseData(expenseData);
        // Resets the values in the inputs
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    };

    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' value={enteredTitle} onChange={titleChangeHandler}/>
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' value={enteredAmount} min='0.01' step='1.0' onChange={amountChangeHandler}/>
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' value={enteredDate} min='2019-01-01' max='2022-12-31' onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    )
};

export default ExpenseForm;


/* This document creates the structure of the form and the necisary functions
to submit the data from the usder input. Each input has its own function tied to its own
state. The submitHandler function creates an object with all the
state data then passes that to NewExpense.js via onSaveExpenseData prop.  */