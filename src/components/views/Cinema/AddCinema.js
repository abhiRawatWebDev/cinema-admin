import React from 'react';

class AddCinema extends React.Component {
    render() {
        return (
            <div id="wrapper">
                <div className="main">
                    <div className="main-content">
                        <div className="container-fluid">
                            <h3 className="page-title"><b>ADD CINEMA</b></h3>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="panel">
                                        <div className="panel-heading">
                                            <h3 className="panel-title">Cinema Details</h3>
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
                                                    <label className="col-sm-1">Addess</label>
                                                    <div className="col-sm-8">
                                                        <input type="text" className="form-control" />
                                                    </div>
                                                </div>
                                                <br />
                                                <div className="form-group row">
                                                    <label className="col-sm-1">State</label>
                                                    <div className="col-sm-8">
                                                        <select className="form-control">
                                                            <option value="cheese">Cheese</option>
                                                            <option value="tomatoes">Tomatoes</option>
                                                            <option value="mozarella">Mozzarella</option>
                                                            <option value="mushrooms">Mushrooms</option>
                                                            <option value="pepperoni">Pepperoni</option>
                                                            <option value="onions">Onions</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <br />
                                                <div className="form-group row">
                                                    <label className="col-sm-1">City</label>
                                                    <div className="col-sm-8">
                                                        <select className="form-control">
                                                            <option value="cheese">Cheese</option>
                                                            <option value="tomatoes">Tomatoes</option>
                                                            <option value="mozarella">Mozzarella</option>
                                                            <option value="mushrooms">Mushrooms</option>
                                                            <option value="pepperoni">Pepperoni</option>
                                                            <option value="onions">Onions</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <br />
                                                <div className="form-group row">
                                                    <label className="col-sm-1">Description</label>
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

export default AddCinema;