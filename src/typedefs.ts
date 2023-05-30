import { gql } from "graphql-tag";

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.

const typeDefs = gql`
  type team {
    name: String
    desc: String
    reqs: [String]
    id: Int
  }

  type Query {
    teams: [team]
    teamById(id: Int): team
  }
`;

export default typeDefs;
