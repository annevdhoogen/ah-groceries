import { globalStyle } from "@vanilla-extract/css";
import { colors } from "./vars.css";

// 0. Add the web fonts
// globalFontFace(aktifoA, {
//   fontWeight: 400,
//   src: "url('/fonts/aktifoa-book.woff') format('woff'), url('/fonts/aktifoa-book.woff2') format('woff2')",
// });

// globalFontFace(aktifoA, {
//   fontWeight: 400,
//   fontStyle: 'italic',
//   src: "url('/fonts/aktifoa-bookoblique.woff') format('woff'), url('/fonts/aktifoa-bookoblique.woff2') format('woff2')",
// });

// globalFontFace(aktifoA, {
//   fontWeight: 500,
//   src: "url('/fonts/aktifoa-medium.woff') format('woff'), url('/fonts/aktifoa-medium.woff2') format('woff2')",
// });

// globalFontFace(aktifoA, {
//   fontWeight: 500,
//   fontStyle: 'italic',
//   src: "url('/fonts/aktifoa-mediumoblique.woff') format('woff'), url('/fonts/aktifoa-mediumoblique.woff2') format('woff2')",
// });

// Reset styling based on https://www.joshwcomeau.com/css/custom-css-reset/
// 1. Use a more-intuitive box-sizing model.
globalStyle("*, *::before, *::after", {
  boxSizing: "border-box",
});

// 2. Remove default margin
globalStyle("*", {
  margin: 0,
});

// 3. Reset html/body to a sensible baseline
globalStyle("html, body", {
  height: "100%",
  //   fontFamily: theme.fonts.nunitoSans,
  fontSize: "16px",
  margin: 0,
  padding: 0,
  scrollBehavior: "smooth",
  textWrap: "balance",
});

// Typographic tweaks!
// 4. Add accessible line-height
// 5. Improve text rendering
globalStyle("body", {
  lineHeight: 1.4,
  WebkitFontSmoothing: "antialiased",
  display: "flex",
  flexDirection: "column",
});

// 6. Improve media defaults
globalStyle("img, picture, video, canvas, svg", {
  display: "block",
  maxWidth: "100%",
});

// 7a. Remove built-in form typography styles
// globalStyle('button, input, select, textarea, label', {
//   fontFamily: theme.fonts.nunitoSans,
// });

globalStyle("a", {
  color: "currentColor",
});

// 7b. Remove built-in form styling
globalStyle("button", {
  padding: 0,
});

// 8. Avoid text overflows
globalStyle("h1, h2, h3, h4, h5, h6", {
  overflowWrap: "break-word",
  // hyphens: "auto",
  fontWeight: "400",
});

globalStyle("h1", {
  fontSize: "2em",
});

globalStyle("h2, h3", {
  fontSize: "1.5em",
  lineHeight: "1.2",
});

// 9. Create a root stacking context
globalStyle("#root, #__next", {
  isolation: "isolate",
});

//11. Remove default button styling
globalStyle("button", {
  border: "none",
  background: "transparent",
  cursor: "pointer",
  color: "currentcolor",
});

//12. fix focus style
globalStyle("*:focus-visible", {
  outline: "2px dashed #000",
  outlineOffset: "4px",
});
