import { lightTheme } from "./light";

export const darkTheme = {
  ...lightTheme,

  name: "dark",

  /**
   * Futuramente serão substituídos
   * pelos Semantic Tokens do Dark Theme.
   */

  colors: lightTheme.colors,
} as const;

export type DarkTheme = typeof darkTheme;