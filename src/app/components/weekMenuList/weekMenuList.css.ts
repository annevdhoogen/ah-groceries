import { borderRadius, colors } from "@/style/vars.css";
import { style } from "@vanilla-extract/css";

export const weekMenuListContainer = style({
  display: "flex",
  flexDirection: "column",
  gap: "4px",
  width: "100%",
});

export const weekMenuList = style({
  listStyleType: "none",
  padding: 0,
  display: "flex",
  flexDirection: "column",
  width: "100%",
});

export const weekMenuItem = style({
  borderBottom: `2px solid ${colors.primary}`,
  padding: "4px 8px",
  display: "flex",
  justifyContent: "space-between",
  gap: "8px",
  ":last-child": {
    borderBottom: "none",
  },
});

export const contentContainer = style({
  display: "flex",
  gap: "4px",
  flexWrap: "wrap",
});

export const labels = style({
  display: "flex",
  gap: "4px",
});

export const cheatLabel = style({
  backgroundColor: colors.secondaryLight,
});

export const nutrionalLabels = style({
  display: "flex",
  flexDirection: "row-reverse",
  gap: "8px",
});

export const removeButton = style({
  minWidth: "24px",
});

export const book = style({
  width: "100%",
});
