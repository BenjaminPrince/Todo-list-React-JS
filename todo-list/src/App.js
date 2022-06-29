import React from 'react';
import './App.css';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      <span className="todoTitle"></span>
      <TodoList/>     
    </div>
  );
}

export default App;
