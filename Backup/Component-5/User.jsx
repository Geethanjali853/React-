import React from 'react'
import Employee from './Employee';

class User extends React.Component {
    User_Data = {
        name: 'Rahul',
        loc: ['Wayanad', 'New Dehli', 'Bangalore'],
        address: {
            city: 'Bangalore',
            Pincode: 560038
        }
    }

    render() {
        return <div>
            <h1> User Component </h1>
            <hr />
            <Employee data={this.User_Data}/>
        </div>
    }
}
export default User;