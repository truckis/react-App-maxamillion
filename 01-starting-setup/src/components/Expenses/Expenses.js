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
                <ExpenseItem 
                    title={props.item[0].title} 
                    amount={props.item[0].amount} 
                    date={props.item[0].date}>
                </ExpenseItem>
                <ExpenseItem 
                    title={props.item[1].title} 
                    amount={props.item[1].amount} 
                    date={props.item[1].date}>
                </ExpenseItem>
            </Card>
        </div>
    )
};

export default Expenses;