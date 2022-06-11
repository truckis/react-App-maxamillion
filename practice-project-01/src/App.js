import React, { useState } from 'react';
import './App.css';
import './index.css'
import UserInput from './Components/UserInput/UserInput';
import UserList from './Components/UserList/UserList';


function App() {
  
  const [userData, setUserData] = useState([]);

  const addUserDataHandler = (inputData) => {
    console.log('In App.js')
   setUserData((prevUserData) => {
     return [inputData, ...prevUserData]
   })
   console.log(userData)
  }

  return (
    <div>
     <UserInput onAddUserInput={addUserDataHandler} />
     <UserList users={userData}/>
    </div>
  );
}

export default App;
