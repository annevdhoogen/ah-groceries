import { style } from "@vanilla-extract/css";
import { maxWidth } from "./vars.css";

export const main = style({
  padding: "16px",
  margin: "0 auto",
  maxWidth: maxWidth,
  flexGrow: 1,
  display: "flex",
  flexDirection: "column",
  width: "100%",
});
