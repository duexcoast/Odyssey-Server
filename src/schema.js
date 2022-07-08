import { gql } from 'apollo-server';

const typeDefs = gql`
  type Query {
    "Get tracks array for homepage grid."
    tracksForHome: [Track!]!
    "Return a specific track by id"
    track(id: ID!): Track
  }

  type Mutation {
    incrementTrackViews(id: ID!): IncrementTrackViewsResponse
  }
  "A track is a group of Modules that teaches about a specific topic"
  type Track {
    id: ID!
    "The track's title."
    title: String!
    "The track's main author"
    author: Author!
    "The track's main illustration to display in track card or track page detail"
    thumbnail: String
    "The track's approximate length to complete, in minutes"
    length: Int
    "Number of modules this track contains"
    modulesCount: Int
    "brief description of the track"
    description: String
    "The numnber of times a track has been viewed"
    numberOfViews: Int
    "The track's complete array of modulese"
    modules: [Module!]!
  }

  "Individual modules"
  type Module {
    id: ID!
    "The module's title"
    title: String!
    "Length of module, in minutes"
    length: Int
  }

  "Author of a complete Track or a Module"
  type Author {
    id: ID!
    "Author first and last name"
    name: String!
    "Author's profile picture url"
    photo: String
  }

  type IncrementTrackViewsResponse {
    code: Int!
    success: Boolean!
    message: String!
    track: Track
  }
`;

export default typeDefs;
