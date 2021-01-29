const { gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    "Query to get tracks array from the homepage grid"
    tracksForHome: [Track!]!
  }

  "A track is a group of modules that teaches about a specific topic"
  type Track {
    id: ID!
    title: String!
    author:Author!
    thumbnail: String
    length: Int 
    modulesCount: Int
  }

  "Author of a complete Track"
  type Author {
    id: ID!
    name: String!
    photo: String
  }
`
module.exports = typeDefs;