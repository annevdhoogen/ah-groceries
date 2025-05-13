import { colors, borderRadius } from "@/style/vars.css";
import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

export const container = style({
  display: "flex",
  flexDirection: "column",
  margin: "0 0 16px 0",
});

export const checkboxContainer = style({
  display: "flex",
  flexDirection: "row-reverse",
  justifyContent: "flex-end",
  gap: "8px",
});

export const label = style({
  marginBottom: "4px",
});

export const input = style({
  // padding: "4px",
  // border: "1px solid #ccc",
  // borderRadius: "4px",

  fontSize: "1rem",
  padding: "12px 16px",
  borderRadius,
  border: `1px solid ${colors.border}`,
  width: "100%",
});

export const fieldset = recipe({
  base: {
    border: 0,
    padding: 0,
    display: "flex",
    alignItems: "flex-start",
  },
  variants: {
    horizontal: {
      true: {
        gap: "24px",
        flexDirection: "row",
        justifyContent: "space-between",
        flexWrap: "wrap",
      },
      false: {
        flexDirection: "column",
      },
    },
    border: {
      true: {
        border: "1px solid #ccc",
        padding: "16px",
      },
    },
  },
});
