import React, { Component, Fragment } from 'react'
class EmployeeComponent extends Component {
    state = {
        Emp_Id: 'sp1',
        Emp_Name: 'sai',
        Emp_sal: 20000,
        Emp_Education: 'web-developer',
        Emp_city: 'Guntur',
        Emp_desg:'Manager',
        Emp_photo:'https://images.unsplash.com/photo-1557862921-37829c790f19?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8bWFufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
     }
    render() { 
        return (
            <Fragment>
                <section>
                    <article>
                        <img src={this.state.Emp_photo} alt={this.state.Emp_photo} />
                        <h1>{this.state.Emp_Name}</h1>
                        <p>{this.state.Emp_Id}</p>
                        <p>{this.state.Emp_sal}</p>
                        <p>{this.state.Emp_Education}</p>
                        <p>{ this.state.Emp_desg}</p>
                        <p>{ this.state.emp_city}</p>
                    </article>
                </section>
            </Fragment>
         );
    }
}
 
export default EmployeeComponent;