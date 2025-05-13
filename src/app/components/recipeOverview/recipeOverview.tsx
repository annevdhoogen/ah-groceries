"use client";

import React, { useEffect, useState } from "react";
import * as styles from "./recipeOverview.css";
import * as gridStyles from "@/style/grid.css";
import * as typographyStyles from "@/style/typography.css";
import { RecipeProps } from "@components/recipe/recipe";
import Link from "next/link";
import Checkbox from "@components/checkbox/checkbox";
import { ButtonLink, Button } from "@components/button/button";
import { useWeekMenu } from "@/contexts/WeekmenuContext";
import { ROUTES } from "@/constants/routes";
import { generateWeekMenu } from "@/utils/generateWeekmenu";
import { WeekMenuList } from "@components/weekMenuList/weekMenuList";
import { groupRecipes } from "@/utils/groupRecipes";
import Image from "next/image";
import classNames from "classnames";
import { Filters } from "../filters/filters";
import { NO_CHEAT } from "@/constants/types";
export interface RecipeOverviewProps {
  recipes: RecipeProps[];
}

const RecipeOverview = ({ recipes }: RecipeOverviewProps) => {
  const { weekMenu, addRecipeToWeekMenu, removeRecipeFromWeekMenu } =
    useWeekMenu();
  const [filters, setFilters] = useState<{
    title: string;
    cheat: string[];
    days: number;
  }>({
    title: "",
    cheat: [],
    days: 0,
  });

  const allRecipes = groupRecipes(recipes);

  const [filteredRecipes, setFilteredRecipes] = useState(groupRecipes(recipes));

  const onFilterChange = (filter: {
    type: string;
    value?: string | number;
    selected?: boolean;
  }) => {
    switch (filter.type) {
      case "reset":
        setFilters({
          title: "",
          cheat: [],
          days: 0,
        });
        break;
      case "days":
        setFilters({ ...filters, days: filter.value as number });
        break;
      case "title":
        setFilters({ ...filters, title: filter.value as string });
        break;
      case "cheat":
        if (filter.selected && filter.value === NO_CHEAT) {
          // When the NO_CHEAT filter is selected, we only want to show cheat-free recipes
          setFilters({ ...filters, cheat: [NO_CHEAT] });
        } else if (filter.selected) {
          // Adding a filter
          const newCheats = [...filters.cheat, filter.value as string];
          // remmove NO_CHEAT from newCheats
          if (newCheats.includes(NO_CHEAT)) {
            newCheats.splice(newCheats.indexOf(NO_CHEAT), 1);
          }
          setFilters({ ...filters, cheat: newCheats });
        } else {
          // Removing a filter
          const newCheat = filters.cheat.filter(
            (cheat) => cheat !== filter.value
          );
          setFilters({ ...filters, cheat: newCheat });
        }
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    const newFilteredRecipes = recipes.filter((recipe) => {
      const titleMatch = recipe.title
        .toLowerCase()
        .includes(filters.title.toLowerCase());

      const subtitleMatch = recipe.subtitle
        ? recipe.subtitle.toLowerCase().includes(filters.title.toLowerCase())
        : false;

      const productsMatch = recipe.products.some((product) =>
        product.title.toLowerCase().includes(filters.title.toLowerCase())
      );

      const optionalProductsMatch = recipe.optionalProducts?.some((product) =>
        product.title.toLowerCase().includes(filters.title.toLowerCase())
      );

      const cheatMatch = filters.cheat.includes(NO_CHEAT)
        ? recipe.cheatmeal?.length === 0
        : filters.cheat.every((cheat) => recipe.cheatmeal?.includes(cheat));

      const daysMatch =
        filters.days === 0 ? true : recipe.days === filters.days;

      return (
        (titleMatch ||
          subtitleMatch ||
          productsMatch ||
          optionalProductsMatch) &&
        cheatMatch &&
        daysMatch
      );
    });

    setFilteredRecipes(groupRecipes(newFilteredRecipes));
  }, [filters, recipes]);

  return (
    <div className={gridStyles.recipesAndMenuGrid}>
      <div className={gridStyles.weekmenu}>
        <h2>Weekmenu</h2>
        {weekMenu.items.length > 0 ? (
          <>
            <WeekMenuList {...weekMenu} />

            <ButtonLink href={ROUTES.weekmenu} label="Bestel producten" />
            <Button
              onClick={() => {
                weekMenu.items.forEach((recipe) => {
                  removeRecipeFromWeekMenu(recipe);
                });
              }}
              variant="ghost"
              label="Reset weekmenu"
            />
          </>
        ) : (
          <>
            <p>Start met toevoegen, of:</p>
            <Button
              onClick={() => {
                generateWeekMenu(recipes, addRecipeToWeekMenu);
              }}
              label="Genereer weekmenu"
            />
          </>
        )}
      </div>
      <div>
        <Filters
          className={styles.listContainer}
          onFilterChange={onFilterChange}
          filters={filters}
        />
        {Object.keys(filteredRecipes).length === 0 ? (
          <div className={styles.noRecipesFound}>
            <h2>Whoops!</h2>
            <p>Geen recepten gevonden</p>
          </div>
        ) : (
          Object.keys(filteredRecipes).map((type) => (
            <div key={type} className={styles.listContainer}>
              <h2>
                {type}
                {filteredRecipes[type].length < allRecipes[type].length && (
                  <>
                    <br />
                    <span className={typographyStyles.smallLabel}>
                      ({filteredRecipes[type].length} van{" "}
                      {allRecipes[type].length})
                    </span>
                  </>
                )}
              </h2>

              <ul className={styles.list}>
                {filteredRecipes[type].map((recipe: RecipeProps) => (
                  <li key={recipe.sys.id}>
                    <div className={styles.item}>
                      <Link
                        href={`${ROUTES.recipes}/${recipe.sys.id}`}
                        className={styles.recipeContent}
                      >
                        <div className={styles.contentContainer}>
                          <h3 className={styles.title}>
                            {recipe.title}
                            {recipe.days > 1 && (
                              <span className={styles.dayLabel}>
                                {recipe.days}x
                              </span>
                            )}
                          </h3>

                          {recipe.subtitle && (
                            <p className={typographyStyles.smallLabel}>
                              {recipe.subtitle}
                            </p>
                          )}

                          {recipe.cheatmeal && recipe.cheatmeal.length > 0 && (
                            <div className={styles.cheatContainer}>
                              {recipe.cheatmeal.map((cheat) => (
                                <span
                                  key={`${recipe.sys.id}-${cheat}`}
                                  className={classNames(
                                    typographyStyles.smallLabel,
                                    styles.cheatLabel
                                  )}
                                >
                                  {cheat}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                        {recipe.image && (
                          <div className={styles.imageContainer}>
                            <Image
                              width={recipe.image.width}
                              height={recipe.image.height}
                              src={recipe.image.url}
                              alt={recipe.title}
                              className={styles.image}
                              loading="lazy"
                            />
                          </div>
                        )}
                      </Link>

                      <Checkbox
                        className={styles.checkbox}
                        id={`checkbox-${recipe.sys.id}`}
                        label="Voeg toe aan weekmenu"
                        checked={weekMenu.items.some(
                          (item) => item.sys.id === recipe.sys.id
                        )}
                        onChange={(isChecked) => {
                          isChecked
                            ? addRecipeToWeekMenu(recipe)
                            : removeRecipeFromWeekMenu(recipe);
                        }}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default RecipeOverview;
