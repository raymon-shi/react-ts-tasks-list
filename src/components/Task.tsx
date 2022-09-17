import React, {useState, useEffect} from 'react'
import { ITask } from '../interfaces';
import { Container, Card, Button } from 'react-bootstrap';

const Task:React.FC<ITask> = ({uid, id, taskContent, isDone, creationTime}) => {  
  return (
    <Container className="w-50 mt-3">
      <Card >
        <Card.Body>
          <h1>{`Task #: ${id}`}</h1>
          <h2>{`Task Date: ${creationTime}`}</h2>
          <h3>{`Task Content: ${taskContent}`}</h3>
        </Card.Body>
        {/* FIX THIS!! */}
        <Button variant="success" onClick={() => !isDone}>Complete</Button>
        <Button variant="danger">Delete</Button>
      </Card>
    </Container>
  )
}

export default Task;