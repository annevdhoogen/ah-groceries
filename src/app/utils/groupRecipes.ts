import { RecipeProps } from "@/components/recipe/recipe";
import { RECIPE } from "@/constants/types";

export interface groupedRecipesProps {
  [key: string]: RecipeProps[];
}

// group recipes by type
export const groupRecipes = (recipes: RecipeProps[]) => {
  const sortedTypes = ["Wekelijks", "Recept", "Snack"];

  const grouped = Array.from(recipes).reduce((acc, recipe) => {
    const type = recipe.type || RECIPE;
    if (!acc[type]) {
      acc[type] = [];
    }
    acc[type].push(recipe);
    return acc;
  }, {} as groupedRecipesProps);

  const sortedGroupedRecipes: groupedRecipesProps = {};
  sortedTypes.forEach((type) => {
    if (grouped[type]) {
      sortedGroupedRecipes[type] = grouped[type];
    }
  });

  return sortedGroupedRecipes;
};
