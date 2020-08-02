import React from 'react';
import { NavLink } from 'react-router-dom';
import { appConstant } from "./../../../appConstants";
import axios from 'axios';
import moment from 'moment';

class Movie extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movieList: []
        }
    }

    componentDidMount() {
        axios.get(`${appConstant.movieMicroservice}/movie/list`).then(
            response => {
                if (response && response.data) {
                    this.setState({ movieList: response.data });
                }
            }
        );
    }

    render() {
        return (
            <div id="wrapper">
                <div className="main">
                    <div className="main-content">
                        <div className="container-fluid">
                            <h3 className="page-title"><b>MOVIES</b></h3>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="panel">
                                        <div className="panel-heading">
                                            <h3 className="panel-title">Available Movies</h3>
                                        </div>
                                        <div className="panel-body">
                                            <NavLink to="/movie/add-movie" className="btn btn-primary" style={{ float: "right" }}>Add New Movie</NavLink>
                                            <table className="table table-hover">
                                                <thead>
                                                    <tr>
                                                        <th>Name</th>
                                                        <th>Language</th>
                                                        <th>Screeen Time</th>
                                                        <th>Release Date</th>
                                                        <th>Genre</th>
                                                        <th>Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        this.state.movieList.map(movie => {
                                                            return <tr key={movie._id}>
                                                                <td>{movie.name}</td>
                                                                <td>{movie.language}</td>
                                                                <td>{movie.screenTime} Mins</td>
                                                                <td>{moment(movie.releaseDate).format('D-M-YYYY')}</td>
                                                                <td>{movie.genre.join(', ')}</td>
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

export default Movie;