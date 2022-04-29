import React, { useState } from 'react';
import './Expenses.css'
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter';


function Expenses(props){

    const [filteredYear, setFilteredYear] = useState('2020')

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear) //Stores the selected value from ExpensesFilter in a STATE variable 
    } 

    return (
        <div>
            <Card className='expenses'>
            <ExpensesFilter selected={filteredYear} onFilterChange={filterChangeHandler} />
                {props.item.map((expense) => 
                <ExpenseItem 
                    title={expense.title} 
                    amount={expense.amount} 
                    date={expense.date} />
                    )
                }
            </Card>
        </div>
    )
};

export default Expenses;