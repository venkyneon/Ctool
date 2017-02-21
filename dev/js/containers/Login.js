import React, {Component, PropTypes} from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {loginUser} from '../actions/authActions';
require('../../scss/style.scss');



class Login extends Component {
	  constructor(props, context) {
	      super(props, context);
this.state={
	errors:{
		userEmail:"",
		userPassword:""
	}
}
	    }

	  render() {
		  const style = {
				  margin: 12
				};
		    return (
		    		<MuiThemeProvider>
		    						<div className="App Login-Page">
		    							<nav className="navbar navbar-default navbar-static-top navbar-inverse">
		    								<div className="container-fluid">
		    									<div className="navbar-header">
		    										<button type="button" className="navbar-toggle collapsed" data-toggle="collapse"
		    											data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
		    										</button>
		    										<a className="navbar-brand" href="#/ctool">CTOOL</a>
		    									</div>
		    								</div>
		    							</nav>

		    							<div className="login-container sap-form">
		    								<form className="form-signin content" name="loginForm">
		    									<h2 className="form-signin-heading">Login</h2>
		    									<TextField className="TextField"
													floatingLabelText="Username"
		    										id="text-field-default"
		    										hintText="Username"
		    										ref="userEmail"
														onBlur={this.validate.bind(this,'userEmail')}
														errorText={this.state.errors.userEmail}
		    									/>
		    									<br />
		    									<TextField className="TextField"
		    										ref='userPassword'
		    										hintText="Password"
		    										floatingLabelText="Password"
														onBlur={this.validate.bind(this,'userPassword')}
														errorText={this.state.errors.userPassword}
		    										type="password">
		    									</TextField>
												<div className="login-button-container">
		    										<RaisedButton label="Sign in" onClick={this.handleLogin.bind(this)} style={style} className="RaisedButton sap-btn btn-block btn-login" />
												</div>
		    								</form>
		    							</div>


		    		<footer className="footer">
		    								<div className="col-xs-0 col-sm-0 col-md-1 col-lg-1"></div>
		    								<div className="col-xs-12 col-sm-12 col-md-10 col-lg-10 ">
		    									<label>v6.6.6 &copy; CTOOL</label>
		    								</div>
		    								<div className="col-xs-0 col-sm-0 col-md-1 col-lg-1"></div>
		    		</footer>

		      </div>
		      </MuiThemeProvider>
		    );
		  }
	  componentWillMount () {
          this.checkAuth(this.props.token);
      }
			componentDidMount () {
					this.refs.userEmail.getInputNode().value = 'user';
					this.refs.userPassword.getInputNode().value = 'password';
			}
      componentWillReceiveProps (nextProps) {
          this.checkAuth(nextProps.token);
      }

      checkAuth (token) {
          if (token) {
        	  this.context.router.push('dashboard');
          }
      }
	  handleLogin(){
		  const userEmail = this.refs.userEmail.getValue();
		  const userPassword = this.refs.userPassword.getValue();
		  this.props.loginUser(userEmail,userPassword);
	  }
		validate(field){
			var errors={};
					this.refs[field].getValue()==""?	errors[field]="Required":	errors[field]="";
					if(this.refs.userEmail.getValue()=="" && this.refs.userPassword.getValue()==""){
					 errors["userEmail"]="Required";
					 errors["userPassword"]="Required";
					}

				this.setState({errors:errors});
		}
}

Login.contextTypes = {
		  router: React.PropTypes.object.isRequired
		};
function mapStateToProps(state) {
	  return { token: state.Auth.token };
	}

	function mapDispatchToProps(dispatch) {
		return bindActionCreators({loginUser: loginUser}, dispatch);
	}

	export default connect(mapStateToProps, mapDispatchToProps)(Login);
