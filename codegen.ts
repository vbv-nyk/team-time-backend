import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "./src/schema.graphql", // Update the schema path to point to src/schema.graphql
  generates: {
    "./resolvers-types.ts": {
      config: {
        input: {
          // schemaSearchPaths: ["./src/**/*.graphql"], // Update the schemaSearchPaths pattern to include ./src
          // operationSearchPaths: ["./src/**/*.graphql"], // Update the operationSearchPaths pattern to include ./src
        },
        useIndexSignature: true,
      },
      plugins: ["typescript", "typescript-resolvers"],
    },
  },
};

export default config;
