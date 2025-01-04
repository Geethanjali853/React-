import React from "react"
let Employee = (props)=>{

    return <div>
        <pre> {JSON.stringify(props)} </pre>
        <hr />
        <h4> City: {props.data.address.city} </h4>
    </div>
}
export default Employee;