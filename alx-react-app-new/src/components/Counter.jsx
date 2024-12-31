import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <p style={{ fontSize: '20px', marginBottom: '10px' }}>Current Count: {count}</p>
      <button
        style={{ marginRight: '10px', padding: '10px', backgroundColor: 'green', color: 'white', border: 'none', cursor: 'pointer' }}
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
      <button
        style={{ marginRight: '10px', padding: '10px', backgroundColor: 'red', color: 'white', border: 'none', cursor: 'pointer' }}
        onClick={() => setCount(count - 1)}
      >
        Decrement
      </button>
      <button
        style={{ padding: '10px', backgroundColor: 'gray', color: 'white', border: 'none', cursor: 'pointer' }}
        onClick={() => setCount(0)}
      >
        Reset
      </button>
    </div>
  );
}

export default Counter;
