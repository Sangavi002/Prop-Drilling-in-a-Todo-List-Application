
import React from 'react';
import { useState } from 'react';

const TodoItem = ({ todo }) => {
    const [isChecked, setIsChecked] = useState(todo.completed);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="TodoItem">
      <span style={{marginLeft: '20px',fontSize: '18px'}}>{todo.text}</span>
      <input style={{margin: '20px'}}
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
    </div>
  );
};

export default TodoItem;
