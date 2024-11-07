import { borderRadius, colors } from "@/style/vars.css";
import { style } from "@vanilla-extract/css";

export const groceries = style({
  backgroundColor: colors.secondaryLight,
  color: colors.textOnSecondary,
  padding: "16px",
  width: "100%",
  borderRadius: borderRadius,
});

export const title = style({
  marginBottom: "4px",
});

export const list = style({
  listStyle: "none",
  padding: 0,
  gridArea: "recipes",
});

export const listItem = style({
  padding: "8px",
  borderBottom: `2px solid ${colors.secondary}`,
});
