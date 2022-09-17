import React from 'react'
import { ITask } from '../interfaces';
import { Container, Card } from 'react-bootstrap';
import { AiFillDelete, AiOutlineCheckSquare } from 'react-icons/ai';

interface IProps extends ITask {
  tasks: ITask[],
  setTasks: React.Dispatch<React.SetStateAction<ITask[]>>
}

const Task:React.FC<IProps> = ({uuid, id, taskContent, isDone, creationTime, tasks, setTasks}) => {
  const completeTaskHandler:Function = (key: string):void => {
    setTasks(tasks.map(t => t.uuid === uuid ? {...t, isDone: !t.isDone} : t))
  }

  const deleteTaskHander:Function = (uuid: string):void => {
    setTasks(tasks.filter(t => t.uuid !== uuid))
  }

  const nonCompleteTask:Function = ():React.ReactElement => {
    return (
      <Card >
        <Card.Body>
          {`📝`}
          <h3>{`Task #: ${id}`}</h3>
          <h4>{`Task Date: ${creationTime.toLocaleString([],{dateStyle: 'short', timeStyle: 'short'})}`}</h4>
          <h5>{`Task Content: ${taskContent}`}</h5>
        </Card.Body>
        <Container>
          <AiOutlineCheckSquare size="2em" onClick={() => {completeTaskHandler(uuid)}} />
          <AiFillDelete size="2em" onClick={() => deleteTaskHander(uuid)}/>
        </Container>
      </Card>
    )
  }

  const completeTask:Function = ():React.ReactElement => {
    return (
      <Card >
        <Card.Body>
          {`📝`}
          <h3 style={{textDecoration: "line-through", textDecorationColor: "green"}}>{`Task #: ${id}`}</h3>
          <h4 style={{textDecoration: "line-through", textDecorationColor: "green"}}>{`Task Date: ${creationTime.toLocaleString([],{dateStyle: 'short', timeStyle: 'short'})}`}</h4>
          <h5 style={{textDecoration: "line-through", textDecorationColor: "green"}}>{`Task Content: ${taskContent}`}</h5>
        </Card.Body>
        <Container>
          <AiOutlineCheckSquare size="2em" onClick={() => {completeTaskHandler(uuid)}} />
          <AiFillDelete size="2em" onClick={() => deleteTaskHander(uuid)}/>
        </Container>
      </Card>
    )
  }

  return (
    <Container className="w-50 mt-3">
      {isDone ? completeTask() : nonCompleteTask()}
    </Container>
  )
}

export default Task;