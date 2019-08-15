import React, {useContext} from 'react';
import {Redirect, Route} from "react-router-dom";
import Signup from "./containerComponents/Signup";
import {isToken, removeToken} from "./services/localStorage.service";
import PropTypes from 'prop-types';
import Login from "./containerComponents/Login";
import {UserAuthContext} from "./UserAuthContext";

const AppRouter = (props) => {
	const [isLoggedIn, setIsLoggedIn] = useContext(UserAuthContext);
	return (
		<>
			<TodoRoute
				path={"/signup"}
				privateComponent={Signup}
				fallbackRoute={"/"}
				condition={
					() => !isToken('user')
				}
			/>

			<TodoRoute
				exact
				path={"/"}
				privateComponent={() => <div>hello</div>}
				fallbackComponent={Login}
				condition={
					() => isToken('user')
				}
			/>

			<TodoRoute
				path={"/logout"}
				privateComponent={
					(props) => {
						removeToken('user');
						setIsLoggedIn(false);
						return (
							<Redirect
								to={
									{
										pathname: '/'
									}
								}
							/>
						)
					}
				}
				fallbackRoute={"/"}
				condition={
					() => isToken('user')
				}
			/>
		</>
	)
};

const TodoRoute = ({
	                   privateComponent: PrivateComponent,
	                   fallbackComponent: FallbackComponent,
	                   fallbackRoute,
	                   condition,
	                   ...restProps
                   }) => (
	<Route
		{
			...restProps
		}
		render={
			(props) => {
				return condition() ?
					<PrivateComponent
						{
							...props
						}
					/> :
					FallbackComponent ?
						<FallbackComponent
							{
								...props
							}
						/> :
						<Redirect
							to={
								{
									pathname: fallbackRoute
								}
							}
						/>
			}
		}
	/>
);
TodoRoute.propTypes = {
	exact: PropTypes.any,
	path: PropTypes.string.isRequired,
	privateComponent: PropTypes.func.isRequired,
	fallbackComponent: PropTypes.func,
	fallbackRoute: PropTypes.string,
	condition: PropTypes.func.isRequired
};

AppRouter.propTypes = {};

export default AppRouter