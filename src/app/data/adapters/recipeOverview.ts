import { RecipeOverviewProps } from "@/components/recipeOverview/recipeOverview";
import { RecipeOverviewQuery } from "@/generated/graphql";
import { recipeAdapter } from "./recipe";

export const recipeOverviewAdapter = async (
  data: RecipeOverviewQuery
): Promise<RecipeOverviewProps> => {
  return {
    recipes: data.recipeCollection?.items
      ? await Promise.all(
          data.recipeCollection.items.map((recipe) =>
            recipeAdapter({
              __typename: "Query",
              recipe: recipe,
            })
          )
        )
      : [],
  };
};
