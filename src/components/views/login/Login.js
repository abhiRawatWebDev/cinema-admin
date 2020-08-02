import React from "react";
import logo from "../../../assets/img/logo-dark.png";

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loginForm: {
                username: null,
                password: null,
                errors: {
                    username: '',
                    password: ''
                }
            }
        }
    }

    componentDidMount() {
        
    }

    goToDashboard = () => {
        this.props.history.push('/dashboard');
    }

    handelFormInputChange = (event) => {
        event.preventDefault(); 
        const {name, value} = event.target; // Destructuring.
        console.log(name, value)



    }

    render() {
        return (
            <div id="wrapper">
                <div className="vertical-align-wrap">
                    <div className="vertical-align-middle">
                        <div className="auth-box ">
                            <div className="left">
                                <div className="content">
                                    <div className="header">
                                        <div className="logo text-center"><img src={logo} alt="Klorofil Logo" /></div>
                                        <p className="lead">Login to your account</p>
                                    </div>
                                    <form className="form-auth-small" >
                                        <div className="form-group">
                                            <label htmlFor="signin-email" className="control-label sr-only">Email</label>
                                            <input type="email" className="form-control" id="signin-email" placeholder="Email" onChange={this.handelFormInputChange} name='email' />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="signin-password" className="control-label sr-only">Password</label>
                                            <input type="password" className="form-control" id="signin-password" placeholder="Password" onChange={this.handelFormInputChange} name='password' />
                                        </div>
                                        <div className="form-group clearfix">
                                            <label className="fancy-checkbox element-left">
                                                <input type="checkbox" />
                                                <span>Remember me</span>
                                            </label>
                                        </div>
                                        <button type="button" className="btn btn-primary btn-lg btn-block" onClick={this.goToDashboard}>LOGIN</button>
                                        <div className="bottom">
                                            <span className="helper-text"><i className="fa fa-lock"></i> <a href="/" >Forgot password?</a></span>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="right">
                                <div className="overlay"></div>
                                <div className="content text">
                                    <h1 className="heading">Cinema Microservice Application</h1>
                                    <p>by Abhishek Rawat</p>
                                </div>
                            </div>
                            <div className="clearfix"></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}