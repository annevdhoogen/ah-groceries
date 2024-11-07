import { colors } from "@/style/vars.css";
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
  display: "flex",
  alignItems: "center",
  gap: "8px",
  borderBottom: `2px solid ${colors.primary}`,
  padding: "4px 8px",

  ":last-child": {
    borderBottom: "none",
  },
});

export const labels = style({
  textAlign: "right",
  marginLeft: "auto",
});

export const removeButton = style({
  marginLeft: "8px",
});
