/**
 * -------------------------------------------------------
 * Brand Colors
 * -------------------------------------------------------
 *
 * Este arquivo representa a identidade visual da plataforma.
 *
 * Nenhum componente deve importar este arquivo diretamente.
 *
 * Os componentes utilizarão apenas os Semantic Tokens.
 *
 */

export const brandColors = {
  terracotta: {
    50: "#FDF7F5",
    100: "#FAECE8",
    200: "#F3D2C8",
    300: "#EAB4A2",
    400: "#DD8C70",
    500: "#C96A47",
    600: "#B65A38",
    700: "#94472C",
    800: "#733521",
    900: "#522417",
  },

  burntOrange: {
    50: "#FFF8F3",
    100: "#FEEEDF",
    200: "#FCD8B8",
    300: "#F8BC86",
    400: "#F29A53",
    500: "#EA7B28",
    600: "#D7651B",
    700: "#AF4D14",
    800: "#85380F",
    900: "#5D260A",
  },

  warmBrown: {
    50: "#FAF8F7",
    100: "#F2EEEC",
    200: "#E2D8D2",
    300: "#CDBCB2",
    400: "#AE9586",
    500: "#8E7363",
    600: "#725A4E",
    700: "#59453C",
    800: "#40312A",
    900: "#291F1B",
  },

  sand: {
    50: "#FDFCFB",
    100: "#FAF7F2",
    200: "#F4EEE5",
    300: "#E9DECF",
    400: "#D8C5AF",
    500: "#C7AD8D",
    600: "#AE9371",
    700: "#8E775B",
    800: "#6E5B45",
    900: "#4E4030",
  },

  ivory: {
    50: "#FFFFFF",
    100: "#FFFEFC",
    200: "#FCFAF6",
    300: "#F8F3EC",
    400: "#F2EBE0",
    500: "#E9DECF",
    600: "#D6C6B1",
    700: "#B8A58D",
    800: "#96846F",
    900: "#746554",
  },

  warmGray: {
    50: "#FBFBFA",
    100: "#F6F5F3",
    200: "#ECEAE7",
    300: "#DDD8D2",
    400: "#BBB3AA",
    500: "#968B80",
    600: "#756A61",
    700: "#5A514A",
    800: "#403A35",
    900: "#282522",
  },

  espresso: {
    50: "#F8F7F6",
    100: "#ECE8E6",
    200: "#D8D0CC",
    300: "#BBAEA7",
    400: "#95837B",
    500: "#725E55",
    600: "#5B4943",
    700: "#453732",
    800: "#302522",
    900: "#1C1513",
  },

  feedback: {
    success: "#3FAE6B",
    warning: "#D89B22",
    error: "#D14B4B",
    info: "#4B84D1",
  },
} as const;

export type BrandColors = typeof brandColors;