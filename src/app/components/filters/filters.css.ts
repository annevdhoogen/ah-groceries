import { style } from "@vanilla-extract/css";
import { borderRadius, colors } from "@/style/vars.css";

export const form = style({
  backgroundColor: colors.secondaryLight,
  padding: "16px",
  borderRadius,
  width: "calc(50% - 8px)",
  "@media": {
    "screen and (max-width: 1024px)": {
      width: "100%",
    },
  },
});

export const container = style({
  display: "flex",
  flexDirection: "column",
  gap: "8px",
  marginTop: "16px",
});

export const checkboxes = style({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(120px, 1fr))",
  gap: "4px",
});
