let CompB = (props)=>{         //Functional Component
    
    return <div>
        <h2>ComponentB</h2>
        <hr/>
        <pre>{JSON.stringify(props)}</pre>
        <hr/>
        <h2>Employee Name: {props.name}</h2>
        <h2>Employee Id: {props.id}</h2>
        <h2>Employee Location: {props.loc}</h2>
        <h2>Employee Location: {props.loc[1]}</h2>
    </div>
}
export default CompB;