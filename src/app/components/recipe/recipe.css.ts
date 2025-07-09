import { borderRadius } from "@/style/vars.css";
import { style } from "@vanilla-extract/css";

export const container = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "16px",
  flexGrow: 1,
});

export const headerContainer = style({
  display: "flex",
  justifyContent: "space-between",
  gap: "16px",
  width: "100%",

  "@media": {
    "(max-width: 768px)": {
      flexDirection: "column",
    },
  },
});

export const headerContent = style({
  display: "flex",
  flexDirection: "column",
  gap: "16px",
  width: "100%",
});

export const contentContainer = style({
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr",
  gap: "16px",
  width: "100%",
  flexGrow: 1,

  "@media": {
    "(max-width: 1024px)": {
      gridTemplateColumns: "1fr 1fr",
    },
    "(max-width: 768px)": {
      gridTemplateColumns: "1fr",
    },
  },
});

export const imageDescriptionContainer = style({
  display: "flex",
  flexDirection: "column",
  gap: "16px",
});

export const imageContainer = style({
  overflow: "hidden",
  borderRadius: borderRadius,
  aspectRatio: "1",
  width: "100%",
  height: "100%",
});

export const image = style({
  width: "100%",
  height: "100%",
  objectFit: "cover",
});

export const description = style({
  display: "flex",
  flexDirection: "column",
  gap: "8px",
});
