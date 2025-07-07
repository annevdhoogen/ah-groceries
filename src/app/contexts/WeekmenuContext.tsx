"use client";

import { RecipeProps } from "@/components/recipe/recipe";
import { DEFAULT_FILTERS } from "@/constants/types";
import { createContext, useContext, useState, ReactNode } from "react";

export interface WeekMenuProps {
  items: RecipeProps[];
}

interface WeekMenuContextProps {
  weekMenu: WeekMenuProps;
  addRecipeToWeekMenu: (recipe: RecipeProps) => void;
  removeRecipeFromWeekMenu: (recipe: RecipeProps) => void;
  portionSize: string;
  setPortionSize: (portionSize: string) => void;
}

const WeekMenuContext = createContext<WeekMenuContextProps | undefined>(
  undefined
);

interface WeekMenuProviderProps {
  children: ReactNode;
}

export const WeekMenuProvider = ({ children }: WeekMenuProviderProps) => {
  const [weekMenu, updateWeekMenu] = useState<WeekMenuProps>({ items: [] });
  const [portionSize, setPortionSize] = useState(DEFAULT_FILTERS.portionSize);
  const addRecipeToWeekMenu = (recipe: RecipeProps) => {
    // add the recipe to the week menu if it does not exist already
    if (!weekMenu.items.find((r) => r.sys.id === recipe.sys.id)) {
      updateWeekMenu((prevWeekMenu) => ({
        items: [...prevWeekMenu.items, recipe],
      }));
    }
  };

  const removeRecipeFromWeekMenu = (recipe: RecipeProps) => {
    updateWeekMenu((prevWeekMenu) => ({
      items: prevWeekMenu.items.filter((r) => r.sys.id !== recipe.sys.id),
    }));
  };

  return (
    <WeekMenuContext.Provider
      value={{
        weekMenu,
        removeRecipeFromWeekMenu,
        addRecipeToWeekMenu,
        portionSize,
        setPortionSize,
      }}
    >
      {children}
    </WeekMenuContext.Provider>
  );
};

export const useWeekMenu = () => {
  const context = useContext(WeekMenuContext);
  if (!context) {
    throw new Error("useWeekMenu must be used within a WeekMenuProvider");
  }
  return context;
};
