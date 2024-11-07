"use client";
import * as styles from "./weekMenuOverview.css";
import * as gridStyles from "@/style/grid.css";

import { useWeekMenu } from "@/contexts/WeekmenuContext";
import { ButtonLink } from "../button/button";
import { ROUTES } from "@/constants/routes";
import { productProps } from "../recipe/recipe";
import { useCallback, useEffect, useState } from "react";
import { GroceryList } from "../groceryList/groceryList";
import { getAllRequiredProducts } from "@/utils/getAllRequiredProducts";
import { generateAddToCartUrl } from "@/utils/generateAddToCartUrl";
import { WeekMenuList } from "../weekMenuList/weekMenuList";

export const WeekMenuOverview = () => {
  const { weekMenu } = useWeekMenu();
  const [addToCartUrl, setAddToCartUrl] = useState<string>("");
  const [checkedOptionalProducts, setCheckedOptionalProducts] = useState<
    productProps[]
  >([]);

  const allWeekmenuProducts = weekMenu.items.reduce(
    (acc: productProps[], recipe) => {
      const requiredProducts = recipe.products || [];
      return acc.concat(requiredProducts);
    },
    []
  );

  const totalLemons = weekMenu.items.reduce((acc, recipe) => {
    return acc + (recipe.lemonAmount || 0);
  }, 0);

  const totalLimes = weekMenu.items.reduce((acc, recipe) => {
    return acc + (recipe.limeAmount || 0);
  }, 0);

  const allRequiredProducts = getAllRequiredProducts(
    allWeekmenuProducts,
    totalLemons,
    totalLimes
  );

  const allOptionalProducts = weekMenu.items.reduce(
    (acc: productProps[], recipe) => {
      const optionalProducts = recipe.optionalProducts || [];
      return acc.concat(
        optionalProducts.filter(
          (product) =>
            !acc.some((p) => p.ahId === product.ahId) &&
            // only add when product does not already exist in allRequiredProducts
            !allRequiredProducts.some((p) => p.ahId === product.ahId)
        )
      );
    },
    []
  );

  useEffect(() => {
    const newUrl = generateAddToCartUrl(
      allRequiredProducts,
      checkedOptionalProducts
    );
    setAddToCartUrl(newUrl);
  }, [allRequiredProducts, checkedOptionalProducts]); // This will run every time allRequiredProducts or checkedOptionalProducts changes

  const generateOptionalGroceryList = useCallback(() => {
    return (
      <GroceryList
        title="Zijn deze producten ook nodig?"
        products={allOptionalProducts}
        checkedOptionalProducts={checkedOptionalProducts}
        onChange={(isChecked, product) => {
          if (!product) return;
          if (isChecked) {
            // add product to list
            setCheckedOptionalProducts([...checkedOptionalProducts, product]);
          } else {
            // remove product from list
            setCheckedOptionalProducts(
              checkedOptionalProducts.filter((p) => p.ahId !== product.ahId)
            );
          }
        }}
      />
    );
  }, [allOptionalProducts, checkedOptionalProducts]);

  useEffect(() => {
    generateOptionalGroceryList();
  }, [generateOptionalGroceryList]);

  return (
    <div className={gridStyles.recipesAndMenuGrid}>
      {weekMenu.items.length === 0 ? (
        <div className={styles.container}>
          <p>Maak een weekmenu van verschillende recepten</p>
          <ButtonLink href={ROUTES.recipes} label="Recepten" />
        </div>
      ) : (
        <>
          <div className={styles.list}>
            <GroceryList
              title="Boodschappenlijst"
              products={allRequiredProducts}
            />
            {generateOptionalGroceryList()}
          </div>
          <div className={gridStyles.weekmenu}>
            <h2>Weekmenu</h2>
            <WeekMenuList {...weekMenu} />
            <ButtonLink
              target="_blank"
              href={addToCartUrl}
              label="Voeg toe aan AH mandje"
            />
            <ButtonLink
              href={ROUTES.recipes}
              variant="ghost"
              label="Pas weekmenu aan"
            />
          </div>
        </>
      )}
    </div>
  );
};
