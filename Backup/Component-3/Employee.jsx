import React from 'react'
class Employee extends React.Component {
    emp= {
        eid : 103,
        ename : 'Priyanka',
        loc : ['wayand', 'New Delhi', 'Bangalore'],
        address : {
            city :'Noida',
            pin : undefined
        }
    }
    render() {
        return <div>
            <h3>Employee Data</h3>
            <pre>{JSON.stringify(this.emp)}</pre>
            <hr/>
            
            <h4>Employee Name : {this.emp.ename}</h4>
            <h4>Location : {this.emp.loc[2]}</h4>
            <h4>City : {this.emp.address.city}</h4>
            <h4>Pincode : {this.emp.address.pin}</h4>
            </div>
    }
}
export default Employee;