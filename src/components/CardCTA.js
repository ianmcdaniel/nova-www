import React from 'react'
import { Query } from 'react-apollo'
import { gql } from 'apollo-boost'

export default ({ slug }) => (
  <Query
    variables={{ slug }}
    query={gql`
      query ($slug: String!) {
        creditCard(slug: $slug) {
          name
					image_url
        }
      }
    `}

  >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>
      if (error) return <p>Error :(</p>

			const { creditCard } = data;
			return (
				<>
					<h1>{creditCard.name}</h1>
          <p>{creditCard.image_url}</p>
					xx<img src={creditCard.image_url} alt={creditCard.name} />xx
				</>
			);
    }}
  </Query>
)
