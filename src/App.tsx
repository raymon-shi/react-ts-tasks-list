import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import TaskInputForm from './components/TaskInputForm';
import { ITask } from './interfaces';
import TaskList from './components/TaskList';

const App:React.FC = () => {
  const [tasks, setTasks] = useState<ITask[]>([]);

  return (
    <>
      <div className="App">
        <h1>To Do List</h1>
      </div>
      <TaskInputForm tasks={tasks} setTasks={setTasks}/>
      <TaskList tasks={tasks} />
    </>

  );
}

export default App;
