import { style } from "@vanilla-extract/css";
import { keyframes } from "@vanilla-extract/css";

const rotate = keyframes({
  "0%": { transform: "rotate(0deg)" },
  "100%": { transform: "rotate(360deg)" },
});

export const loader = style({
  display: "inline-block",
  width: "48px",
  height: "48px",
  marginBottom: "16px",
  "::after": {
    content: "",
    display: "block",
    width: "48px",
    height: "48px",
    borderRadius: "50%",
    border: `4px solid`,
    animation: `${rotate} 1.2s linear infinite`,
    borderColor: `white transparent white transparent`,
  },
});

export const container = style({
  position: "fixed",
  top: 0,
  left: 0,
  zIndex: 9,
  width: "100%",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "white",
  flexDirection: "column",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
});
