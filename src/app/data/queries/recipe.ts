import { graphql } from "@/generated";

export const RecipeQuery = graphql(`
  query Recipe($id: String!) {
    recipe(id: $id) {
      ...RecipeFragment
    }
  }
`);
