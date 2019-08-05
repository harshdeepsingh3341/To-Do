import React, {useState} from 'react';
import './styles.scss';
import {InputEmail, InputFields, InputPassword, InputSubmit} from '../../components/InputFields'
import Logo from "../../components/Logo";

const Login = (props) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [isEmailError, setIsEmailError] = useState(false);
	const [isPasswordError, setIsPasswordError] = useState(false);
	const handleChange = (event) => {
		const {
			target: {
				name,
				value
			}
		} = event;
		name === 'email' && setEmail(value);
		name === 'password' && setPassword(value);
	};
	const handleError = (field, isError) => {
		if (field === 'email') setIsEmailError(isError);
		if (field === 'password') setIsPasswordError(isError);
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
				<InputFields>
					<InputEmail
						id={"email"}
						name={"email"}
						placeholder={"Email"}
						value={email}
						handleChange={handleChange}
						required={true}
						handleError={handleError}
					/>
					<InputPassword
						id={"password"}
						name={"password"}
						placeholder={"Password"}
						value={password}
						handleChange={handleChange}
						required={true}
						handleError={handleError}
					/>

					<InputSubmit
						text={"Login"}
						isDisabled={isEmailError || isPasswordError}
					/>
				</InputFields>
			</div>

		</div>
	)
};

Login.propTypes = {};

export default Login