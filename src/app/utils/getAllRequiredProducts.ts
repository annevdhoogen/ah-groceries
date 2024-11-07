import { productProps } from "@/components/recipe/recipe";
import { LEMON, LIME } from "@/constants/products";

export const getAllRequiredProducts = (
  products: productProps[],
  lemonAmount = 0,
  limeAmount = 0
) => {
  // make copy of products
  const allRequiredProducts = [...products];

  // add as many lemons to allRequiredProducts as lemonAmount
  for (let i = 0; i < Math.ceil(lemonAmount / LEMON.amountPerPack); i++) {
    allRequiredProducts.push({
      title: LEMON.title,
      ahId: LEMON.ahId,
    });
  }

  // add as many limes to allRequiredProducts as limeAmount
  for (let i = 0; i < Math.ceil(limeAmount / LIME.amountPerPack); i++) {
    allRequiredProducts.push({
      title: LIME.title,
      ahId: LIME.ahId,
    });
  }

  return allRequiredProducts;
};
