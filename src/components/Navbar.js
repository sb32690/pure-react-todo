import React, { Component } from 'react'

class Navbar extends Component {
    state = {
        content: ""
    }

    setContent = (event) => {
        this.setState({content: event.target.value})
    }

    addTodo = () => {
        if (this.state.content !== "") {
            this.props.addTodo(this.state.content);
            this.setState({
                content: ""
            })
        }
    }
  render() {
    return (
      <div>
        <header style={css.header}>
            <h1 style={css.title}>Todo<span style={css.light}>App</span></h1>
        </header>
        <div style={css.inputBar}>
            <input style={css.input} type="text" placeholder="Enter Todo" value={this.state.content} onChange={this.setContent}></input>
            <button style={css.addBtn} onClick={this.addTodo}>ADD</button>
        </div>
      </div>
    )
  }
}

//modulation css as an example 
const css = {
    header: {
        backgroundColor: "#171717",
        padding: '1em'
    },
    title: {
        color: "#FFCE00",
        fontSize: "2.8em",
        textAlign: "center",
        textTransform: "uppercase"
    },
    light: {
        color: "#f3f3f3",
        fontWeight: "300"

    },
    inputBar: {
        display: "flex",
        height: "3.5em"
    },
    input: {
        flex: "10",
        padding: "0",
        margin: "0",
        fontSize: "1.8em",
        border: "none",
        borderBottom: "3px solid #FFCE00",
        textIndent: "0.5em"
    },
    addBtn: {
        flex: "2",
        fontSize: "1.15em",
        backgroundColor: "#FFCE00",
        border: "none",
        outline: "none",
        cursor: "pointer"
    }
}

export default Navbar