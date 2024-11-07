import { borderRadius, colors } from "@/style/vars.css";
import { recipe } from "@vanilla-extract/recipes";

export const button = recipe({
  base: {
    display: "inline-block",
    padding: "8px 16px",
    borderRadius: borderRadius,
    cursor: "pointer",
    color: colors.textOnPrimary,
    backgroundColor: colors.primary,
    border: `2px solid ${colors.primary}`,
    textDecoration: "none",
    transition: "200ms ease-in-out",
    transitionProperty: "background-color, color, border-color",
    fontSize: "1rem",
    textAlign: "center",

    ":hover": {
      backgroundColor: colors.primaryDark,
      border: `2px solid ${colors.primaryDark}`,
    },
  },
  variants: {
    ghost: {
      true: {
        backgroundColor: "transparent",
        color: colors.primary,

        ":hover": {
          backgroundColor: colors.primaryDark,
          color: colors.textOnPrimary,
        },
      },
    },
    icon: {
      true: {
        padding: 0,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: "24px",
        height: "24px",
        borderRadius: "50%",
        fontSize: "0.8rem",
        fontWeight: 700,
        lineHeight: 0,
      },
    },
  },
});
