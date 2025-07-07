import { RecipeProps } from "@/components/recipe/recipe";
import { RECIPE } from "@/constants/types";

export interface groupedRecipesProps {
  [key: string]: RecipeProps[];
}

// group recipes by type
export const groupRecipes = (recipes: RecipeProps[], sort?: string) => {
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

  if (sort) {
    sortedGroupedRecipes[RECIPE] = sortedGroupedRecipes[RECIPE].sort((a, b) => {
      switch (sort) {
        case "title":
          return a.title.localeCompare(b.title);
        case "calories":
          return (b.calories || 0) - (a.calories || 0);
        case "carbs":
          return (b.carbs || 0) - (a.carbs || 0);
        case "protein":
          return (b.protein || 0) - (a.protein || 0);
        case "fat":
          return (b.fat || 0) - (a.fat || 0);
        default:
          return 0;
      }
    });
  }

  return sortedGroupedRecipes;
};
