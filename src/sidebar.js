import React from 'react'
import { Link } from "react-router-dom"

const Sidebar = () => {
    return (
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

            {/* <!-- Sidebar - Brand --> */}
            <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                <div className="sidebar-brand-icon rotate-n-15">
                    <i className="fas fa-laugh-wink"></i>
                </div>
                <div className="sidebar-brand-text mx-3">Students And Teachers</div>
            </a>
            {/* 
            <!-- Divider --> */}
            <br></br>
            <br></br>
            <br></br>

            {/* <!-- Nav Item - Dashboard --> */}
            <li className="nav-item active">
                <Link className="nav-link" to="./teachers">
                    <i className="fas fa-fw fa-table"></i>
                    <span>Teachers</span></Link>
            </li>



            {/* <!-- Nav Item - Tables --> */}
            <li className="nav-item active">
                <Link className="nav-link" to="./students">
                    <i className="fas fa-fw fa-table"></i>
                    <span>Students</span></Link>
            </li>

        </ul>
    )
}

export default Sidebar