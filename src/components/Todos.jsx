import React from 'react';
import Todo from './Todo';

const Todos = ({todos}) => {
  return (
    <div  className="container-fluid">
      <div className="container">
        <div className="row">
          {todos && todos.map(todo => (
              <Todo key={todo.id} todo={todo} />
            ))}
        </div>
      </div>
    </div>
  );
}

export default Todos; 