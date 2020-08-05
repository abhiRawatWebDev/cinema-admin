import React from 'react';
import * as Yup from 'yup';
import { Formik, Form, Field } from "formik";

class AddCinema extends React.Component {
    validationSchema = Yup.object({
        name: Yup.string().required(),
        address: Yup.string().required(),
        city: Yup.string().required(),
        state: Yup.string().required()
    });
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
                                            <Formik
                                                initialValues={{
                                                    name: '',
                                                    address: '',
                                                    state: '',
                                                    city: '',
                                                    description: ''
                                                }}

                                                validationSchema={this.validationSchema}

                                                onSubmit={values => {
                                                    console.log(values)
                                                }}
                                            >
                                                {({ errors }) => (
                                                    <Form>
                                                        <div className="form-group row">
                                                            <label className="col-sm-1">Name</label>
                                                            <div className="col-sm-8">
                                                                <Field className="form-control" name="name"></Field>
                                                                {errors.name && <p style={{ textAlign: "left", color: "red" }}>{errors.name}</p>}
                                                            </div>
                                                        </div>
                                                        <br />
                                                        <div className="form-group row">
                                                            <label className="col-sm-1">Address</label>
                                                            <div className="col-sm-8">
                                                                <Field className="form-control" name="address"></Field>
                                                                {errors.address && <p style={{ textAlign: "left", color: "red" }}>{errors.address}</p>}
                                                            </div>
                                                        </div>
                                                        <br />
                                                        <div className="form-group row">
                                                            <label className="col-sm-1">State</label>
                                                            <div className="col-sm-8">
                                                                <Field as="select" className="form-control" name="city">
                                                                    <option value="">Select</option>
                                                                    <option value="tomatoes">Tomatoes</option>
                                                                    <option value="mozarella">Mozzarella</option>
                                                                    <option value="mushrooms">Mushrooms</option>
                                                                    <option value="pepperoni">Pepperoni</option>
                                                                    <option value="onions">Onions</option>
                                                                </Field>
                                                                {errors.city && <p style={{ textAlign: "left", color: "red" }}>{errors.city}</p>}
                                                            </div>
                                                        </div>
                                                        <br />
                                                        <div className="form-group row">
                                                            <label className="col-sm-1">City</label>
                                                            <div className="col-sm-8">
                                                                <Field as="select" className="form-control" name="state">
                                                                    <option value="">Select</option>
                                                                    <option value="tomatoes">Tomatoes</option>
                                                                    <option value="mozarella">Mozzarella</option>
                                                                    <option value="mushrooms">Mushrooms</option>
                                                                    <option value="pepperoni">Pepperoni</option>
                                                                    <option value="onions">Onions</option>
                                                                </Field>
                                                                {errors.state && <p style={{ textAlign: "left", color: "red" }}>{errors.state}</p>}
                                                            </div>
                                                        </div>
                                                        <br />
                                                        <div className="form-group row">
                                                            <label className="col-sm-1">Description</label>
                                                            <div className="col-sm-8">
                                                                <div className="hideShowPassword-wrapper">
                                                                    <Field as="textarea" className="form-control" rows="4" name="description"></Field>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <br />
                                                        <div className="row">
                                                            <div className="col-md-6">
                                                                <button type="submit" className="btn btn-primary btn-lg" style={{ float: "right" }}>SUBMIT</button>
                                                            </div>
                                                        </div>
                                                        <br />
                                                    </Form>
                                                )}
                                            </Formik>
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