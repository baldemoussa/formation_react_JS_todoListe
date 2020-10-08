import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';
import axios from 'axios';

/* import { v4 as uuidv4 } from 'uuid';
import uuid from 'uuid' */
import './App.css';

class App extends Component {

state = { 
  todos: []
    /* 
    [
      {
        id: uuidv4(),
        title:'Take out the trash',
        completed: false 
      },
      {
        id: uuidv4(),
        title:'Dinner with wife',
        completed: false 
      }
    ] 
  */
}

//chargement a partir API json
componentDidMount(){
  axios.get('http://jsonplaceholder.typicode.com/todos?_limit=10').then(res => this.setState({todos: res.data}))
}


//marque terminé
markComplete = (id) => {
  this.setState ({todos: this.state.todos.map(todo => {
    if (todo.id===id) {
      todo.completed=!todo.completed
    }
    return todo;
  } ) });
}

//supression
delTodo = (id) => {
  axios.delete('http://jsonplaceholder.typicode.com/todos/$id')
  .then(res => this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] }));
  /* this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] }); */
}

//ajout
addTodo = (title) => {
    axios.post('http://jsonplaceholder.typicode.com/todos', { 
    title, 
    completed: false
})
.then (rest => this.setState({ todos: [...this.state.todos, rest.data ]})); 

   /* const newTodo = {
    id: uuidv4(), //uuid.v4()
    title,
    completed:false
  }
  this.setState({ todos: [...this.state.todos, newTodo]})  */
  
}

  render() {
    return ( 
      <Router>
        <div className="App"> 
          <div className="container">
            <Header />
              <Route exact path="/" render={props=> (
                <React.Fragment>
                  <AddTodo addTodo={this.addTodo} />
                  <Todos  todos_param={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />
                </React.Fragment>
              )} />
              <Route path="/about" component={About} />        
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
