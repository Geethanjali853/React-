import React from 'react'
class Employee extends React.Component {

    render(){
        return <div>
            <h2> Employee Component </h2>
            <hr />
            <pre> {JSON.stringify(this.props)} </pre>
            <h4> Employee Name: {this.props.data.name}</h4>
            <h4> Pincode: {this.props.data.address.Pincode} </h4>
        </div>
    }
}
export default Employee;