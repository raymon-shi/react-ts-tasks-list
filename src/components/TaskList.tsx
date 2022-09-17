import React from 'react'
import { ITask } from '../interfaces'
import Task from './Task'

interface IProps {
  tasks: ITask[],
}

const TaskList:React.FC<IProps> = ({tasks}) => {
  return (
    <>
      {tasks.map(t => <Task uid={t.uid} id={t.id} taskContent={t.taskContent} isDone={t.isDone} creationTime={t.creationTime}></Task>)}
    </>
  )
}

export default TaskList;