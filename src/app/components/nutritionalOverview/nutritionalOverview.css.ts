import { borderRadius, colors } from "@/style/vars.css";
import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

export const nutritionalOverview = style({
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr 1fr",
  gap: "4px",
});

export const item = recipe({
  base: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "4px",
    borderRadius: borderRadius,
    backgroundColor: colors.secondaryLight,
  },
  variants: {
    small: {
      true: {
        padding: 0,
        backgroundColor: "transparent",
      },
    },
  },
});
