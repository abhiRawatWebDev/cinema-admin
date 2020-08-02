import React from "react";
import { NavLink } from 'react-router-dom';

class Sidebar extends React.Component {
    render() {
        return (
            <div id="wrapper">
                <div id="sidebar-nav" className="sidebar">
                    <div className="sidebar-scroll">
                        <nav>
                            <ul className="nav">
                                <li><NavLink to="/dashboard"><i className="lnr lnr-home"></i><span>Dashboard</span></NavLink></li>
                                <li>
                                    <NavLink
                                        to="/cinema"
                                        isActive={(match, location) => {
                                            if (!match) {
                                                return false;
                                            }
                                            return location.pathname === '/cinema' || location.pathname === "/cinema/add-cinema";
                                        }}
                                    ><i className="lnr lnr-code"></i> <span>Cinemas</span></NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/movie"
                                        isActive={(match, location) => {
                                            if (!match) {
                                                return false;
                                            }
                                            return location.pathname === '/movie' || location.pathname === "/movie/add-movie";
                                        }}
                                    ><i className="lnr lnr-chart-bars"></i> <span>Movies</span></NavLink></li>
                                <li>
                                    <a href="#subPages" data-toggle="collapse" className=""><i className="lnr lnr-chart-bars"></i> <span>Reports</span> <i className="icon-submenu lnr lnr-chevron-left"></i></a>
                                    <div id="subPages" className="collapse in">
                                        <ul className="nav">
                                            <li><NavLink to="/report/user-report">User Accounts</NavLink></li>
                                            <li><NavLink to="/report/booking-report">Booking Report</NavLink></li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        );
    }
}

export default Sidebar