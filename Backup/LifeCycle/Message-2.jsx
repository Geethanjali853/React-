import React from 'react'

class Message extends React.Component {
    state = {
        msg: "Hello"
    }
    gmHandler() {
        this.setState({msg: "Good Morning"})
    }
    gaHandler() {
        this.setState({msg: "Good Afternoon"})
    }
    gehandler() {
        this.setState({msg: "Good Evening"})
    }
    gnhandler() {
        this.setState({msg: "Good Night"})
    }
    render () {
    
        return <div>
            <h3> Message Component </h3>
            <hr />
            <h2> Message Value: {this.state.msg} </h2>
            <button onClick={this.gmHandler}> GM </button>
            <button onClick={this.gaHandler}> GA </button>
            <button onClick={this.geHandler}> GE </button>
            <button onClick={this.gnhandler}> GN </button>
        </div>
    }
}
export default Message;