import React from 'react'       //Class Component
class CompB extends React.Component {

    render() {
       return <div>
            <h2> Component B </h2>
            <pre> {JSON.stringify(this.props)} </pre>  
            <hr/>
            <h4> Employee Name: {this.props.name} </h4>
            <h4> EMployee Id: {this.props.id} </h4>
            <h4> Employee Location: {this.props.loc} </h4>
            <h4> Employee Location: {this.props.loc[1]} </h4>
       </div>
    }
}
export default CompB;