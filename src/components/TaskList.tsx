import React from 'react'
import { ITask } from '../interfaces'
import Task from './Task'
import { v4 as uuidv4 } from 'uuid'

interface IProps {
  tasks: ITask[],
  setTasks: React.Dispatch<React.SetStateAction<ITask[]>>
}

const TaskList:React.FC<IProps> = ({tasks, setTasks}):React.ReactElement => {

  return (
    <>
      {tasks.map(t => <Task key={uuidv4()} uuid={t.uuid} id={t.id} taskContent={t.taskContent} isDone={t.isDone} creationTime={t.creationTime} tasks={tasks} setTasks={setTasks}></Task>)}
    </>
  )
}

export default TaskList;