const config = {
    schema: "schema.graphql",
    generates: {
        "./resolvers-types.ts": {
            config: {
                useIndexSignature: true,
            },
            plugins: ["typescript", "typescript-resolvers"],
        },
    },
};
export default config;
