import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import TaskInputForm from './components/TaskInputForm';
import { ITask } from './interfaces';
import TaskList from './components/TaskList';

const App:React.FC = ():React.ReactElement => {
  const [tasks, setTasks] = useState<ITask[]>([]);

  return (
    <>
      <div className="App">
        <h1>Tasks List 📝</h1>
        <h6>Raymon Shi 🌻</h6>
      </div>
      <TaskInputForm tasks={tasks} setTasks={setTasks}/>
      <TaskList tasks={tasks} setTasks={setTasks} />
    </>
  );
}

export default App;
