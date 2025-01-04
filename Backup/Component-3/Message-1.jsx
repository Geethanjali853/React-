let Message = ()=> {
    let msg='Good Morning';
    let price=700;
    let colors=['Red', 'Blue', 'Black'];
    return <div>
        <h2>Message Component</h2>
        <h3>Message Value: {msg}</h3> 
        <h4>Price:{price}</h4>
        <h5>Colors:{colors}</h5>
    </div>
}
export default Message;