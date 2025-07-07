"use client";

import * as styles from "./recipe.css";
import { GroceryList } from "../groceryList/groceryList";
import { getAllRequiredProducts } from "@/utils/getAllRequiredProducts";
import { Button } from "../button/button";
import { useWeekMenu } from "@/contexts/WeekmenuContext";
import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Document, INLINES } from "@contentful/rich-text-types";
import { ROUTES } from "@/constants/routes";
import Link from "next/link";
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
  description?: Document;
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
    image,
    description,
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
        <div className={styles.headerContent}>
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
        {image && (
          <div className={styles.imageContainer}>
            <Image
              width={image.width}
              height={image.height}
              src={image.url}
              alt={title}
              className={styles.image}
              loading="lazy"
            />
          </div>
        )}
      </div>
      <div className={styles.contentContainer}>
        <GroceryList title="Ingrediënten" products={allRequiredProducts} />
        <GroceryList
          title="Optionele Ingrediënten"
          products={optionalProducts}
        />
        {description && (
          <div className={styles.description}>
            <h2>Beschrijving</h2>
            {documentToReactComponents(description, {
              renderNode: {
                [INLINES.ENTRY_HYPERLINK]: (node, children) => {
                  return (
                    <Link href={`${ROUTES.recipes}/${node.data.target.sys.id}`}>
                      {children}
                    </Link>
                  );
                },
              },
            })}
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
