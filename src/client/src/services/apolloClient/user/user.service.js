import {ApolloClient, HttpLink, InMemoryCache} from 'apollo-boost';
import gql from 'graphql-tag';
import {API_ENDPONT} from "../../../constants";

const client = new ApolloClient(
	{
		link: new HttpLink(
			{
				uri: `${API_ENDPONT}/user`
			}
		),
		cache: new InMemoryCache()
	}
);

export const loginUser = async (email, password) => {
	const query = gql`
        {
            loginUser(email: "${email}", password: "${password}"){
	            status
	            message,
	            data
            }
        }
	`
	console.log('loginUser', query);
	const {data} = await client.query({query});
	console.log('loginUser ', data);
};