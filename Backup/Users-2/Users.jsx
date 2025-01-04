import React, { Component } from 'react'
import Axios from 'axios';

class Users extends Component {
    state;
    constructor(props) {
        super(props)
        this.state = {
            UserData : []
        }
    }
    componentDidMount() {
        Axios.get('https://jsonplaceholder.typicode.com/users')
        .then((resp)=> {
            this.setState({UserData : resp.data})
        })
        .catch(()=> {
        })
    }
    render() {
        return (
        <div>
            <pre> {JSON.stringify(this.state.UserData)} </pre>
            { this.state.UserData.length> 0 ?
            <>
              <table border={2}>
                 <thead>
                    <th> Id </th>
                    <th> Name </th>
                    <th> City </th>
                 </thead>
                 <tbody>
                    {
                        this.state.UserData.map((user)=> {
                            return <tr>
                                <td> {user.id} </td>
                                <td> {user.name} </td>
                                <td> {user.address.city} </td>
                            </tr>
                        })
                    }
                 </tbody>
              </table>
            
            </> : <> No Data </>
        }
        </div>
        )
    }
}
export default Users;