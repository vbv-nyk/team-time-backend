// Resolvers define how to fetch the types defined in your schema.
import teams from "./database.js";
// This resolver retrieves books from the "books" array above.
const resolvers = {
    Query: {
        teams: () => teams,
        teamById: (parent, args) => {
            const { id } = args; // Extracting the 'id' argument from the 'args' object
            // Retrieve the team with the specified id from the 'teams' array
            const team = teams.find((team) => team.id === id);
            return team;
        },
    },
    Mutation: {
        createTeam: (parent, args) => {
            teams.push(args);
            return args;
        },
    },
};
export default resolvers;
