import React from 'react';
import TodoList from './components/TodoList'; // Import the TodoList component
import './App.css';

function App() {
  return (
    <div className="App">
      <TodoList /> {/* Render the TodoList component */}
    </div>
  );
}

export default App;