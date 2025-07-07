import { style } from "@vanilla-extract/css";
import { borderRadius, colors } from "./vars.css";

export const smallLabel = style({
  fontSize: "0.9rem",
});

export const cheatLabel = style({
  backgroundColor: colors.secondary,
  fontSize: "0.9rem",
  color: colors.textOnSecondary,
  alignSelf: "flex-start",
  padding: "4px 8px 2px 8px", // Pixel perfect alignment
  borderRadius: borderRadius,
});
