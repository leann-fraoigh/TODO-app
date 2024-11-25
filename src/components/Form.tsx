import { useState, SetStateAction } from 'react';
import type { Task } from '../interfaces';

interface Props {
  setTasks: React.Dispatch<SetStateAction<Task[]>>
  tasks: Task[]
}

export function Form({ setTasks, tasks }: Props) {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newTask = {
      text: inputValue,
      id: Date.now().toString(),
      isComplete: false
    };
    const updatedTasks = [
      ...tasks,
      newTask,
    ]
    setTasks(updatedTasks);
    localStorage.setItem("todolist", JSON.stringify(updatedTasks));
    setInputValue('');
  };

  const handleChange = (event: React.ChangeEvent) => {
    const { value } = event.target as HTMLInputElement;
    setInputValue(value);
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <label>
        <input
          type="text"
          name="todo"
          id="todo"
          placeholder="Task description"
          required
          onChange={handleChange}
          value={inputValue}
        />
      </label>
      <button type="submit">
        <span>Add task</span>
      </button>
    </form>
  );
}