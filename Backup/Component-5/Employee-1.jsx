import React from 'react'
class Employee extends React.Component {

    render(){
        return <div>
            <h2> Employee Component </h2>
            <hr />
            <pre> {JSON.stringify(this.props)} </pre>
            <h4> Employee Name: {this.props.Name}</h4>
            <h4> Employee Availablity: {this.props.Avail * 1}</h4>
            <h4> Employee Salary: {this.props.Salary}</h4>
        </div>
    }
}
export default Employee;