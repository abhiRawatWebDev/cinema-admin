import React from 'react';

class AddMovie extends React.Component {
    render() {
        return (
            <div id="wrapper">
                <div className="main">
                    <div className="main-content">
                        <div className="container-fluid">
                            <h3 className="page-title"><b>ADD MOVIE</b></h3>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="panel">
                                        <div className="panel-heading">
                                            <h3 className="panel-title">Movie Details</h3>
                                        </div>
                                        <div className="panel-body">
                                            <form>
                                                <div className="form-group row">
                                                    <label className="col-sm-1">Name</label>
                                                    <div className="col-sm-8">
                                                        <input type="text" className="form-control" />
                                                    </div>
                                                </div>
                                                <br />
                                                <div className="form-group row">
                                                    <label className="col-sm-1">Release Date</label>
                                                    <div className="col-sm-8">
                                                        <input type="text" className="form-control" />
                                                    </div>
                                                </div>
                                                <br />
                                                <div className="form-group row">
                                                    <label className="col-sm-1">Screen Time</label>
                                                    <div className="col-sm-8">
                                                        <input type="text" className="form-control" />
                                                    </div>
                                                </div>
                                                <br />
                                                <div className="form-group row">
                                                    <label className="col-sm-1">Language</label>
                                                    <div className="col-sm-8">
                                                        <select className="form-control">
                                                            <option value="hindi">Hindi</option>
                                                            <option value="english">English</option>
                                                            <option value="french">French</option>
                                                            <option value="urdu">Urdu</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <br />
                                                <div className="form-group row">
                                                    <label className="col-sm-1">Genre</label>
                                                    <div className="col-sm-8">
                                                        <select className="form-control" multiple>
                                                            <option value="action">Action</option>
                                                            <option value="romantic">Romantic</option>
                                                            <option value="drama">Drama</option>
                                                            <option value="scfi">ScFi</option>
                                                            <option value="history">History</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <br />
                                                <div className="form-group row">
                                                    <label className="col-sm-1">Summary</label>
                                                    <div className="col-sm-8">
                                                        <div className="hideShowPassword-wrapper">
                                                            <textarea className="form-control" rows="4"></textarea>
                                                        </div>
                                                    </div>
                                                </div>
                                                <br />
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <button type="button" className="btn btn-primary btn-lg" style={{ float: "right" }}>SUBMIT</button>
                                                    </div>
                                                </div>
                                                <br />
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}

export default AddMovie;