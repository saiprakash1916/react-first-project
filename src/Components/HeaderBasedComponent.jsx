//link to screen shot number 24
import React, { Component, Fragment } from 'react'
const HeaderBasedComponent = props => {
    console.log(props)
    return (
        <Fragment>
            <div className="card container">
                <div className="card-body">
                    <h1 className="display">{ props.name}</h1>
                    <p className="lead">{props.company }</p>
                    <p className="lead">{props.Desgination}</p>
                    <p>{ props.children}</p>
                </div>
           </div>
        </Fragment>
    )
}
export default HeaderBasedComponent;