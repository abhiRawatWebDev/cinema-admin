import React from 'react';
import * as Yup from 'yup';
import { Formik, Form, Field } from "formik";

class AddMovie extends React.Component {
    validationSchema = Yup.object({
        name: Yup.string().required(),
        releaseDate: Yup.string().required(),
        screenTime: Yup.string().required(),
        language: Yup.string().required(),
        genre: Yup.string().required(),
        summary: Yup.string().required()
    });

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
                                            <Formik
                                                initialValues={{
                                                    name: '',
                                                    releaseDate: '',
                                                    screenTime: '',
                                                    language: '',
                                                    genre: [],
                                                    summary: ''
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
                                                            <label className="col-sm-1">Release Date</label>
                                                            <div className="col-sm-8">
                                                                <Field className="form-control" name="releaseDate"></Field>
                                                                {errors.releaseDate && <p style={{ textAlign: "left", color: "red" }}>{errors.releaseDate}</p>}
                                                            </div>
                                                        </div>
                                                        <br />
                                                        <div className="form-group row">
                                                            <label className="col-sm-1">Screen Time</label>
                                                            <div className="col-sm-8">
                                                                <Field className="form-control" name="screenTime"></Field>
                                                                {errors.screenTime && <p style={{ textAlign: "left", color: "red" }}>{errors.screenTime}</p>}
                                                            </div>
                                                        </div>
                                                        <br />
                                                        <div className="form-group row">
                                                            <label className="col-sm-1">Language</label>
                                                            <div className="col-sm-8">
                                                                <Field className="form-control" name="language" as="select">
                                                                    <option value="hindi">Hindi</option>
                                                                    <option value="english">English</option>
                                                                    <option value="french">French</option>
                                                                    <option value="urdu">Urdu</option>
                                                                </Field>
                                                                {errors.language && <p style={{ textAlign: "left", color: "red" }}>{errors.language}</p>}
                                                            </div>
                                                        </div>
                                                        <br />
                                                        <div className="form-group row">
                                                            <label className="col-sm-1">Genre</label>
                                                            <div className="col-sm-8">
                                                                <Field className="form-control" name="genre" as="select" multiple>
                                                                    <option value="romantic">Romantic</option>
                                                                    <option value="drama">Drama</option>
                                                                    <option value="scfi">ScFi</option>
                                                                    <option value="history">History</option>
                                                                </Field>
                                                                {errors.genre && <p style={{ textAlign: "left", color: "red" }}>{errors.genre}</p>}
                                                            </div>
                                                        </div>
                                                        <br />
                                                        <div className="form-group row">
                                                            <label className="col-sm-1">Summary</label>
                                                            <div className="col-sm-8">
                                                                <div className="hideShowPassword-wrapper">
                                                                    <Field as="textarea" className="form-control" rows="4" name="summary"></Field>
                                                                    {errors.summary && <p style={{ textAlign: "left", color: "red" }}>{errors.summary}</p>}
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

export default AddMovie;