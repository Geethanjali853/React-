import React from 'react'
class Message extends React.Component {
    msg = 'Good Morning';  //Property
    price = 700;
    colors = ['Red', 'Blue'];  //if we need one color we can use indexof[]

    render() {            //methods
        return <div>
            <h3>Message Value : {this.msg}</h3>
            <h4>Price: {this.price}</h4>
            <h4>Colors: {this.colors[0]}</h4>   
        </div>
    }
}
export default Message;