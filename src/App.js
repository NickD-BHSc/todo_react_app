import React, {Component} from 'react'; //both ways are possible, but the {Component} part was what I was missing from the first import
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layout/Header'
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';
import uuid from 'uuid';


import './App.css';
//import axios from 'axios'; //only if i want a demo server

class App extends Component {
  state = {
    todos: []
  }

  // componentDidMount() {
  //   axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
  //     .then(res => this.setState({ todos: res.data }))
  // }


  //toggle complete
  markComplete = (id) => {
    this.setState( { todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    }) }) ;
  }

  //delete todo
  delTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !==id)] });
  }

  //add todo
  addTodo = (title) => {
    const newTodo = {
      id: uuid.v4(),
      title,
      completed: false
    }
    this.setState({ todos: [...this.state.todos, newTodo] });
  }

  render(){
    console.log(this.state.todos)
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route exact path="/" render={props => (
              <React.Fragment>
                <AddTodo addTodo={this.addTodo} />
                <Todos todos={this.state.todos} markComplete={this.markComplete}
                delTodo={this.delTodo} />
              </React.Fragment>
            )} />
            <Route path="/about" component={About}/>
            
          </div>
        </div>
      </Router>
    );
  }
}




export default App;





//apparently this function App() thing needs a little more maintenance, im not sure how to do it yet so I'll stick with classes
// function App() {
//   var state = {
//     todos: [
//       {
//         id: 1,
//         title: 'Take out the trash',
//         completed: false
//       },
//       {
//         id: 2,
//         title: 'Study some shet',
//         completed: false
//       },
//       {
//         id: 3,
//         title: 'Prep DS',
//         completed: false
//       }
//     ]
//   }
//   console.log(this.state.todos[0])
//   return (
//     <div className="App">
//       <Todos />
//     </div>
//   );
// }