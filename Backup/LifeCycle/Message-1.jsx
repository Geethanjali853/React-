import React from 'react'

class Message extends React.Component {
    constructor(props){
       super(props);
       console.log("First Constructor Method")
    }
    componentDidMount(){
        console.log("Third ComponentDidMount Method");
    }
    incrHandler(){}
    decrHandler(){}
    render () {
        console.log("Second Render Method");
        return <div>
            <h3> Message Component </h3>
        </div>
    }
}
export default Message;