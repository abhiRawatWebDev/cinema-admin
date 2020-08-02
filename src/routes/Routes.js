import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import Login from "./../components/views/login/Login";
import Dashboard from "../components/views/Dashboard/Dashboard";
import Cinema from '../components/views/Cinema/Cinema';
import AddCinema from '../components/views/Cinema/AddCinema';
import AddMovie from "../components/views/Movie/AddMovie";
import Movie from "../components/views/Movie/Movie";
import BookingReport from "../components/views/Reports/BookingReport/BookingReport";
import UserReport from "../components/views/Reports/UserReport/UserReport";
import Header from "../components/containers/Header/Header";
import Sidebar from "../components/containers/Sidebar/Sidebar";

const Routes = (props) => {
    return (
        <React.Fragment>
            { (props.location.pathname !== '/') ? <Header /> : null }            
            { (props.location.pathname !== '/') ? <Sidebar /> : null }
            <Switch>
                <Route path="/" exact component={Login}></Route>
                <Route path="/dashboard" exact component={Dashboard}></Route>
                <Route path="/cinema" exact component={Cinema}></Route>
                <Route path="/cinema/add-cinema" component={AddCinema}></Route>
                <Route path="/movie" exact component={Movie}></Route>
                <Route path="/movie/add-movie" component={AddMovie}></Route>
                <Route path="/report/booking-report" component={BookingReport}></Route>
                <Route path="/report/user-report" component={UserReport}></Route>
            </Switch>
        </React.Fragment>
    );
}

export default withRouter(Routes);