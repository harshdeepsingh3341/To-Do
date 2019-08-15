import React, {useEffect, useState} from 'react';
import './styles.scss';
import PropTypes from 'prop-types';
import Error from "../Error";
import {ERROR_MESSAGES} from "../../constants";

//Input type Text
export const InputText = (props) => {
	const {
		name,
		id,
		handleChange: handleChangeFromProps,
		placeholder,
		value,
		required,
		handleError,
		styles
	} = props;
	const [isError, setIsError] = useState(false);
	const [errorMessage, setErrorMessage] = useState('');
	useEffect(
		() => required && handleError(name, isError),
		[isError]
	);
	const handleChange = (event) => {
		const {
			target: {
				value
			}
		} = event;
		if (required) {
			if (value === '') {
				setIsError(true);
				setErrorMessage(ERROR_MESSAGES.REQUIRED_FIELD_EMPTY)
			} else {
				setIsError(false);
				setErrorMessage('');
			}
		}
		handleChangeFromProps(event);
	};
	return (
		<div className="field-container">
			<input
				type="text"
				className="inputText"
				name={name}
				id={id}
				onChange={handleChange}
				placeholder={`${placeholder}${
					required ?
						'*' :
						''
				}`}
				value={value}
				style={
					{
						...styles,
						borderBottomColor: isError ?
							'red' :
							'',
						color: isError ?
							'red' :
							''
					}
				}
			/>
			{
				required &&
				isError &&
				<Error
					message={errorMessage}
					styles={
						{
							textAlign: 'right'
						}
					}
				/>
			}
		</div>
	)
};
InputText.propTypes = {
	name: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
	placeholder: PropTypes.string.isRequired,
	value: PropTypes.string,
	handleChange: PropTypes.func,
	required: PropTypes.bool,
	handleError: PropTypes.func,
	styles: PropTypes.object
};
InputText.defaultProps = {
	name: 'inputText',
	id: 'inputText',
	placeholder: 'Input Type Text',
	value: '',
	handleChange: () => console.log('Input Type Text'),
	required: false,
	handleError: () => console.log('Input Type Text Error'),
	styles: {}
};

//Input type Email
export const InputEmail = (props) => {
	const {
		name,
		id,
		placeholder,
		value,
		handleChange: handleChangeFromProps,
		required,
		handleError,
		styles
	} = props;
	const [isError, setIsError] = useState(false);
	const [errorMessage, setErrorMessage] = useState('');
	/*
	this.state = {
		isError: false,
		errorMessage: ''
	}
	*/
	useEffect(
		() => handleError(name, isError),
		[isError]
	);
	const handleChange = (event) => {
		const {
			target: {
				value
			}
		} = event;
		if (required && value === '') {
			setIsError(true);
			setErrorMessage(ERROR_MESSAGES.REQUIRED_FIELD_EMPTY);
		} else {
			if (value.match(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)) {
				setIsError(false);
				setErrorMessage('');
			} else {
				setIsError(true);
				setErrorMessage(ERROR_MESSAGES.EMAIL_NOT_FORMATTED);
			}
		}
		handleChangeFromProps(event);
	};
	return (
		<div className="field-container">
			<input
				type="email"
				className={"inputEmail"}
				name={name}
				id={id}
				placeholder={`${placeholder}${
					required ?
						'*' :
						''
				}`}
				value={value}
				onChange={handleChange}
				style={
					{
						...styles,
						borderBottomColor: isError ?
							'red' :
							'',
						color: isError ?
							'red' :
							''
					}
				}
			/>
			{
				required &&
				isError &&
				<Error
					message={errorMessage}
					styles={
						{
							textAlign: 'right'
						}
					}
				/>
			}
		</div>
	)
};
InputEmail.propTypes = {
	name: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
	placeholder: PropTypes.string.isRequired,
	value: PropTypes.string,
	handleChange: PropTypes.func,
	required: PropTypes.bool,
	handleError: PropTypes.func,
	styles: PropTypes.object
};
InputEmail.defaultProps = {
	name: 'inputEmail',
	id: 'inputEmail',
	placeholder: 'Input Type Email',
	value: '',
	handleChange: () => console.log('Input Type Email'),
	required: false,
	handleError: () => console.log('Input Type Email Error'),
	styles: {}
};

//Input type Password
export const InputPassword = (props) => {
	const {
		name,
		id,
		placeholder,
		handleChange: handleChangeFromProps,
		required,
		value,
		handleError,
		styles,
		error
	} = props;
	const [isError, setIsError] = useState(error.isError);
	const [errorMessage, setErrorMessage] = useState(error.errorMessage);
	useEffect(
		() => required && handleError(name, isError),
		[isError]
	);
	useEffect(
		() => {
			if (error.isError !== isError) {
				setIsError(error.isError);
				setErrorMessage(error.errorMessage);
			}
		},
		[error]
	)
	const handleChange = (event) => {
		const {
			target: {
				value
			}
		} = event;
		if (required) {
			if (value === '') {
				required && setIsError(true);
				required && setErrorMessage(ERROR_MESSAGES.REQUIRED_FIELD_EMPTY)
			} else {
				required && setIsError(false);
				required && setErrorMessage('');
			}
		}

		handleChangeFromProps(event);
	};
	return (
		<div className="field-container">
			<input
				type="password"
				className="inputPassword"
				name={name}
				id={id}
				placeholder={`${placeholder}${
					required ?
						'*' :
						''
				}`}
				required={required}
				value={value}
				style={
					{
						...styles,
						borderBottomColor: isError ?
							'red' :
							'',
						color: isError ?
							'red' :
							''
					}
				}
				onChange={handleChange}
			/>
			{
				required &&
				isError &&
				<Error
					message={errorMessage}
					styles={
						{
							textAlign: 'right'
						}
					}
				/>
			}
		</div>
	)
};
InputPassword.propTypes = {
	name: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
	placeholder: PropTypes.string.isRequired,
	value: PropTypes.string,
	handleChange: PropTypes.func,
	required: PropTypes.bool,
	handleError: PropTypes.func,
	styles: PropTypes.object,
	error: PropTypes.shape(
		{
			isError: PropTypes.bool.isRequired,
			errorMessage: PropTypes.string.isRequired
		}
	)
};
InputPassword.defaultProps = {
	name: 'inputPassword',
	id: 'inputPassword',
	placeholder: 'Input Type Password',
	value: '',
	handleChange: () => console.log('Input Type Password'),
	required: false,
	handleError: () => console.log('Input Type Password Error'),
	styles: {},
	error: {
		isError: false,
		errorMessage: ''
	}
};

//Input type Submit
export const InputSubmit = (props) => {
	const {
		text,
		handleClick,
		required,
		isDisabled,
		styles
	} = props;
	return (
		<div className="field-container">
			<button
				type="submit"
				className="inputSubmit"
				onClick={handleClick}
				style={
					{
						...styles,
						opacity: isDisabled ?
							0.4 :
							1,
						pointerEvents: isDisabled ?
							'none' :
							''
					}
				}
			>
				{
					text
				}
			</button>
		</div>

	)
};
InputSubmit.propTypes = {
	text: PropTypes.string.isRequired,
	handleClick: PropTypes.func,
	isDisabled: PropTypes.bool,
	styles: PropTypes.object
};
InputSubmit.defaultProps = {
	text: 'Input Type Submit',
	handleClick: () => console.log('Input Type Submit'),
	isDisabled: false,
	styles: {}
};

//Input Fields Component
export const InputFields = (props) => {
	return (
		<div className="inputFields-container">
			{
				props.children
			}
		</div>
	)
};
InputFields.propTypes = {};

/*
*
* <InputFields>
	<InputText
	 name={'sddfs'}
	 id={'sfsaasf'}
	/>
</InputFields>
* */