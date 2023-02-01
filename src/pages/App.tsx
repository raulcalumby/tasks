import React, { useState } from 'react';
import Form from '../components/Form'
import List from '../components/List';
import { Stopwatch } from '../components/Stopwatch';
import style from './App.module.scss';

function App() {
  const [tasks, setTasks] = useState([{task: 'list', time: 'teste'}]);
  return (
    <div className={style.AppStyle}>
    <Form  setTasks={setTasks}/>
    <List  tasks={tasks}/>
    <Stopwatch /> 
    </div>
  );
}

export default App;
