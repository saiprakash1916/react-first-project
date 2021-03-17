import React, { Component, Fragment } from 'react'
class CounterComponent extends Component {
    state = {
        count: 0,
    };
    increment = () => {
        this.setState({ counter: this.state.counter + 1 })
        //set state is used for updating setvalue
    };
    decrement = () => {
        this.setState({ counter: this.state.counter - 1 })
    };
    reset = () => {
        this.setState({ counter: 0 })
    }
    render() { 
        return (
            <Fragment>
                <div className="container col-md-4">
                    <h1>{this.state.counter}</h1>
                    <button className="btn btn-success m-2" onClick={this.increment}>Increment</button>
                    <button className="btn btn-danger m-2" onClick={this.decrement}>Decrement</button>
                    <button className="btn btn-secondary m-2" onClick={this.reset}>Reset</button>
                </div>
            </Fragment>
         );
    }
}
 
export default CounterComponent;