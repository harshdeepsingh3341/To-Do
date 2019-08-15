import React, {useState} from 'react';
import {isToken} from "./services/localStorage.service";

export const UserAuthContext = React.createContext([{}, () => {}]);

export default (Component) => {
	return (props) => {
		const [isLoggedIn, setIsLoggedIn] = useState(isToken('user'));
		return (
			<UserAuthContext.Provider
				value={[isLoggedIn, setIsLoggedIn]}
			>
				<Component/>
			</UserAuthContext.Provider>
		)
	}
};