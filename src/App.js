import AddTask from './components/AddTask';
import TaskList from './components/TaskList'
import './App.css';
import { useState } from 'react';

function App() {
  const[userFormData,setUserFormData]=useState([])

  let getUserData=(userData)=>{
    const userFormDataCopy=[...userFormData]
    userFormDataCopy.push(userData)
    setUserFormData(userFormDataCopy)
    

  }
  return (
    <div className="App">   
     <AddTask getUserData={getUserData}/>
     <TaskList userFormData={userFormData}/>
    </div>
  );
}


export default App;
