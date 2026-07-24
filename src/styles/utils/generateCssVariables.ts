import { semanticColors } from "../tokens/semantic/colors";
import { semanticColorsDark } from "../tokens/semantic/colors.dark";

type ColorValue = string | { [key: string]: ColorValue };

function flattenColorsDeep(obj: ColorValue, prefix: string = "--color"): Record<string, string> {
  const result: Record<string, string> = {};

  for (const [key, value] of Object.entries(obj)) {
    const varName = prefix ? `${prefix}-${key}` : `--${key}`;
    
    if (typeof value === "string") {
      result[varName] = value;
    } else {
      Object.assign(result, flattenColorsDeep(value, varName));
    }
  }

  return result;
}

export function generateCssVariables(theme: "light" | "dark"): Record<string, string> {
  const colors = theme === "light" ? semanticColors : semanticColorsDark;
  return flattenColorsDeep(colors);
}

export function generateCssString(theme: "light" | "dark", indent: string = "  "): string {
  const variables = generateCssVariables(theme);
  const lines = Object.entries(variables).map(([key, value]) => `${indent}${key}: ${value};`);
  return lines.join("\n");
}

export function generateFullCss(): string {
  return `
:root {
  color-scheme: light dark;
}

[data-theme="light"] {
${generateCssString("light", "  ")}
}

[data-theme="dark"] {
${generateCssString("dark", "  ")}
}

* {
  transition: background-color 0.2s ease, color 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
}
`;
}
