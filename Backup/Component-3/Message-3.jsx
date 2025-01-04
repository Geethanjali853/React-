import React from 'react'
let Message = ()=> {
    let msg='Good Morning';
    let emp= {
        eid : 101,
        ename : 'Rahul'
    }
    return <div>
        <h3>Message : {msg}</h3>
        <h4>Employee Data : {JSON.stringify(emp)}</h4>
    </div>
}
export default Message;