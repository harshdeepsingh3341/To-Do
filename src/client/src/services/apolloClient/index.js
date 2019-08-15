import {setContext} from "apollo-link-context";
import {getData} from "../localStorage.service";

export const authLink = setContext((_, {headers}) => {
	const localStorageData = JSON.parse(getData('user'));
	return {
		headers: {
			...headers,
			authorization: localStorageData && localStorageData.token ?
				`Bearer ${localStorageData.token}` :
				''
		}
	}
});