import React from 'react'

const Employee = (props) => {
    return (
        <div className="card col-md-6 mx-auto">
            <div className="card-body">
                <img src={props.Employee.emp_photo}  alt="name" />
                <h1>{props.Employee.emp_name}</h1>
                <p>{props.Employee.emp_id}</p>
                <p>{props.Employee.emp_sal}</p>
                <p>{props.Employee.emp_desg}</p>
                <p>{props.Employee.emp_education}</p>
                <p>{ props.Employee.emp_city}</p>
            </div> 
        </div>
    )
}

export default Employee;
