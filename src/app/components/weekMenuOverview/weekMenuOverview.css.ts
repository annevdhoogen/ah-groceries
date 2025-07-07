import { style } from "@vanilla-extract/css";

export const container = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "16px",
});

export const list = style({
  listStyleType: "none",
  padding: 0,
  display: "grid",
  gridTemplateColumns: "1fr",
  gap: "16px",
  gridArea: "recipes",
  "@media": {
    "screen and (min-width: 768px)": {
      gridTemplateColumns: "1fr 1fr",
    },
  },
});
