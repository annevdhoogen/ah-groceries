/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  fragment ProductFragment on Product {\n    sys {\n      id\n    }\n    title\n    ahId\n  }\n": types.ProductFragmentFragmentDoc,
    "\n  fragment RecipeFragment on Recipe {\n    sys {\n      id\n    }\n    title\n    subtitle\n    type\n    image {\n      sys {\n        id\n      }\n      url\n      width\n      height\n    }\n    book\n    pageNumber\n    days\n    cheatmeal\n    productsCollection(limit: 40) {\n      items {\n        ...ProductFragment\n      }\n    }\n    optionalProductsCollection(limit: 40) {\n      items {\n        ...ProductFragment\n      }\n    }\n    lemonAmount\n    limeAmount\n  }\n": types.RecipeFragmentFragmentDoc,
    "\n  query Products {\n    productCollection(limit: 100) {\n      items {\n        sys {\n          id\n        }\n        title\n        ahId\n      }\n    }\n  }\n": types.ProductsDocument,
    "\n  query Recipe($id: String!) {\n    recipe(id: $id) {\n      ...RecipeFragment\n    }\n  }\n": types.RecipeDocument,
    "\n  query RecipeOverview {\n    recipeCollection(limit: 100) {\n      items {\n        ...RecipeFragment\n      }\n    }\n  }\n": types.RecipeOverviewDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment ProductFragment on Product {\n    sys {\n      id\n    }\n    title\n    ahId\n  }\n"): (typeof documents)["\n  fragment ProductFragment on Product {\n    sys {\n      id\n    }\n    title\n    ahId\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment RecipeFragment on Recipe {\n    sys {\n      id\n    }\n    title\n    subtitle\n    type\n    image {\n      sys {\n        id\n      }\n      url\n      width\n      height\n    }\n    book\n    pageNumber\n    days\n    cheatmeal\n    productsCollection(limit: 40) {\n      items {\n        ...ProductFragment\n      }\n    }\n    optionalProductsCollection(limit: 40) {\n      items {\n        ...ProductFragment\n      }\n    }\n    lemonAmount\n    limeAmount\n  }\n"): (typeof documents)["\n  fragment RecipeFragment on Recipe {\n    sys {\n      id\n    }\n    title\n    subtitle\n    type\n    image {\n      sys {\n        id\n      }\n      url\n      width\n      height\n    }\n    book\n    pageNumber\n    days\n    cheatmeal\n    productsCollection(limit: 40) {\n      items {\n        ...ProductFragment\n      }\n    }\n    optionalProductsCollection(limit: 40) {\n      items {\n        ...ProductFragment\n      }\n    }\n    lemonAmount\n    limeAmount\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query Products {\n    productCollection(limit: 100) {\n      items {\n        sys {\n          id\n        }\n        title\n        ahId\n      }\n    }\n  }\n"): (typeof documents)["\n  query Products {\n    productCollection(limit: 100) {\n      items {\n        sys {\n          id\n        }\n        title\n        ahId\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query Recipe($id: String!) {\n    recipe(id: $id) {\n      ...RecipeFragment\n    }\n  }\n"): (typeof documents)["\n  query Recipe($id: String!) {\n    recipe(id: $id) {\n      ...RecipeFragment\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query RecipeOverview {\n    recipeCollection(limit: 100) {\n      items {\n        ...RecipeFragment\n      }\n    }\n  }\n"): (typeof documents)["\n  query RecipeOverview {\n    recipeCollection(limit: 100) {\n      items {\n        ...RecipeFragment\n      }\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;