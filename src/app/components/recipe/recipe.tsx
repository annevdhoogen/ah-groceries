"use client";

import * as styles from "./recipe.css";
import { GroceryList } from "../groceryList/groceryList";
import { getAllRequiredProducts } from "@/utils/getAllRequiredProducts";
import { Button } from "../button/button";
import { useWeekMenu } from "@/contexts/WeekmenuContext";
import Image from "next/image";

export interface productProps {
  title: string;
  ahId: number;
}

export interface RecipeProps {
  sys: {
    id: string;
  };
  title: string;
  subtitle?: string;
  type: string;
  book?: string;
  pageNumber?: number;
  days: number;
  cheatmeal?: string[];
  products: productProps[];
  optionalProducts?: productProps[];
  lemonAmount?: number;
  limeAmount?: number;
  isInWeekmenu?: boolean;
  image?: {
    sys: {
      id: string;
    };
    url: string;
    width: number;
    height: number;
  };
  calories?: number;
  carbs?: number;
  protein?: number;
  fat?: number;
}

export const Recipe = (recipe: RecipeProps) => {
  const {
    title,
    subtitle,
    book,
    pageNumber,
    days,
    cheatmeal,
    sys,
    products,
    lemonAmount,
    limeAmount,
    optionalProducts,
  } = recipe;
  const { weekMenu, addRecipeToWeekMenu, removeRecipeFromWeekMenu } =
    useWeekMenu();

  const recipeIsInWeekMenu = weekMenu.items.some((r) => r.sys.id === sys.id);
  const allRequiredProducts = getAllRequiredProducts(
    products,
    lemonAmount,
    limeAmount
  );

  return (
    <section className={styles.container}>
      <div className={styles.headerContainer}>
        {subtitle && <p>{subtitle}</p>}

        {book && (
          <p>
            {book} {pageNumber && `p.${pageNumber}`}
          </p>
        )}

        {days > 1 && <p>Voor {days} dagen</p>}

        {cheatmeal && cheatmeal.length > 0 && (
          <p>Bevat: {cheatmeal.join(", ")}</p>
        )}
      </div>

      <div className={styles.contentContainer}>
        <GroceryList title="Ingrediënten" products={allRequiredProducts} />
        <GroceryList
          title="Optionele Ingrediënten"
          products={optionalProducts}
        />
        {recipe.image && (
          <div className={styles.imageContainer}>
            <Image
              width={recipe.image.width}
              height={recipe.image.height}
              src={recipe.image.url}
              alt={title}
              className={styles.image}
              loading="lazy"
            />
          </div>
        )}
      </div>

      <Button
        label={
          recipeIsInWeekMenu
            ? "Verwijderen uit weekmenu"
            : "Toevoegen aan weekmenu"
        }
        onClick={() => {
          if (recipeIsInWeekMenu) {
            removeRecipeFromWeekMenu(recipe);
          } else {
            addRecipeToWeekMenu(recipe);
          }
        }}
      />
    </section>
  );
};
