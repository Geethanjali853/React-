import React from 'react'
import Employee from './Employee-1';

class User extends React.Component {
    userName = "Rahul";
    avail = true;
    salary = 45000.45;

    render() {
        return <div>
            <h1> User Component </h1>
            <hr />
            <Employee Name={this.userName} Avail={this.avail} Salary={this.salary}/>
        </div>
    }
}
export default User;