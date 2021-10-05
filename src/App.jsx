import React, { useState, useEffect } from 'react';
import './App.css';
import AddTask from './components/AddTask';
import Tasks from './components/Tasks';
import {v4 as uuidv4} from 'uuid';
import Header from './components/Header'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import TaskDetail from './components/TaskDetail';
import axios from 'axios';

const App = () => {
  const [tasks, setTasks] = useState([]);


  useEffect(() => {
    
    const fetchTasks = async () => {
      const {data} = await axios.get("https://jsonplaceholder.cypress.io/todos?_limit=10");
      setTasks(data);
    }


    fetchTasks();
  
  }, [])


  const handleTaskDelete = (taskId) => {
    const newTask = tasks.filter((task) => task.id !== taskId)

    setTasks(newTask);
    console.log("teste")
  }



  const handleTaskClick = (taskId) => {
    const newTask = tasks.map((task) => {
      if (task.id == taskId) return { ...task, completed: !task.completed }


      return task;
    });

    setTasks(newTask)
  };



  const handleTaskAddition = (taskTitle) => {
    const newTask = [...tasks, {
      id: uuidv4(),
      title: taskTitle,
      completed: false,
      status:false,
    }];

    if(taskTitle !== '') setTasks(newTask);
  };

  return (
    <Router>
    <div className="container">
      <Header/>
      <Route path="/" exact render={() => {return (
        <>
        <AddTask handleTaskAddition={handleTaskAddition}/>
        <Tasks tarefas={tasks} handleTaskClick={handleTaskClick} handleTaskDelete={handleTaskDelete}/>
        </>
      )}}/>

        <Route path="/:caminho" exact component={TaskDetail}/>

    </div>
    </Router>

   );

};
 
export default App;