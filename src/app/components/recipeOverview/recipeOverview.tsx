"use client";

import React from "react";
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

export interface RecipeOverviewProps {
  recipes: RecipeProps[];
}

const RecipeOverview = ({ recipes }: RecipeOverviewProps) => {
  const { weekMenu, addRecipeToWeekMenu, removeRecipeFromWeekMenu } =
    useWeekMenu();

  const allRecipesByType = groupRecipes(recipes);

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
        {Object.keys(allRecipesByType).map((type) => (
          <div key={type} className={styles.listContainer}>
            <h2>{type}</h2>
            <ul className={styles.list}>
              {allRecipesByType[type].map((recipe: RecipeProps) => (
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
        ))}
      </div>
    </div>
  );
};

export default RecipeOverview;
