import { style } from "@vanilla-extract/css";

export const imagePreviewContainer = style({
  backgroundColor: "#f2f2f2",
  borderRadius: "8px",
  padding: "24px",
  position: "relative",
  display: "inline-block",
  "::before": {
    content: "",
    position: "absolute",
    left: "32px",
    bottom: "100%",
    borderLeft: "10px solid transparent",
    borderRight: "10px solid transparent",
    borderBottom: "10px solid #f2f2f2",
  },
});

export const imagePreview = style({
  width: "100%",
  height: "100%",
  maxWidth: "200px",
  maxHeight: "200px",
  objectFit: "contain",
});

export const form = style({
  flexGrow: 1,
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr",
  gridTemplateAreas: `"main productsInRecipe productOverview"`,
  gap: "16px",
});

export const mainItems = style({
  gridArea: "main",
});

export const products = style({
  gridArea: "productsInRecipe",
});

export const productOverview = style({
  gridArea: "productOverview",
});
