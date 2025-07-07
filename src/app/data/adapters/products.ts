import { ProductsProps } from "@/components/addRecipe/addRecipe";
import { ProductsQuery } from "@/generated/graphql";

export const productsAdapter = async (
  data: ProductsQuery
): Promise<ProductsProps> => {
  return {
    items:
      data.productCollection?.items?.map((item) => ({
        sys: {
          id: item?.sys?.id || "",
        },
        title: item?.title || "",
        ahId: item?.ahId || 0,
      })) || [],
  };
};
