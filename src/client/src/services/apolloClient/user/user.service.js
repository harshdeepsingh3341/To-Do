import {ApolloClient, HttpLink, InMemoryCache} from 'apollo-boost';
import gql from 'graphql-tag';
import {API_ENDPONT} from "../../../constants";
import {authLink} from '../index.js';

const client = new ApolloClient(
	{
		link: authLink.concat(
			new HttpLink(
				{
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
	const query = gql`
        {
            loginUser(
                email: "${email}"
                password: "${password}"
            ){
                status
                message
                data
            }
        }
	`;
	const {data} = await client.query({query});
	console.log('loginUser ', data);
	return {
		...data.loginUser,
		data: JSON.parse(data.loginUser.data)
	}
};

export const signupUser = async (name, email, password) => {
	const client = new ApolloClient(
		{
			link: new HttpLink(
				{
					uri: `${API_ENDPONT}/user/signup`
				}
			),
			cache: new InMemoryCache()
		}
	);
	const query = gql`
        mutation SignupUser{
            signupUser(
                name:"${name}"
                email: "${email}"
                password: "${password}"
            ){
                status
                message
                data
            }
        }
	`;
	const {data} = await client.mutate({mutation: query});
	console.log('sign up server ', {
		...data.signupUser,
		data: JSON.parse(data.signupUser.data)
	});
	return {
		...data.signupUser,
		data: JSON.parse(data.signupUser.data)
	}
};