import { RECIPE } from "@/constants/types";
import * as styles from "./weekMenuList.css";
import * as typographyStyles from "@/style/typography.css";
import { groupRecipes } from "@/utils/groupRecipes";
import classNames from "classnames";
import { useWeekMenu, WeekMenuProps } from "@/contexts/WeekmenuContext";
import { Button } from "../button/button";
import { NutritionalOverview } from "../nutritionalOverview/nutritionalOverview";

export const WeekMenuList = (weekMenu: WeekMenuProps) => {
  const allWeekMenuRecipesByType = groupRecipes(weekMenu.items);
  const { removeRecipeFromWeekMenu, portionSize } = useWeekMenu();

  const weekMenuDays = allWeekMenuRecipesByType[RECIPE]?.reduce(
    (acc, { days }) => acc + days,
    0
  );

  return Object.keys(allWeekMenuRecipesByType).map((type) => (
    <div key={`weekmenu-${type}`} className={styles.weekMenuListContainer}>
      <h3>
        {type === RECIPE ? (
          <>
            {weekMenuDays > 0 && (
              <>
                Recepten, voor {weekMenuDays}{" "}
                {weekMenuDays === 1 ? "dag" : "dagen"}
              </>
            )}
          </>
        ) : (
          type
        )}
      </h3>
      <ul className={styles.weekMenuList}>
        {allWeekMenuRecipesByType[type].map((recipe) => (
          <li key={`weekmenu-${recipe.sys.id}`} className={styles.weekMenuItem}>
            <div className={styles.contentContainer}>
              <span>
                {`${recipe.days > 1 ? `${recipe.days}x ` : ""}${recipe.title}`}
              </span>

              {recipe.cheatmeal && recipe.cheatmeal.length > 0 && (
                <div className={(typographyStyles.smallLabel, styles.labels)}>
                  {recipe.cheatmeal.map((cheat) => (
                    <span
                      key={`${recipe.sys.id}-${cheat}`}
                      className={classNames(
                        typographyStyles.smallLabel,
                        typographyStyles.cheatLabel,
                        styles.cheatLabel
                      )}
                    >
                      {cheat}
                    </span>
                  ))}
                </div>
              )}

              <NutritionalOverview
                small
                calories={recipe.calories}
                carbs={recipe.carbs}
                protein={recipe.protein}
                fat={recipe.fat}
                portionSize={portionSize}
              />

              {recipe.book && recipe.pageNumber && (
                <p
                  className={classNames(
                    typographyStyles.smallLabel,
                    styles.book
                  )}
                >
                  {recipe.book} p.{recipe.pageNumber}
                </p>
              )}
            </div>
            <Button
              className={styles.removeButton}
              variant="ghost"
              icon
              label="x"
              onClick={() => removeRecipeFromWeekMenu(recipe)}
            />
          </li>
        ))}
      </ul>
    </div>
  ));
};
