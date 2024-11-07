import { style } from "@vanilla-extract/css";
import { borderRadius, colors } from "./vars.css";

export const recipesAndMenuGrid = style({
  flexGrow: 1,
  display: "grid",
  gridTemplateColumns: "2fr 1fr",
  gridTemplateAreas: `"recipes weekmenu"`,
  gap: "16px",
  "@media": {
    "(max-width: 768px)": {
      gridTemplateColumns: "1fr",
      gridTemplateAreas: `"recipes" "weekmenu"`,
    },
  },
});

export const weekmenu = style({
  padding: "16px",
  backgroundColor: colors.secondary,
  color: colors.textOnSecondary,
  borderRadius: borderRadius,
  gridArea: "weekmenu",
  position: "sticky",
  top: "16px",
  maxHeight: "calc(100vh - 32px)",
  display: "flex",
  flexDirection: "column",
  gap: "16px",
  alignItems: "flex-start",
  justifyContent: "flex-start",
});
