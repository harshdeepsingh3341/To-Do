import {ApolloClient, HttpLink, InMemoryCache} from 'apollo-boost';
import gql from 'graphql-tag';
import {API_ENDPONT} from "../../../constants";
import {authLink} from '../index.js';

const client = new ApolloClient(
	{
		link: authLink.concat(
			new HttpLink(
				{
					headers: {
						somethingNew: 'somethingNew'
					},
					uri: `${API_ENDPONT}/user`
				}
			)
		),
		cache: new InMemoryCache()
	}
);

export const loginUser = async (email, password) => {
	const client = new ApolloClient(
		{
			link: new HttpLink(
				{
					uri: `${API_ENDPONT}/user/login`
				}
			),
			cache: new InMemoryCache()
		}
	);
	console.log('loginUser', client)
	const query = gql`
        {
            loginUser(email: "${email}", password: "${password}"){
                status
                message
                data
            }
        }
	`
	const {data} = await client.query({query});
	console.log('loginUser ', data);
	return {
		...data.loginUser,
		data: JSON.parse(data.loginUser.data)
	}
};