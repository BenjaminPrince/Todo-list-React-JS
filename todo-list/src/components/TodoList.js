import React from 'react';
import './TodoList.css';

function TodoList() {
  return (
    <div className="todoContaionner">
       <imput type="text" name="text" id="text" placeholder="Add tast..."/>
       <button className='addBtn'>Add</button>
    </div>
  )
}

export default TodoList