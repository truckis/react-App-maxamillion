import React, { useState } from 'react';
import './Expenses.css'
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter';


function Expenses(props){

    const [filteredYear, setFilteredYear] = useState('2020')

    const filterChangeHandler = selectedYear => {
        console.log("IN Expense.js", selectedYear)
        setFilteredYear(selectedYear) //Stores the selected value from ExpensesFilter in a STATE variable 
    } 

    /* This function creates a new array with the filtered items
    We check this array in the jsx logic inside ExpenseFilter */
    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    })

    return (
        <div>
            <Card className='expenses'>
            <ExpensesFilter selected={filteredYear} onFilterChange={filterChangeHandler} />

                         {/* Creates an ExpenseItem for each object in the
                         expenses array in App.js */}
                {filteredExpenses.length === 0 && <p>No Expenses Found</p>}         
                {filteredExpenses.length > 0 && filteredExpenses.map((expense) => (
                <ExpenseItem 
                    key={expense.id} //We add a key to help react keep track of which items are associated with each object in the array. Or else it will just update the UI components without keeping track of which component is tied to each object.
                    title={expense.title} 
                    amount={expense.amount} 
                    date={expense.date} 
                    />
                    ))
                }
            </Card>
        </div>
    )
};

export default Expenses;