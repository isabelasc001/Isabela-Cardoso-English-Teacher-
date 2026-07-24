import { semanticColorsDark } from "@/styles/tokens/semantic/colors.dark";
import { typography } from "@/styles/tokens/foundation/typography";
import { spacing } from "@/styles/tokens/foundation/spacing";
import { radius } from "@/styles/tokens/foundation/radius";
import { shadows } from "@/styles/tokens/foundation/shadows";

export const darkTheme = {
  name: "dark",
  colors: semanticColorsDark,
  typography,
  spacing,
  radius,
  shadows,
} as const;

export type DarkTheme = typeof darkTheme;