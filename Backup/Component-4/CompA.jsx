import CompB from './CompB'
let CompA = ()=>{
   let ename = "Rahul"; //String Data
   let eid = 101; //Number Data
   let loc = ["Wayanad","New Delhi","Bangalore"];

    return <div>
        <h2> Component A </h2>
        <hr/>
        <CompB name={ename} id={eid} loc={loc}/>
    </div>
}
export default CompA;