import React, { Component, Fragment } from 'react'
class PropsExample extends Component {
    state = {  }
    render() {
        console.log(this.props);
        return (    
            <Fragment>
                <h1>My name is { this.props.name}</h1>
            </Fragment>
         );
    }
}
 
export default PropsExample;