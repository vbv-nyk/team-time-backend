import gql from "graphql-tag";
// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = gql `
  type Team {
    name: String
    desc: String
    reqs: [String]
    id: ID
  }

  type Query {
    teams: [Team]
    teamById(id: String): Team
  }

  type Mutation {
    createTeam(name: String, desc: String, reqs: [String], id: ID): Team
  }
`;
export default typeDefs;
