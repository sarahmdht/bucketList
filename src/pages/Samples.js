import React from 'react'
import { useState, useRef } from 'react';

const Samples = () => {
  // To Update Todo   
  const [todos, setTodos] = useState(['Breakfast', '30 Minute Exercise', 'Call a Friend', '1 Page read' ])
  // To make input functional
  const inputRef = useRef();
  // To make button functional
  const handleTodo = () => {
    const text = inputRef.current.value;
    setTodos([...todos, text]);
    inputRef.current.value = "";
  }
  return (
    <div style={{ paddingTop: '100px' }}>
      <h2>Samples</h2>
      <div className='border border-2 border-primary p-4 m-4 w-50'>
        <h3>Daily Routine</h3>
      <ul>
        {todos.map((item) => {
          return <li className='text-wrap d-flex align-content-center'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="text-success size-2 me-3" width={24} height={24}>
          <path stroke-linecap="round" stroke-linejoin="round" d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z" />
        </svg>
          {item}</li>;
        })}
      </ul>
      <div className='d-flex gap-3 align-content-center'>
        <input ref={inputRef} placeholder='Enter new tasks...' type="text" className="form-control w-75" />
        <button className="btn btn-success py-2 rounded-pill" onClick={handleTodo}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"  className="size-2 me-2" width={24} height={24}>
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
</svg>
Add</button>
      </div>
    </div>
    </div>
  );
};

export default Samples;
