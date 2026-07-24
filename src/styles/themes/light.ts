import { semanticColors } from "@/styles/tokens/semantic/colors";

import { typography } from "@/styles/tokens/foundation/typography";
import { spacing } from "@/styles/tokens/foundation/spacing";
import { radius } from "@/styles/tokens/foundation/radius";
import { shadows } from "@/styles/tokens/foundation/shadows";

// serão adicionados conforme criarmos
// import { motion } from "@/styles/tokens/foundation/motion";
// import { breakpoints } from "@/styles/tokens/foundation/breakpoints";
// import { opacity } from "@/styles/tokens/foundation/opacity";
// import { zIndex } from "@/styles/tokens/foundation/zIndex";

export const lightTheme = {
  name: "light",

  colors: semanticColors,

  typography,

  spacing,

  radius,

  shadows,

  // motion,

  // breakpoints,

  // opacity,

  // zIndex,
} as const;

export type LightTheme = typeof lightTheme;