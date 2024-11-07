import request, { Variables } from "graphql-request";
import { type TypedDocumentNode } from "@graphql-typed-document-node/core";
import NodeCache from "node-cache";

const hour = 60 * 60;
const cache = new NodeCache({ stdTTL: hour }); // Cache TTL in seconds

export const fetcher = async <
  TResult,
  TVariables extends Variables | undefined
>(
  document: TypedDocumentNode<TResult, TVariables>,
  ...[variables]: TVariables extends Record<string, never> ? [] : [TVariables]
): Promise<TResult> => {
  const cacheKey = JSON.stringify({ document, variables });

  // Check cache
  const cachedData = cache.get<TResult>(cacheKey);
  if (cachedData) {
    return cachedData;
  }

  // Fetch from Contentful
  const result = await request(
    `${process.env.CONTENTFUL_GRAPHQL_ENDPOINT}/${process.env.CONTENTFUL_ENVIRONMENT}`,
    document,
    variables,
    {
      Authorization: `Bearer ${
        variables?.preview
          ? process.env.CONTENTFUL_PREVIEW_TOKEN
          : process.env.CONTENTFUL_DELIVERY_TOKEN
      }`,
    }
  );

  // Cache the result
  cache.set(cacheKey, result);

  return result;
};

// import request, { Variables } from "graphql-request";
// import { type TypedDocumentNode } from "@graphql-typed-document-node/core";

// export const fetcher = <TResult, TVariables extends Variables | undefined>(
//   document: TypedDocumentNode<TResult, TVariables>,
//   ...[variables]: TVariables extends Record<string, never> ? [] : [TVariables]
// ) =>
//   request(
//     `${process.env.CONTENTFUL_GRAPHQL_ENDPOINT}/${process.env.CONTENTFUL_ENVIRONMENT}`,
//     document,
//     variables,
//     {
//       Authorization: `Bearer ${
//         variables?.preview
//           ? process.env.CONTENTFUL_PREVIEW_TOKEN
//           : process.env.CONTENTFUL_DELIVERY_TOKEN
//       }`,
//     }
//   );
