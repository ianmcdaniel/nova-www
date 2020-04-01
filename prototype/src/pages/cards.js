import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';

import Layout from "../components/layout"

class CardsIndex extends React.Component {
  render() {
    return (
      <Layout location={this.props.location} >
        <div style={{ background: '#fff' }}>
          <Helmet title="Credit Cards" />
          <div className="main-hero">
            <h1>Credit Cards for Newcomers</h1>
            <p>These credit cards are options for newcomers to the United States</p>
          </div>
          <div className="wrapper">
            <h2 className="section-headline">All Cards</h2>
            <Query
              query={gql`
                {
                  creditCards(country: "CAN") {
                    nodes {
                      name
                      bullets
                      image_url
                    }
                  }
                }
              `}
            >
              {({ loading, error, data }) => {
                if (loading) return <p>Loading...</p>
                if (error) return <p>Error :(</p>

          			const { nodes } = data.creditCards;
          			return (
                  <ul className="card-list">
                    {nodes.map(card => {
                      return (
                        <li className="card" key={card.slug}>
                          <div className="card-image">
                            <img src={card.image_url} className="card-img" />
                          </div>
                          <div className="card-details">
                            <h3>{card.name}</h3>
                            <p>{card.bullets[0]}</p>
                          </div>
                          <div>
                            <button>Apply</button>
                          </div>
                        </li>
                      )
                    })}
                  </ul>
          			);
              }}
            </Query>
          </div>
        </div>
      </Layout>
    )
  }
}

export default CardsIndex
