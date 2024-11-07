import { colors, maxWidth } from "@/style/vars.css";
import { style } from "@vanilla-extract/css";

export const container = style({
  width: "100%",
  color: colors.textOnPrimary,
  background: colors.primary,
});

export const list = style({
  listStyle: "none",
  display: "flex",
  gap: "16px",
  margin: "0 auto",
  maxWidth: maxWidth,
  padding: "16px",
});

export const link = style({
  textDecoration: "none",
});

export const active = style({
  textDecoration: "underline",
});
