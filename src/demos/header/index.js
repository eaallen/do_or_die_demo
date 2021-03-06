import React from 'react'
import {PrimaryButton} from 'office-ui-fabric-react'
import ROUTE from '../../constant/router'
export default function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href={ROUTE.HOME}>Do Or Die Demos</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <a className="nav-link" href={ROUTE.PIEDEMO}>Pie Or Die</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href={ROUTE.CLOUDFUNC}>Cloud Functions</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href={ROUTE.HOME} id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Dropdown
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href={ROUTE.HOME}>Action</a>
                            <a className="dropdown-item" href={ROUTE.HOME}>Another action</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href={ROUTE.HOME}>Something else here</a>
                        </div>
                    </li>
                </ul>
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <PrimaryButton text='Search'/>
                </form>
            </div>
        </nav>
    )
}