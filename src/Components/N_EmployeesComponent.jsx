import { render } from '@testing-library/react'
import React, { Component, Fragment } from 'react'
class N_EmployeeComponent extends Component{
    state = {
        EmployeeData:[{Emp_Id: 'sp1',
        Emp_Name: 'sai',
        Emp_sal: 20000,
        Emp_Education: 'web-developer',
        Emp_city: 'Guntur',
        Emp_desg:'Manager',
        Emp_photo: 'https://images.unsplash.com/photo-1557862921-37829c790f19?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8bWFufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
        }, {
        Emp_Id: 'sp2',
        Emp_Name: 'prakash',
        Emp_sal: 30000,
        Emp_Education: 'Front end developer',
        Emp_city: 'Guntur',
        Emp_desg:'project manager',
        Emp_photo:'https://images.unsplash.com/photo-1503443207922-dff7d543fd0e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8bWVufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'  
        }, {
        Emp_Id: 'sp3',
        Emp_Name: 'sp',
        Emp_sal: 40000,
        Emp_Education: 'Full stact developer',
        Emp_city: 'Guntur',
        Emp_desg:'Manager',
        Emp_photo:'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8bWVufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
        }]   
    }
    render(){
    let Employees = this.state.EmployeeData.map(emp => (
        <Fragment>
            <ul className="list-group">
                <li className="list-group-item"><img src={emp.Emp_photo} alt={emp.Emp_photo} /></li>
                <li className="list-group-item">{emp.Emp_Id}</li>
                <li className="list-group-item">{emp.Emp_Name}</li>
                <li className="list-group-item">{emp.Emp_Education}</li>
                <li className="list-group-item">{emp.Emp_desg}</li>
                <li className="list-group-item">{emp.Emp_city}</li>
                <li className="list-group-item">{emp.Emp_sal}</li>
            </ul>
        </Fragment>
    ));
    return <section className="container emp_block">{ Employees}</section>
    }
} 

export default N_EmployeeComponent;