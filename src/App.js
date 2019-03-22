//Pure React 


//import React, { Component } from 'react';
// import Navbar from './components/Navbar'
// import Todos from './components/Todos'

// class App extends Component {
//   state = {
//     todos: [
//       {
//         id: 0,
//         content: "Todo 1",
//         done: false
//       },
//       {
//         id: 1,
//         content: "Todo 2",
//         done: false
//       }
//     ]
//   }

//   addTodo = content => {
//     let todos = this.state.todos;
//     todos.push({ id: todos.length, content: content, done: false })
//     this.setState({todos: todos})
//   } 

//   toggleDone = (id) => {
//     this.setState({todos: this.state.todos.map(todo => {
//       if (todo.id === id) {
//         todo.done = !todo.done
//       } 
//       return todo;
//     })})
//   }

//   removeTodo = (id) => {
//     this.setState({
//       todos: this.state.todos.filter(todo => todo.id !== id)
//     })
//   }

//   render() {
//     return (
//       <div>
//         <Navbar addTodo={this.addTodo}/>
//         {/* getting state with this.state.todos */}
//         <Todos todos={this.state.todos} toggleDone={this.toggleDone} removeTodo={this.removeTodo}/>
//       </div>
//     );
//   }
// }

// export default App;


import React, {Component} from 'react';
import Navbar from './components/Navbar';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
      </div>
    );
  }
}
export default App;