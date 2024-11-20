import './assets/css/index.css';
import { useState, useEffect } from 'react';
import type { Task } from './interfaces';
import { List } from './components/List';
import { Form } from './components/Form';

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const storedTasks = localStorage.getItem("todolist");
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  return (
    <>
      <h1>TODO list</h1>
      <Form setTasks={setTasks} tasks={tasks} />
      <List tasks={tasks} setTasks={setTasks}/>
    </>
  )
}

export default App
