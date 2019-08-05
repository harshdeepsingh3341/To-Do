import React from 'react';
import './styles.scss';
import {Link} from "react-router-dom";
import PropTypes from 'prop-types';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Logo = (props) => {
	const {
		size
	} = props;
	return (
		<div className="logo-container">
			<Link
				to={'/'}
			>
				<FontAwesomeIcon
					icon={"tasks"}
					size={`${size}x`}
				/>
			</Link>
		</div>
	)
};
Logo.propTypes = {
	size: PropTypes.number.isRequired
};
Logo.defaultProps = {
	size: 1
};

export default Logo