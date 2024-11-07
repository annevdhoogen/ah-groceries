import { graphql } from "@/generated";

export const RecipeOverviewQuery = graphql(`
  query RecipeOverview {
    recipeCollection(limit: 100) {
      items {
        ...RecipeFragment
      }
    }
  }
`);
