import React, { Component, Fragment } from 'react'
class StateExample extends Component {
    state = {
        username: 'sai',
        password: '123456789',
    }
    render() {
        console.log(this.state);
        return (
            <Fragment>
                <h1>Username:{this.state.username}</h1>
                <p>password:{ this.state.password}</p>
            </Fragment>
         );
    }
}
 
export default StateExample;