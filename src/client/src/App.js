import React, {useContext} from 'react';
import './App.scss';
import {BrowserRouter} from "react-router-dom";
import UserAuthContextHoc, {UserAuthContext} from "./UserAuthContext";
import {library} from '@fortawesome/fontawesome-svg-core'
import {faTasks} from "@fortawesome/free-solid-svg-icons";
import Header from "./containerComponents/Header";
import SideBar from "./containerComponents/SideBar";
import AppRouter from "./App.router";

library.add(
	faTasks
);

const App = (props) => {
	const [isLoggedIn] = useContext(UserAuthContext);
	console.log('app', isLoggedIn);
	return (
		<BrowserRouter>
			{
				isLoggedIn && <Header/>
			}
			<div className="app-container">
				{
					isLoggedIn && <SideBar/>
				}
				<AppRouter/>
			</div>

		</BrowserRouter>

	);
};

export default UserAuthContextHoc(App);
