import React from "react";
import axios from 'axios';
import toastr from 'toastr';
import { appConstant } from '../../../appConstants';
import logo from "../../../assets/img/logo-dark.png";

export default class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			loginForm: {
				username: '',
				password: '',
				errors: {
					username: '',
					password: ''
				},
				isValid: true
			}
		}
	}

	componentDidMount() { }

	goToDashboard = () => {
		this.props.history.push('/dashboard');
	}

	handelFormInputChange = async (event) => {
		event.preventDefault();
		const { name, value } = event.target; // Destructuring.
		const updatedState = { // ES6 creating immutable object for login form details and assigning new value of login form.
			...this.state.loginForm,
			[name]: value
		}
		await this.setState({ loginForm: updatedState });
		this.validateForm(name);
	}

	submitLoginForm = (event) => {
		event.preventDefault();
		if (this.validateForm()) {
			axios.post(`${appConstant.authenticationMicroservice}/login`, {
				username: this.state.loginForm.username,
				password: this.state.loginForm.password
			}).then(response => {
				const authUserDetails = response.data;
				localStorage.setItem('userDetails', JSON.stringify(authUserDetails));
				let accessToken = authUserDetails.access_token;
				localStorage.setItem('access_token', accessToken);
				this.props.history.push('/dashboard');
			}).catch(error => {
				toastr.error('Something went wrong onLoginFormSubmit', 'Error');
			});
		}
	}

	validateForm(name = null) {
		const currentState = {...this.state.loginForm,errors: {...this.state.loginForm.errors}};
		currentState.errors.username = (name === 'username' || name === null) ? '' : currentState.errors.username;
		currentState.errors.password = (name === 'password' || name === null) ? '' : currentState.errors.password;
		let formStatus = true;
		if (currentState.username === '' && (name === 'username' || name === null)) {
			currentState.errors.username = 'Username/Email is required';
			formStatus = false;
		}
		if (currentState.password === '' && (name === 'password' || name === null)) {
			currentState.errors.password = 'Password is required';
			formStatus = false;
		} else if (currentState.password.length < 6 && (name === 'password' || name === null)) {			
			currentState.errors.password = 'Password length should be equal or greater than 6 character';
			formStatus = false;
		}
		this.setState({ loginForm: currentState });
		return formStatus;
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
									<form className="form-auth-small" onSubmit={this.submitLoginForm}>
										<div className="form-group">
											<label htmlFor="signin-email" className="control-label sr-only">Email</label>
											<input type="email" className="form-control" id="signin-email" placeholder="Email/Username*" onChange={(event) => this.handelFormInputChange(event)} name='username' />
											{(this.state.loginForm.errors.username)?<p style={{textAlign:"left", color:"red"}}>{this.state.loginForm.errors.username}</p>:""}
										</div>
										<div className="form-group">
											<label htmlFor="signin-password" className="control-label sr-only">Password</label>
											<input type="password" className="form-control" id="signin-password" placeholder="Password*" onChange={this.handelFormInputChange} name='password' />
											{(this.state.loginForm.errors.password)?<p style={{textAlign:"left", color:"red"}}>{this.state.loginForm.errors.password}</p>:""}
										</div>
										<div className="form-group clearfix">
											<label className="fancy-checkbox element-left">
												<input type="checkbox" />
												<span>Remember me</span>
											</label>
										</div>
										<button type="submit" className="btn btn-primary btn-lg btn-block">LOGIN</button>
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