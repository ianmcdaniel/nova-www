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
          slug
          bullets
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
        <div className="card inline" key={creditCard.slug}>
          <div className="card-image">
            <img src={creditCard.image_url} className="card-img" />
          </div>
          <div className="card-details">
            <h3>{creditCard.name}</h3>
            <p>{creditCard.bullets[0]}</p>
          </div>
          <div>
            <button>Apply</button>
          </div>
        </div>
			);
    }}
  </Query>
)
