let Employee = ()=> {
    let employees = [
        {"id":1,"name":"Raimondo","gender":"Male"},
        {"id":2,"name":"Boycey","gender":"Male"},
        {"id":3,"name":"Evelyn","gender":"Male"},
        {"id":6,"name":"Nikki","gender":"Female"},
        {"id":7,"name":"Anetta","gender":"Female"},
    ]

    return <div>
        <h1> Employee Data </h1>
        <table border={2}> 
            <head>
            <th> Id </th>
            <th> Name </th>
            <th> Gender </th>
            </head>
            <body> {employees.map((emp)=>{
                return <tr>
                    <td> {emp.id} </td>
                    <td> {emp.name} </td>
                    <td> {emp.gender} </td>
                </tr>
            })}
            </body>
        </table>
    </div>
}
export default Employee;