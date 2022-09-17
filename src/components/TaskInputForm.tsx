import React, {useState} from 'react'
import { Form, Button, Container } from 'react-bootstrap'
import { ITask } from '../interfaces';
import { v4 as uuidv4 } from 'uuid'

interface IProps {
  tasks: ITask[],
  setTasks: React.Dispatch<React.SetStateAction<ITask[]>>
}

const TaskInputForm:React.FC<IProps> = ({tasks, setTasks}):React.ReactElement => {
  const [inputTaskContent, setInputTaskContent] = useState<string>("");
  return (
    <Container className="mb-5 bg-warning">
      <Form onSubmit={(e:React.FormEvent) => {
        e.preventDefault()
        setTasks([...tasks, {
          uuid: uuidv4(),
          id: tasks.length + 1,
          taskContent: inputTaskContent,
          isDone: false,
          creationTime: new Date()
        }])
        setInputTaskContent("")
      }}>
        <Form.Group className="mb-3" controlId="formBasicTaskInput">
          <Form.Label>Enter your Task</Form.Label>
          <Form.Control type="text" placeholder="Enter your task" 
            value={inputTaskContent}
            onChange={(e) => setInputTaskContent(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit" disabled={inputTaskContent.length === 0}>
          Submit
        </Button>
      </Form>
    </Container>
    
  )
}

export default TaskInputForm;