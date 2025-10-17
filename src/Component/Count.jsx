import React, { useState } from 'react';
import './Count.css';

function Count() {
  const [count, setCount] = useState(0);

  return (
    <div className="counter-container">
      <h1>Counter App</h1>
      <p>Count: {count}</p>
      <div className="button-group">
        <button className="counter-button" onClick={() => setCount(count + 1)}>Increase</button>
        <button className="counter-button" onClick={() => setCount(count - 1)}>Decrease</button>
        <button className="counter-button" onClick={() => setCount(0)}>Reset</button>
      </div>
    </div>
  );
}

export default Count;
