import { borderRadius, colors } from "@/style/vars.css";
import { style } from "@vanilla-extract/css";

export const container = style({
  display: "flex",
  gap: "16px",
  marginBottom: "16px",
  alignItems: "center",
});

export const standardRecipe = style({
  marginTop: "16px",
});

export const listContainer = style({
  display: "flex",
  flexDirection: "column",
  gap: "16px",
  marginBottom: "24px",
  ":last-child": {
    marginBottom: 0,
  },
});

export const noRecipesFound = style({
  display: "flex",
  alignItems: "flex-start",
  flexDirection: "column",
  gap: "16px",
});

export const list = style({
  listStyleType: "none",
  padding: 0,
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
  gridGap: "16px",
  gridArea: "recipes",
});

export const item = style({
  border: `2px solid ${colors.secondary}`,
  display: "flex",
  minHeight: "100%",
  flexDirection: "column",
  borderRadius: borderRadius,
});

export const recipeContent = style({
  padding: "16px",
  textDecoration: "none",
  flexGrow: 1,
  transition: "200ms ease-in-out",
  transitionProperty: "background-color, color",
  display: "flex",
  gap: "16px",
  borderTopRightRadius: borderRadius,
  borderTopLeftRadius: borderRadius,

  ":hover": {
    backgroundColor: colors.secondaryLight,
    color: colors.textOnSecondary,
  },
});

export const contentContainer = style({
  display: "flex",
  flexDirection: "column",
  gap: "8px",
  flexGrow: 1,
});

export const title = style({
  display: "flex",
  alignItems: "center",
  gap: "8px",
});

export const cheatContainer = style({
  display: "flex",
  gap: "8px",
});

export const dayLabel = style({
  backgroundColor: colors.primary,
  color: colors.textOnPrimary,
  width: "24px",
  height: "24px",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "50%",
  fontSize: "0.8rem",
  lineHeight: "0",
});

export const checkbox = style({
  padding: "16px",
  width: "100%",
  marginTop: "auto",
  borderTop: `2px solid ${colors.secondary}`,
  transition: "200ms ease-in-out",
  transitionProperty: "background-color, color",
  borderBottomRightRadius: borderRadius,
  borderBottomLeftRadius: borderRadius,

  ":hover": {
    backgroundColor: colors.secondaryLight,
    color: colors.textOnSecondary,
  },
});

export const weekMenuOptionalProducts = style({
  marginTop: "16px",
});

export const imageContainer = style({
  overflow: "hidden",
  aspectRatio: "1",
  width: "120px",
  borderRadius: borderRadius,
});

export const image = style({
  width: "100%",
  height: "100%",
  objectFit: "cover",
});
