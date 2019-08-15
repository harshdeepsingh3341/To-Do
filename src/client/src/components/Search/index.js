import React, {useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Search = (props) => {
	const [search, setSearch] = useState('');
	const handleChange = ({
		                      target: {
			                      value
		                      }
	                      }) => {
		setSearch(value);
	};
	return (
		<div className="search-container">
			<form className="search-form">
				<label
					className="search-icon"
					htmlFor={"search"}
				>
					<FontAwesomeIcon
						icon={"search"}
						color={"white"}
						style={
							{
								verticalAlign: 'top'
							}
						}
					/>
				</label>
				<input
					type="text"
					name="search"
					id="search"
					value={search}
					onChange={handleChange}
					className="search-input"
					placeholder="Search..."
				/>
			</form>
		</div>
	)
};

Search.propTypes = {};

export default Search