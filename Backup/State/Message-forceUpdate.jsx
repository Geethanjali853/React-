import React from 'react'
class Message extends React.Component {
    msg = 'Hello'
    gmHendler = ()=> {
        this.msg = "Good Morning"
        console.log("Good Morning");
        this.forceUpdate()
    }
    render() {
        console.log("Test Case 123");
        return <div>
            <h2> Value : {this.msg} </h2>
            <button onClick={this.gmHendler} > GM </button>
            <button> GN </button>
        </div>
    }
}
export default Message;