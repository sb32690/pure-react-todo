//Pure React no Firebase or Redux

// import React, { Component } from 'react'

// class Navbar extends Component {
//     state = {
//         content: ""
//     }

//     setContent = (event) => {
//         this.setState({content: event.target.value})
//     }

//     addTodo = () => {
//         if (this.state.content !== "") {
//             this.props.addTodo(this.state.content);
//             this.setState({
//                 content: ""
//             })
//         }
//     }
//   render() {
//     return (
//       <div>
//         <header style={css.header}>
//             <h1 style={css.title}>Todo<span style={css.light}>App</span></h1>
//         </header>
//         <div style={css.inputBar}>
//             <input style={css.input} type="text" placeholder="Enter Todo" value={this.state.content} onChange={this.setContent}></input>
//             <button style={css.addBtn} onClick={this.addTodo}>ADD</button>
//         </div>
//       </div>
//     )
//   }
// }

// //modulation css as an example 
// const css = {
//     header: {
//         backgroundColor: "#171717",
//         padding: '1em'
//     },
//     title: {
//         color: "#FFCE00",
//         fontSize: "2.8em",
//         textAlign: "center",
//         textTransform: "uppercase"
//     },
//     light: {
//         color: "#f3f3f3",
//         fontWeight: "300"

//     },
//     inputBar: {
//         display: "flex",
//         height: "3.5em"
//     },
//     input: {
//         flex: "10",
//         padding: "0",
//         margin: "0",
//         fontSize: "1.8em",
//         border: "none",
//         borderBottom: "3px solid #FFCE00",
//         textIndent: "0.5em"
//     },
//     addBtn: {
//         flex: "2",
//         fontSize: "1.15em",
//         backgroundColor: "#FFCE00",
//         border: "none",
//         outline: "none",
//         cursor: "pointer"
//     }
// }

// export default Navbar

import React, {Component} from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';
import * as actions from '../actions';
import Todos from './Todos';

class Navbar extends Component {
  state = {
    showForm: false,
    formValue: ""
  };

  inputChange = event => {
    this.setState({formValue: event.target.value});
  };

  formSubmit = event => {
    const {formValue} = this.state;
    const {addToDo} = this.props;
    event.preventDefault();
    addToDo({title: formValue});
    this.setState({formValue: ""});
  };

  renderForm = () => {
    const {showForm, formValue} = this.state;
    if (showForm) {
      return (
        <div id="todo-add-form">
          <form onSubmit={this.formSubmit}>
            <div>
              <input 
                value={formValue}
                onChange={this.inputChange}
                id="toDoNext"
                type="text"
              />
              <label htmlFor="toDoNext">What Next?</label>
            </div>
          </form>
        </div>
      );
    }
  };
  renderToDo() {
    const {data} = this.props;
    const toDos = _.map(data, (value, key) => {
      return <Todos key={key} todoId={key} todo={value} />;
    });
    if (!_.isEmpty(toDos)) {
      return toDos;
    }
    return (
      <div>
        <h4>You have no more things ToDo!</h4>
      </div>
    );
  }
  componentWillMount() {
    this.props.fetchToDos();
  }
  render() {
    const {showForm} = this.state;
    return (
      <div>
        <div>
          {this.renderForm()}
          {this.renderToDo()}
        </div>
        <div>
          <button 
            onClick={() => this.setState({showForm: !showForm})}
          >
          {showForm ? (
            <i>-</i>
          ) : (
            <i>+</i>
          )}
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({data}) => {
  return {
    data
  }
}

export default connect(mapStateToProps, actions)(Navbar);