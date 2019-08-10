import React, {useState} from 'react';
import './styles.scss';
import PropTypes from 'prop-types';
import {library} from "@fortawesome/fontawesome-svg-core";
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import {STYLE_CONSTANTS} from "../../constants";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

library.add(faArrowLeft);

const BackArrow = (props) => {
	const {
		size,
		primaryColor,
		secondaryColor,
		handleClick
	} = props;
	const [color, setColor] = useState(primaryColor);
	return (
		<div className="back-arrow">
			<FontAwesomeIcon
				size={`${size}x`}
				icon={"arrow-left"}
				color={color}
				onMouseOver={() => setColor(secondaryColor)}
				onMouseOut={() => setColor(primaryColor)}
				onClick={handleClick}
			/>
		</div>
	)
};

BackArrow.propTypes = {
	size: PropTypes.number.isRequired,
	primaryColor: PropTypes.string,
	secondaryColor: PropTypes.string,
	handleClick: PropTypes.func.isRequired
};
BackArrow.defaultProps = {
	size: 2,
	primaryColor: STYLE_CONSTANTS.BLACK_COLOR,
	secondaryColor: STYLE_CONSTANTS.SECONDARY_COLOR.DEFAULT,
	handleClick: () => console.log('BackArrow handleClick')
};

export default BackArrow