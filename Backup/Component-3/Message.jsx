import React from 'react'
class Message extends React.Component {
    msg = 'Good Morning';  //Property
    price = 700;
    colors = ['Red', 'Blue'];  //if we need one color we can use indexof[]
    emp= {
        eid : 101,
        ename : 'Rahul',
        salary : 45000
    }
    render() {            //methods
        return <div>
            <h3>Message Value : {this.msg}</h3>
            <h4>Price: {this.price}</h4>
            <h4>Colors: {this.colors[0]}</h4>   
            <h5>Employee Data : {JSON.stringify(this.emp)}</h5>
        </div>
    }
}
export default Message;