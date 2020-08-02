import React from 'react';
import { NavLink } from 'react-router-dom';
import { appConstant } from './../../../appConstants';
import axios from 'axios';

class Cinema extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cinemaList: []
        };
    }

    componentDidMount() {
        axios.get(`${appConstant.cinemaCatalogMicroservice}/cinema/list`).then(
            response => {
                if (response && response.data) {
                    this.setState({ cinemaList: response.data });
                }
            }
        );
    }

    componentDidUpdate() {
    }

    render() {
        return (
            <div id="wrapper">
                <div className="main">
                    <div className="main-content">
                        <div className="container-fluid">
                            <h3 className="page-title"><b>CINEMAS</b></h3>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="panel">
                                        <div className="panel-heading">
                                            <h3 className="panel-title">Available Cinemas</h3>
                                        </div>
                                        <div className="panel-body">
                                            <NavLink to="/cinema/add-cinema" className="btn btn-primary" style={{ float: "right" }}>Add New Cinema</NavLink>
                                            <table className="table table-hover">
                                                <thead>
                                                    <tr>
                                                        <th>Name</th>
                                                        <th>Address</th>
                                                        <th>City</th>
                                                        <th>State</th>
                                                        <th>Status</th>
                                                        <th>Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        this.state.cinemaList.map(cinema => {
                                                            return <tr key={cinema._id}>
                                                                <td style = {{width:"20%"}}>{cinema._id}</td>
                                                                <td style = {{width:"30%"}}>{cinema.name}</td>
                                                                <td>@steve</td>
                                                                <td>@steve</td>
                                                                <td>@steve</td>
                                                                <td>
                                                                    <button className="btn btn-primary btn-sm" style={{ marginRight: "5px" }}>Edit</button>
                                                                    <button className="btn btn-danger btn-sm">Delete</button>
                                                                </td>
                                                            </tr>
                                                        })
                                                    }
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Cinema;