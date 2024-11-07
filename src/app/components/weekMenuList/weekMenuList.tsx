import { RECIPE } from "@/constants/types";
import * as styles from "./weekMenuList.css";
import * as typographyStyles from "@/style/typography.css";
import { groupRecipes } from "@/utils/groupRecipes";
import classNames from "classnames";
import { useWeekMenu, WeekMenuProps } from "@/contexts/WeekmenuContext";
import { Button } from "../button/button";

export const WeekMenuList = (weekMenu: WeekMenuProps) => {
  const allWeekMenuRecipesByType = groupRecipes(weekMenu.items);
  const { removeRecipeFromWeekMenu } = useWeekMenu();

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
            {recipe.title}
            <span
              className={classNames(typographyStyles.smallLabel, styles.labels)}
            >
              {recipe.cheatmeal &&
                recipe.cheatmeal.length > 0 &&
                recipe.cheatmeal.join(", ")}
              {recipe.days > 1 && (
                <>
                  {recipe.cheatmeal && recipe.cheatmeal.length > 0 && ", "}
                  {recipe.days}x
                </>
              )}
            </span>
            <span>
              <Button
                variant="ghost"
                icon
                label="x"
                className={styles.removeButton}
                onClick={() => removeRecipeFromWeekMenu(recipe)}
              />
            </span>
          </li>
        ))}
      </ul>
    </div>
  ));
};
