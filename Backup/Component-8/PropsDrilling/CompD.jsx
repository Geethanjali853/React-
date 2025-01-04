import React from 'react'

let CompD = (props)=> {

    return <div>
       <h3> Component D</h3>
       <pre> {JSON.stringify(props)} </pre>
       <h1> Emp Name: {props.name} </h1>
    </div>
}
export default CompD;