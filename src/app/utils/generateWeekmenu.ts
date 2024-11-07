import { RecipeProps } from "@/components/recipe/recipe";
import { FISH, RECIPE, WEEKLY } from "@/constants/types";

/**
 * Generates a week menu by selecting recipes from the provided list of all recipes.
 * The week menu consists of 7 days, including 1 fish cheatmeal, 1 generic cheatmeal,
 * and 5 normal recipes. Additionally, recipes with the type "Wekelijks" are included.
 *
 * @param allRecipes - An array of all available recipes.
 * @param addRecipeToWeekMenu - A callback function to add a recipe to the week menu.
 *
 */
export const generateWeekMenu = (
  allRecipes: RecipeProps[],
  addRecipeToWeekMenu: (recipe: RecipeProps) => void
) => {
  const daysToAdd = 7;
  const selectedRecipes = [];

  // Filter out recipes
  const weeklyRecipes = allRecipes.filter((recipe) => recipe.type === WEEKLY);

  const recipesToChooseFromForTheWeek = allRecipes
    .filter((recipe) => recipe.type === RECIPE)
    .sort(() => 0.5 - Math.random());

  const fishCheatmealRecipes = recipesToChooseFromForTheWeek.filter(
    (recipe) => recipe.cheatmeal && recipe.cheatmeal.includes(FISH)
  );

  const genericCheatmealRecipes = recipesToChooseFromForTheWeek.filter(
    (recipe) =>
      recipe.cheatmeal &&
      recipe.cheatmeal.length > 0 &&
      !recipe.cheatmeal.includes(FISH)
  );

  const normalRecipes = recipesToChooseFromForTheWeek.filter(
    (recipe) =>
      !recipe.cheatmeal || (recipe.cheatmeal && recipe.cheatmeal.length === 0)
  );

  // Create a weekmenu of 7 days, with 1 fishCheatmeal, 1 cheatmeal and 5 normal recipes
  let daysAdded = 0;
  while (daysAdded < daysToAdd) {
    let recipeToAdd: RecipeProps | undefined = undefined;

    if (selectedRecipes.length === 0) {
      // First add a fish cheatmeal
      recipeToAdd = fishCheatmealRecipes.pop();
    } else if (selectedRecipes.length === 1) {
      // Then add a generic cheatmeal
      recipeToAdd = genericCheatmealRecipes.pop();
    } else {
      // Fill with normal recipes
      recipeToAdd = normalRecipes.pop();
    }

    if (recipeToAdd) {
      // Check if adding this recipe would exceed the daysToAdd
      if (daysAdded + (recipeToAdd.days || 1) > daysToAdd) {
        // pick next recipe
        continue;
      }

      selectedRecipes.push(recipeToAdd);
      // Add the number of days the recipe covers
      daysAdded += recipeToAdd.days || 1;
    } else {
      break; // Break the loop if no more recipes are available to add
    }
  }

  // Add the recipes with type "Wekelijks" back to the selected recipes
  selectedRecipes.push(...weeklyRecipes);

  // Add the selected recipes to the week menu
  selectedRecipes.forEach((recipe) => {
    recipe && addRecipeToWeekMenu(recipe);
  });
};
