import { RecipeProps } from "@/components/recipe/recipe";
import { RecipeQuery } from "@/generated/graphql";

export const recipeAdapter = async (
  data: RecipeQuery
): Promise<RecipeProps> => {
  return {
    sys: {
      id: data.recipe?.sys?.id || "",
    },
    title: data.recipe?.title || "",
    subtitle: data.recipe?.subtitle || "",
    type: data.recipe?.type || "",
    book: data.recipe?.book || "",
    image: data.recipe?.image
      ? {
          sys: { id: data.recipe.image.sys?.id || "" },
          url: data.recipe.image.url || "",
          width: data.recipe.image.width || 0,
          height: data.recipe.image.height || 0,
        }
      : undefined,
    pageNumber: data.recipe?.pageNumber || 0,
    days: data.recipe?.days || 0,
    cheatmeal: Array.isArray(data.recipe?.cheatmeal)
      ? data.recipe?.cheatmeal.filter((item): item is string => item !== null)
      : [],
    products:
      data.recipe?.productsCollection?.items?.map((product) => ({
        title: product?.title || "",
        ahId: product?.ahId || 0,
      })) || [],

    optionalProducts:
      data.recipe?.optionalProductsCollection?.items?.map((product) => ({
        title: product?.title || "",
        ahId: product?.ahId || 0,
      })) || [],

    lemonAmount: data.recipe?.lemonAmount || 0,
    limeAmount: data.recipe?.limeAmount || 0,
  };
};
