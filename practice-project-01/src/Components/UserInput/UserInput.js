import React, { useState } from 'react';
import './UserInput.css'
import ErrorModal from '../Modal';

const UserInput = (props) => {

const [usernameValue, setUsernameValue] = useState('');
const [ageValue, setAgeValue] = useState('');
const [textAreaValue, setTextAreaValue] = useState('');
const [error, setError] = useState();

const usernameChangeHandler = (event) => {
    setUsernameValue(event.target.value)
}

const ageChangeHandler = (event) => {
    setAgeValue(event.target.value)
}

const textareaHandler = (event) => {
    setTextAreaValue(event.target.value)
}

const submitFormHandler = (event) => {
    event.preventDefault();
    const userInputs = {
        username: usernameValue,
        age: ageValue,
        message: textAreaValue,
        blockId: Math.floor(Math.random()*1000)
    }
    if(usernameValue.trim().length === 0 || ageValue.trim().length === 0) {
        setError({
            title: 'Invalid Input',
            message: 'Please enter a valid name and age.'
        })
        return;
    }
    if(+ageValue < 1) {
        setError({
            title: 'Invalid Age',
            message: 'Please enter a valid age (> 0)'
        })
    }
    props.onAddUserInput(userInputs)
    setUsernameValue('');
    setAgeValue('');
    setTextAreaValue('');
};

const resetErrorModal = () => {
    setError(null)
}


    return (
        <div>
        { error && <ErrorModal title={error.title} message={error.message} removeError={resetErrorModal}/>}
        <form onSubmit={submitFormHandler}>
            <div className='user-input_controls'>
                <div className='user-input_control'>
                    <label>Username</label>
                    <input type='text' value={usernameValue} onChange={usernameChangeHandler} />
                </div>
                <div className='user-input_control'>
                    <label>Age</label>
                    <input type='number' value={ageValue} min='0.0' onChange={ageChangeHandler}/>
                </div>
                <div className='user-input_control'>
                    <label>Post</label>
                    <textarea type='text' value={textAreaValue} onChange={textareaHandler}/>
                </div>
                <div className='user-input_actions'>
                    <button type='submit'>Add User</button>
                </div>
            </div>
        </form>
        </div>
    )
}


export default UserInput;