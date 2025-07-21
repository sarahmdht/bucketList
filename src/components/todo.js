import React, { useState, useRef } from 'react';
import './todo.css';

const TodoList = ({ title, initialItems }) => {
  const [todos, setTodos] = useState(
    (initialItems || []).map(item =>
      typeof item === 'string' ? { text: item, completed: false } : item
    )
  );
  const inputRef = useRef();

  const handleAddTodo = () => {
    const text = inputRef.current.value.trim();
    if (text !== '') {
      setTodos([...todos, { text, completed: false }]);
      inputRef.current.value = '';
    }
  };

  const done = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  return (
    <div className='border border-2 border-primary p-4 m-2 w-50'>
      <h3>{title}</h3>
      <div className='d-flex flex-column justify-content-between' style={{ minHeight: '300px' }}>
        <ul className='flex-grow-1'>
          {todos.map(({ text, completed }, index) => (
            <li
              key={index}
              className={`text-wrap d-flex align-content-center ${completed ? 'text-decoration-line-through text-muted' : ''}`}
              style={{ cursor: 'pointer' }}
              onClick={() => done(index)}
            >
              💡 {text}
            </li>
          ))}
        </ul>
        <div className='d-flex gap-3 align-content-center mt-3'>
          <input ref={inputRef} placeholder='Enter new tasks...' type="text" className="form-control w-75" />
          <button className="btn btn-success py-2 rounded-pill" onClick={handleAddTodo}>
            ➕ Add
          </button>
        </div>
      </div>
    </div>
  );
};


export default TodoList;
