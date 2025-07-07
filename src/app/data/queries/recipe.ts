import { graphql } from "@/generated";

export const RecipeQuery = graphql(`
  query Recipe($id: String!) {
    recipe(id: $id) {
      ...RecipeFragment
    }
  }
`);

export const RecipeDetailQuery = graphql(`
  query RecipeDetail($id: String!) {
    recipe(id: $id) {
      ...RecipeFragment
      description {
        json
        links {
          entries {
            hyperlink {
              sys {
                id
              }
            }
          }
        }
      }
    }
  }
`);
