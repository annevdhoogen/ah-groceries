import { style } from "@vanilla-extract/css";
import { borderRadius, colors } from "@/style/vars.css";
import { recipe } from "@vanilla-extract/recipes";

export const form = style({
  backgroundColor: colors.secondaryLight,

  borderRadius,
  width: "calc(50% - 8px)",
  "@media": {
    "screen and (max-width: 1024px)": {
      width: "100%",
    },
  },
});

export const toggleContainer = recipe({
  base: {
    padding: "0 16px 16px 16px",
  },
  variants: {
    isVisible: {
      true: {
        display: "block",
      },
      false: {
        display: "none",
      },
    },
  },
});

export const toggleButton = style({
  width: "100%",
  padding: "16px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export const filterNumber = style({
  backgroundColor: colors.secondary,
  borderRadius: "50%",
  width: "24px",
  height: "24px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginRight: "auto",
  marginLeft: "8px",
});

export const container = style({
  display: "flex",
  flexDirection: "column",
  gap: "8px",
  marginTop: "16px",
});

export const checkboxes = style({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(120px, 1fr))",
  gap: "4px",
});

export const resetButton = style({
  alignSelf: "flex-start",
});

export const visible = style({
  display: "block",
});

export const hidden = style({
  display: "none",
});
