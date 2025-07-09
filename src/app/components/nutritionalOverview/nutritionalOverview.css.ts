import { borderRadius, colors } from "@/style/vars.css";
import { recipe } from "@vanilla-extract/recipes";
import { recipeContent } from "../recipeOverview/recipeOverview.css";

export const nutritionalOverview = recipe({
  base: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr 1fr",
    gap: "4px",
  },
  variants: {
    type: {
      inline: {
        maxWidth: "360px",
      },
      small: {},
    },
  },
});

export const item = recipe({
  base: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "4px",
    borderRadius: borderRadius,
    backgroundColor: colors.secondaryLight,
    transition: "background-color 0.2s ease-in-out",
    selectors: {
      [`${recipeContent}:hover &`]: {
        backgroundColor: colors.secondary,
      },
    },
  },
  variants: {
    type: {
      small: {
        padding: 0,
        backgroundColor: "transparent",
      },
      inline: {},
    },
  },
});
