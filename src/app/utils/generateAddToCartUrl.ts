import { productProps } from "@/components/recipe/recipe";

export const generateAddToCartUrl = (
  allRequiredProducts: productProps[],
  checkedOptionalProducts: productProps[]
) => {
  const allItems: Record<number, { ahId: number; amount: number }> = {};

  allRequiredProducts.forEach((product) => {
    const existingProduct = allItems[product.ahId];
    if (existingProduct) {
      existingProduct.amount++;
    } else {
      allItems[product.ahId] = {
        ahId: product.ahId,
        amount: 1,
      };
    }
  });

  checkedOptionalProducts.forEach((product) => {
    const existingProduct = allItems[product.ahId];
    if (existingProduct) {
      existingProduct.amount++;
    } else {
      allItems[product.ahId] = {
        ahId: product.ahId,
        amount: 1,
      };
    }
  });

  // Construct the URL
  const baseUrl = "https://www.ah.nl/mijnlijst/add-multiple";
  const params = Object.values(allItems)
    .map((item) => `p=${item.ahId}:${item.amount}`)
    .join("&");

  return `${baseUrl}?${params}`;
};
