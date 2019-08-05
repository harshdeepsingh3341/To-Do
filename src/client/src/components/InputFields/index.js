import React, {useEffect, useRef, useState} from 'react';
import './styles.scss';
import PropTypes from 'prop-types';

//Input type Text
export const InputText = (props) => {
	const {
		name,
		id,
		handleChange,
		placeholder,
		value,
		required
	} = props;
	return (
		<React.Fragment>
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
			/>
		</React.Fragment>

	)
};
InputText.propTypes = {
	name: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
	placeholder: PropTypes.string.isRequired,
	value: PropTypes.string,
	handleChange: PropTypes.func,
	required: PropTypes.bool
};
InputText.defaultProps = {
	name: 'inputText',
	id: 'inputText',
	placeholder: 'Input Type Text',
	value: '',
	handleChange: () => console.log('Input Type Text'),
	required: false
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
		handleError
	} = props;
	const [isError, setIsError] = useState(false);
	const [errorMessage, setErrorMessage] = useState('');
	/*
	this.state = {
		isError: false,
		errorMessage: ''
	}
	*/
	useEffect(() => handleError('email', isError));
	const handleChange = (event) => {
		const {
			target: {
				value
			}
		} = event;
		if (value === '') {
			setIsError(true);
			setErrorMessage('required field');
		} else {
			if (value.match(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)) {
				setIsError(false);
				setErrorMessage('');
			} else {
				setIsError(true);
				setErrorMessage('enter proper email id');
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
				isError &&
				<span className="error">
				{
					errorMessage
				}
				</span>
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
	handleError: PropTypes.func
};
InputEmail.defaultProps = {
	name: 'inputEmail',
	id: 'inputEmail',
	placeholder: 'Input Type Email',
	value: '',
	handleChange: () => console.log('Input Type Email'),
	required: false,
	handleError: () => console.log('Input Type Email Error')
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
		handleError
	} = props;
	const [isError, setIsError] = useState(false);
	const [errorMessage, setErrorMessage] = useState('');
	useEffect(() => handleError('password', isError));
	const handleChange = (event) => {
		const {
			target: {
				value
			}
		} = event;
		if (value === '') {
			setIsError(true);
			setErrorMessage('required field')
		} else {
			setIsError(false);
			setErrorMessage('');
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
				isError &&
				<span className="error">
					{
						errorMessage
					}
				</span>
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
	handleError: PropTypes.func
};
InputText.defaultProps = {
	name: 'inputPassword',
	id: 'inputPassword',
	placeholder: 'Input Type Password',
	value: '',
	handleChange: () => console.log('Input Type Password'),
	required: false,
	handleError: () => console.log('Input Type Password Error')
};

//Input type Submit
export const InputSubmit = (props) => {
	const {
		text,
		handleClick,
		required,
		isDisabled
	} = props;
	return (
		<div className="field-container">
			<button
				type="submit"
				className="inputSubmit"
				onClick={handleClick}
				style={
					{
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
	isDisabled: PropTypes.bool
};
InputSubmit.defaultProps = {
	text: 'Input Type Submit',
	handleClick: () => console.log('Input Type Submit'),
	isDisabled: false
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