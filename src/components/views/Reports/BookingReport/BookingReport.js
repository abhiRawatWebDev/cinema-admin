import React from 'react';
import Table from "../../../shared/Table";

class BookingReport extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            reportData: [
                {name:"Cinema1", address:"address1", city:"city1", state:"state1", status:"Active"},
                {name:"Cinema2", address:"address2", city:"city2", state:"state2", status:"Active"},
                {name:"Cinema3", address:"address3", city:"city3", state:"state3", status:"Active"},
                {name:"Cinema4", address:"address4", city:"city4", state:"state4", status:"Active"},
                {name:"Cinema5", address:"address5", city:"city5", state:"state5", status:"Active"},
                {name:"Cinema6", address:"address6", city:"city6", state:"state6", status:"Active"},
            ]
        }
    }
    reportColumns = [
        {labelKey:'Name', valueKey: 'name'},
        {labelKey:'Address', valueKey: 'address'},
        {labelKey:'City', valueKey: 'city'},
        {labelKey:'State', valueKey: 'state'}, 
        {labelKey:'Status', valueKey: 'status'}
    ];

    render() {
        return (
            <div id="wrapper">
                <div className="main">
                    <div className="main-content">
                        <div className="container-fluid">
                            <h3 className="page-title"><b>BOOKING REPORT</b></h3>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="panel">
                                        <div className="panel-heading">
                                            <h3 className="panel-title">Existing Booking</h3>
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

export default BookingReport;