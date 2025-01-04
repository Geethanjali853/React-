import Axios from "axios"
import { useEffect, useState } from "react"

let Users = ()=> {
    let [users, setUsers] = useState([])
    useEffect (()=> {
       Axios.get('https://jsonplaceholder.typicode.com/users')
       .then((resp)=> {
          setUsers(resp.data)
       })
       .catch()
    },[])

    return <div>
        <h1> User Component </h1>
        <pre> {JSON.stringify(users)} </pre>
        {
            Users.length>0 ? <> 
            <table brober={2}> 
                <thead>
                    <th> Id </th>
                    <th> Name </th>
                </thead>
                <tbody>
                    {
                        users.map((user)=> {
                            return <tr>
                                <td> {user.id} </td>
                                <td> {user.name} </td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
         </> : <h3> No Data </h3> 
        }
    </div>
}
export default Users;