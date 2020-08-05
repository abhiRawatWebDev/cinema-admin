import React from 'react';
import Table from "../../../shared/Table";

class UserReport extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            reportData: []
        }
    }
    reportColumns = [
        {labelKey:'First Name', valueKey: 'first_name'},
        {labelKey:'Last Name', valueKey: 'last_name'},
        {labelKey:'Contact', valueKey: 'contact'},
        {labelKey:'Email', valueKey: 'email'}
    ];

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
                                            <Table reportColumns={this.reportColumns} gridData={this.state.reportData}></Table>
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