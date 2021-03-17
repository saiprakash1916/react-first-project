import React, { Fragment } from 'react'
const HeaderComponent = () => {
    return (
        <Fragment>
            <nav>
                <ul className="menu">
                    <li><a href="/">Menu</a></li>
                    <li><a href="/">About</a></li>
                    <li><a href="/">Service</a></li>
                    <li><a href="/">Contact</a></li>
                </ul>
            </nav>
        </Fragment>
    )
}

export default HeaderComponent
