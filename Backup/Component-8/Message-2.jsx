import React from 'react'

const Message = ()=> {

    let [msg,setMsg] = React.useState("Hello");
    
    return <div>
        <h4> Message Value : {msg} </h4>
        <button onClick = {()=>{}} > GM </button>
        <button onClick = {()=>{}} > GN </button>
    </div>
}
export default Message;