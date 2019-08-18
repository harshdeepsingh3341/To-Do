import React, {useEffect, useState} from 'react';
import './styles.scss';
import Logo from "../../components/Logo";
import BackArrow from "../../components/BackArrow";
import {InputEmail, InputFields, InputPassword, InputSubmit, InputText} from "../../components/InputFields";
import {ERROR_MESSAGES} from "../../constants";
import {signupUser} from "../../services/apolloClient/user/user.service";
import SuccessAlert from "../../components/SuccessSweetAlert";

const Signup = (props) => {
	const [name, setName] = useState({
			value: '',
			isError: false
		}
	);
	const [email, setEmail] = useState({
		value: '',
		isError: false
	});
	const [password, setPassword] = useState({
		value: '',
		isError: false,
		isVerified: true
	});
	const [rePassword, setRePassword] = useState({
		value: '',
		isError: false
	});
	const [signUpStatus, setSignUpStatus] = useState({
		signUpSuccess: false
	});

	useEffect(
		() => {
			if (rePassword.value === password.value) {
				setPassword({...password, isVerified: true, isError: password.isError || false});
			} else {
				setPassword({...password, isVerified: false, isError: password.isError || true});
			}
		},
		[password.value, rePassword.value, password.isError, rePassword.isError]
	);

	const handleSubmit = () => {
		signupUser(
			name.value,
			email.value,
			password.value
		)
			.then(response => {
				setSignUpStatus({
					signUpSuccess: response.data.signUpUser
				});
			})
	};

	const handleChange = ({
		                      target: {
			                      name: eventName,
			                      value
		                      }
	                      }) => {
		eventName === 'name' && setName({...name, value});
		eventName === 'email' && setEmail({...email, value});
		eventName === 'password' && setPassword({...password, value});
		eventName === 'confirmPassword' && setRePassword({...rePassword, value});
	};

	const handleError = (field, isError) => {
		field === 'name' && setName({...name, isError});
		field === 'email' && setEmail({...email, isError});
		field === 'password' && setPassword({...password, isError})
	};

	return (
		<div className="signup-container">
			{
				signUpStatus.signUpSuccess &&
				<SuccessAlert
					title={"Sign Up Successful"}
					onSuccess={() => props.history.push("/")}
				/>
			}
			<div className="signup-logo-container">
				<Logo
					size={3}
				/>
				<h2>
					Todoist
				</h2>
			</div>
			<div className="signupFields-container">
				<div className="header">
					<div className="back-arrow-container">
						<BackArrow
							size={1}
							handleClick={() => props.history.push('/')}
						/>
					</div>
					Signup
				</div>
				<InputFields>
					<InputText
						id={"name"}
						name={"name"}
						handleChange={handleChange}
						required={true}
						placeholder={"Name"}
						value={name.value}
						handleError={handleError}
						styles={
							{
								textTransform: "capitalize"
							}
						}
					/>
					<InputEmail
						id={"email"}
						name={"email"}
						placeholder={"Email"}
						required={true}
						value={email.value}
						handleChange={handleChange}
						handleError={handleError}
					/>
					<InputPassword
						id={"password"}
						name={"password"}
						placeholder={"Password"}
						required={true}
						value={password.value}
						handleChange={handleChange}
						handleError={handleError}
						error={
							{
								isError: !password.isVerified,
								errorMessage: !password.isVerified ? ERROR_MESSAGES.VERIFY_PASSWORD : ''
							}
						}
					/>
					<InputPassword
						id={"confirmPassword"}
						name={"confirmPassword"}
						placeholder={"Re-enter the password"}
						value={rePassword.value}
						handleChange={handleChange}
						handleError={handleError}
						required={true}
						error={
							{
								isError: !password.isVerified,
								errorMessage: !password.isVerified ? ERROR_MESSAGES.VERIFY_PASSWORD : ''
							}
						}
					/>
					<InputSubmit
						handleClick={handleSubmit}
						isDisabled={name.isError || email.isError || password.isError}
						text={"Sign Up"}
					/>
				</InputFields>
			</div>
		</div>
	)
};

Signup.propTypes = {};

export default Signup