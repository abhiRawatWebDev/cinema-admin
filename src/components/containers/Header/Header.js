import React from "react";
import logo from "../../../assets/img/logo-dark.png";
import userAvatar from "../../../assets/img/user.png";
import { NavLink } from "react-router-dom";
class Header extends React.Component {
    render() {
        return (
            <div id="wrapper">
                <nav className="navbar navbar-default navbar-fixed-top">
                    <div className="brand">
                        <a href="index.html"><img src={logo} alt="Klorofil Logo" className="img-responsive logo" /></a>
                    </div>
                    <div className="container-fluid">
                        <div className="navbar-btn">
                            <button type="button" className="btn-toggle-fullwidth"><i className="lnr lnr-arrow-left-circle"></i></button>
                        </div>
                        <form className="navbar-form navbar-left">
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="Search dashboard..." />
                                <span className="input-group-btn"><button type="button" className="btn btn-primary">Go</button></span>
                            </div>
                        </form>
                        <div id="navbar-menu">
                            <ul className="nav navbar-nav navbar-right">
                                <li className="dropdown">
                                    <a href="/" className="dropdown-toggle icon-menu" data-toggle="dropdown">
                                        <i className="lnr lnr-alarm"></i>
                                        <span className="badge bg-danger">5</span>
                                    </a>
                                    <ul className="dropdown-menu notifications">
                                        <li><a href="#" className="notification-item"><span className="dot bg-warning"></span>System space is almost full</a></li>
                                        <li><a href="/" className="notification-item"><span className="dot bg-danger"></span>You have 9 unfinished tasks</a></li>
                                        <li><a href="/" className="notification-item"><span className="dot bg-success"></span>Monthly report is available</a></li>
                                        <li><a href="/" className="notification-item"><span className="dot bg-warning"></span>Weekly meeting in 1 hour</a></li>
                                        <li><a href="/" className="notification-item"><span className="dot bg-success"></span>Your request has been approved</a></li>
                                        <li><a href="/" className="more">See all notifications</a></li>
                                    </ul>
                                </li>
                                <li><NavLink to="/">SignOut</NavLink></li>
                                <li className="dropdown">
                                    <a href="#" className="dropdown-toggle" data-toggle="dropdown"><img src={userAvatar} className="img-circle" alt="Avatar" /> <span>Samuel</span> <i className="icon-submenu lnr lnr-chevron-down"></i></a>
                                    <ul className="dropdown-menu">
                                        <li><a href="/"><i className="lnr lnr-user"></i> <span>My Profile</span></a></li>
                                        <li><a href="/"><i className="lnr lnr-envelope"></i> <span>Message</span></a></li>
                                        <li><a href="/"><i className="lnr lnr-cog"></i> <span>Settings</span></a></li>
                                        <li><a href="/"><i className="lnr lnr-exit"></i> <span>Logout</span></a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Header