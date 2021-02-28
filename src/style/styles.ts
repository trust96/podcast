const mediaQuery = {
  up: {
    sm: "@media (min-width:576px)",
    md: "@media (min-width:768px)",
    lg: "@media (min-width:992px)",
    xlg: "@media (min-width:1200px)",
  },
  down: {
    sm: "@media (max-width:576px)",
    md: "@media (max-width:768px)",
    lg: "@media (max-width:992px)",
    xlg: "@media (max-width:1200px)",
  },
};
const FONT_BASE = 1;
const fontSize = {
  text_900: `${0.5 * FONT_BASE}rem`,
  text_800: `${0.75 * FONT_BASE}rem`,
  text_700: `${1 * FONT_BASE}rem`,
  text_600: `${1.25 * FONT_BASE}rem`,
  text_500: `${1.5 * FONT_BASE}rem`,
  text_400: `${1.75 * FONT_BASE}rem`,
  text_300: `${2 * FONT_BASE}rem`,
  text_200: `${2.25 * FONT_BASE}rem`,
  text_100: `${2.5 * FONT_BASE}rem`,
};

const SPACE_UNIT = 1;

const spacing = {
  space_900: `${0.25 * SPACE_UNIT}rem`,
  space_800: `${0.5 * SPACE_UNIT}rem`,
  space_700: `${0.75 * SPACE_UNIT}rem`,
  space_600: `${1 * SPACE_UNIT}rem`,
  space_500: `${1.75 * SPACE_UNIT}rem`,
  space_400: `${2.75 * SPACE_UNIT}rem`,
  space_300: `${4.5 * SPACE_UNIT}rem`,
  space_200: `${7.25 * SPACE_UNIT}rem`,
  space_100: `${11.75 * SPACE_UNIT}rem`,
};
export { mediaQuery, FONT_BASE, fontSize, spacing };
