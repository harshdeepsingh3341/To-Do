import React, {useContext, useState} from 'react';
import './styles.scss';
import {InputEmail, InputFields, InputPassword, InputSubmit} from '../../components/InputFields'
import Logo from "../../components/Logo";
import {loginUser} from "../../services/apolloClient/user/user.service";
import Error from "../../components/Error";
import {STYLE_CONSTANTS} from "../../constants";
import {setData} from '../../services/localStorage.service'
import {UserAuthContext} from "../../UserAuthContext";
import {Link} from "react-router-dom";

const Login = (props) => {
	const [email, setEmail] = useState({
		value: '',
		isError: false
	});
	const [password, setPassword] = useState({
		value: '',
		isError: false
	});
	const [loginSuccess, setLoginSuccess] = useState('default');
	const [isLoggedIn, setIsLoggedIn] = useContext(UserAuthContext);
	const handleChange = (event) => {
		const {
			target: {
				name,
				value
			}
		} = event;
		name === 'email' && setEmail({...email, value});
		name === 'password' && setPassword({...password, value});
	};
	const handleError = (field, isError) => {
		if (field === 'email') setEmail({...email, isError});
		if (field === 'password') setPassword({...password, isError})
	};
	const handleSubmit = () => {
		loginUser(email.value, password.value)
			.then(response => {
				if (response.data.isVerified) {
					setLoginSuccess(true);
					setData(
						'user',
						JSON.stringify({
							name: response.data.name,
							email: response.data.email,
							token: response.data.token
						})
					);
					setIsLoggedIn(true);

				} else {
					setLoginSuccess(false);
				}
			})
	};
	return (
		<div className="login-container">
			<div className="login-logo-container">
				<Logo
					size={3}
				/>
				<h2>
					Todoist
				</h2>
			</div>
			<div className="loginFields-container">
				<div className="header">
					Login
				</div>
				{
					!loginSuccess &&
					<Error
						message={"email/password not valid"}
						styles={
							{
								backgroundColor: `rgba(255, 0, 0, 0.5)`,
								color: 'white',
								padding: '10px 0',
								borderRadius: `${STYLE_CONSTANTS.BORDER_RADIUS}`,
								border: 'thin solid red',
								fontSize: '17px'
							}
						}
					/>
				}
				<InputFields>
					<InputEmail
						id={"email"}
						name={"email"}
						placeholder={"Email"}
						value={email.value}
						handleChange={handleChange}
						required={true}
						handleError={handleError}
					/>
					<InputPassword
						id={"password"}
						name={"password"}
						placeholder={"Password"}
						value={password.value}
						handleChange={handleChange}
						required={true}
						handleError={handleError}
					/>

					<InputSubmit
						text={"Login"}
						handleClick={handleSubmit}
						isDisabled={email.isError || password.isError}
					/>
				</InputFields>
				<div className="signup">
					<p>
						New User? <Link
							to={"/signup"}
						>
							Sign Up here
						</Link>
					</p>
				</div>
			</div>
		</div>
	)
};

Login.propTypes = {};

export default Login