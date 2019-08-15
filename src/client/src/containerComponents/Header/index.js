import React from 'react';
import './styles.scss';
import {library} from "@fortawesome/fontawesome-svg-core";
import {faSearch} from '@fortawesome/free-solid-svg-icons'
import Search from "../../components/Search";
import Logo from "../../components/Logo";

library.add(
	faSearch
);

//header component
const Header = (props) => {
	return (
		<div className="header-container">
			<Logo
				size={2}
			/>
			<Search/>
		</div>
	)
};
Header.propTypes = {};

export default Header