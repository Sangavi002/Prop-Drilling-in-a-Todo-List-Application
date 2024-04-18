
import { useState } from 'react';
import TodoList from './component/TodoList';
import TodoForm from './component/TodoForm';

function App() {
  const [todos, setTodos] = useState([]);
 
    const addTodo = (todo) => {
        setTodos([...todos, todo]);
    };

    return (
        <>
          <div>
            <h1>Todo App</h1>
            <TodoList todos={todos} />
            <TodoForm addTodo={addTodo} todos={todos} />
        </div>
        </>
    );
}

export {App}
