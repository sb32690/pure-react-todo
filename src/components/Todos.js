//Pure React

//import React, { Component } from 'react'
// import './Todos.css'
// export class Todos extends Component {
//     render() {
//       return (
//         <div className="todolist">
//             {this.props.todos.map(todo => (
//               <div key={todo.id} className={"todoitem " + (todo.done ? 'done' : '' )}>
//                   <div className="todoitem__title" onClick={this.props.toggleDone.bind(this, todo.id)}>{todo.content}</div>
//                   <div className="todoitem__remove" onClick={this.props.removeTodo.bind(this, todo.id)}>remove</div>
//               </div>
//           ))}
//         </div>
//       )
//     }
//   }
  
//   export default Todos;


import React, {Component} from 'react';
import {connect} from 'react-redux';
import {completeToDo} from '../actions/index';
class Todos extends Component {
  completeClick = completeTodoId => {
    const {completeToDo} = this.props;
    completeToDo(completeTodoId);
  };
  render() {
    const{todoId, todo} = this.props;
    return (
      <div key="toDoName">
        <h4>
          {todo.title}
          <span onClick={() => this.completeClick(todoId)}>
            <i>Done</i>
          </span>
        </h4>
      </div>
    );
  }
}

export default connect(null, {completeToDo})(Todos);