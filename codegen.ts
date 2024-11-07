import { CodegenConfig } from "@graphql-codegen/cli";
import { loadEnvConfig } from "@next/env";

loadEnvConfig(process.cwd());

/**
 * @see https://the-guild.dev/graphql/codegen/docs/guides/react-vue#installation
 * @see https://github.com/dotansimha/graphql-code-generator/issues/1757#issuecomment-1436039415
 */
const config: CodegenConfig = {
  overwrite: true,
  schema: [
    {
      [`${process.env.CONTENTFUL_GRAPHQL_ENDPOINT}/${process.env.CONTENTFUL_ENVIRONMENT}`]:
        {
          headers: {
            Authorization: `Bearer ${process.env.CONTENTFUL_PREVIEW_TOKEN}`,
          },
        },
    },
  ],
  documents: "src/**/*.{ts,tsx}",
  ignoreNoDocuments: true, // for better experience with the watcher

  generates: {
    "src/app/generated/": {
      preset: "client",
      plugins: [],
      presetConfig: {
        fragmentMasking: false,
      },
      config: {
        /**
         * @see https://the-guild.dev/graphql/codegen/plugins/typescript/typescript#nonoptionaltypename
         */
        nonOptionalTypename: true,
      },
    },
  },
};

export default config;
