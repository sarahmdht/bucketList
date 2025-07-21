import React from 'react';
import TodoList from '../components/todo'; // adjust path as needed

const Samples = () => {
  return (
    <div style={{ paddingTop: '100px' }}>
      <h2>Samples</h2>
      <div className='d-flex'>

        <TodoList
          title="Daily Routine"
          initialItems={['Breakfast', '30 Minute Exercise', 'Call a Friend', '1 Page read']}
        />

        <TodoList
          title="Work Tasks"
          initialItems={['Reply to emails', 'Team meeting at 2 PM']}
        />

        <TodoList
          title="Weekend Goals"
          initialItems={['Buy groceries', 'Visit parents', 'Clean balcony']}
        />
      </div>
    </div>
  );
};

export default Samples;
