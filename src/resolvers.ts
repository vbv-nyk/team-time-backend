// Resolvers define how to fetch the types defined in your schema.

import { GraphQLArgs } from "graphql";
import teams from "./database.js";

// This resolver retrieves books from the "books" array above.
const resolvers = {
  Query: {
    teams: () => teams,
    teamById: (parent: any, args: any) => {
      const { id } = args; // Extracting the 'id' argument from the 'args' object
      // Retrieve the team with the specified id from the 'teams' array
      const team = teams.find((team) => team.id === id);
      return team;
    },
  },

  Mutation: {
    createTeam: (parent: any, args: any) => {
      teams.push(args);
      return args;
    },
  },
};

export default resolvers;
