import React, { Component} from 'react';
import './App.css';
import Todos from './components/Todos';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Contact from './components/Contact';
import About from './components/About';
import TodoDetails from './components/TodoDetails';

class App extends Component {
  state = {
    todos: []
  }

componentDidMount() {
  this.getTodos()
    .then(res => res.json())
    .then(data => {
      this.setState({
        todos: data
      })
    });
}

getTodos() {
  return fetch('https://jsonplaceholder.typicode.com/todos')
}

render() {
  console.log(this.state.todos);
  return (
    <div className="App">
      <Router>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
            <Link className="nav-link" to={'/todos'}>To do list</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to={'/about'}>A propos</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to={'/contact'}>Contact</Link>
            </li>
          </ul>
          <span className="navbar-text">
          <p className="navbar-brand mb-0 h1">LE ROUTAGE</p>
          </span>
        </div>
      </nav>

        {/* <Todos  todos={this.state.todos}/> */}
        <Route exact path="/todos" render={() => (
          <Todos todos={this.state.todos}/>
        )} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/todos/:id" component={TodoDetails} />
      </Router>
    </div>
  );
}
}

export default App;