import React from 'react';

function Teamlead() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Team Lead Dashboard</h1>

      <p>
        This is a testing component for the <strong>Team Lead</strong> page.
      </p>

      <ul>
        <li>View team members</li>
        <li>Assign tasks</li>
        <li>Track progress</li>
      </ul>

      <button onClick={() => alert('Testing button clicked')}>
        Test Action
      </button>
    </div>
  );
}

export default Teamlead;
