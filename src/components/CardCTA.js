import React from 'react'
import { Query } from 'react-apollo'
import { gql } from 'apollo-boost'
import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
  uri: 'http://localhost:8002/___graphql'
});


export default ({ slug }) => (
  <Query
		client={client}
    query={gql`
      {
        nova {
          creditCard(slug: "the-platinum-card-from-american-express") {
            name
						image_url
          }
        }
      }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>
      if (error) return <p>Error :(</p>

			const { creditCard } = data.nova;
			return (
				<>
					<h1>{creditCard.name}</h1>
					<img src={creditCard.image_url} />
				</>
			);
    }}
  </Query>
)
