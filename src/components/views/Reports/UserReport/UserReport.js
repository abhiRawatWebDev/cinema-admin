import React from 'react';

class UserReport extends React.Component {
    render() {
        return (
            <div id="wrapper">
                <div className="main">
                    <div className="main-content">
                        <div className="container-fluid">
                            <h3 className="page-title"><b>USER REPORT</b></h3>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="panel">
                                        <div className="panel-heading">
                                            <h3 className="panel-title">Registered Users</h3>
                                        </div>
                                        <div className="panel-body">
                                            <table className="table table-hover">
                                                <thead>
                                                    <tr>
                                                        <th>Name</th>
                                                        <th>Address</th>
                                                        <th>City</th>
                                                        <th>State</th>
                                                        <th>Status</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>Steve</td>
                                                        <td>Jobs</td>
                                                        <td>@steve</td>
                                                        <td>@steve</td>
                                                        <td>@steve</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Simon</td>
                                                        <td>Philips</td>
                                                        <td>@simon</td>
                                                        <td>@simon</td>
                                                        <td>@simon</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Jane</td>
                                                        <td>Doe</td>
                                                        <td>@jane</td>
                                                        <td>@jane</td>
                                                        <td>@jane</td>
                                                    </tr>
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

export default UserReport;