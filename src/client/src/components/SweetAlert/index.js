import React from 'react';
import PropTypes from 'prop-types';
import Swal from "sweetalert2";
import {COPYRIGHT_TEXT, SWEET_ALERT_TYPES} from "../../constants";

const SweetAlert = (props) => {
	const {
		type,
		title,
		text,
		html,
		toast,
		onSuccess,
		onFailure
	} = props;
	Swal.fire({
		type,
		title,
		text,
		html,
		footer: COPYRIGHT_TEXT,
		toast
	})
		.then(result => {
			onSuccess();
		})
		.catch(err => {
			onFailure();
		});
	return (
		<></>
	);
};

SweetAlert.propTypes = {
	type: PropTypes.oneOf(SWEET_ALERT_TYPES).isRequired,
	title: PropTypes.string.isRequired,
	text: PropTypes.string,
	html: PropTypes.string,
	toast:PropTypes.bool,
	onSuccess: PropTypes.func.isRequired,
	onFailure: PropTypes.func,
};

SweetAlert.defaultProps = {
	type: "success",
	title: "Sweet Alert",
	text: undefined,
	html: undefined,
	toast: false,
	onSuccess: () => console.log('Sweet Alert onSuccess'),
	onFailure: () => console.log('Sweet Alert onFailure')
};

export default SweetAlert