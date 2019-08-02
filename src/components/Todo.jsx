import React from 'react';
import { Link } from 'react-router-dom';

const Todo = ({todo}) => {
  return (

  <div class="col-sm-4">
      <div className="card w-200">
        <div className="card-body">
          <h5 className="card-title">{todo.title}</h5>
          <Link to={`/todos/${todo.id}`} className="btn btn-primary">details…</Link>
        </div>
      </div>
    </div>
  );
}

export default Todo; 