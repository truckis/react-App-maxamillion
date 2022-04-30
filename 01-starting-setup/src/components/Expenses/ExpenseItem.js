// We will import this to App.js
// Need to import the coresponding css fiel

import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

const ExpenseItem = (props) => {
    return (
        <div>
        <Card className="expense-item">
           <ExpenseDate date={props.date} />
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
        </Card>
        </div>
    
    )
    
};

export default ExpenseItem;