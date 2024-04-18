
import{ useState } from 'react';

const TodoForm = ({ addTodo,todos }) => {
    const [text, setText] = useState('');
  
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!text.trim()) return;
        addTodo({
            id: todos.length,
            text,
            completed: false
        });
       
        setText('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <h3>Todo Form</h3>
            <input 
                style={{margin: '20px'}}
                type="text"
                placeholder="Add new todo"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button type="submit">Add Todo</button>
        </form>
    );
};

export default TodoForm;
