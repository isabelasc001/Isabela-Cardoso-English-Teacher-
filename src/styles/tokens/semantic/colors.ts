import { brandColors } from "../brand/colors";

/**
 * -------------------------------------------------------
 * Semantic Colors
 * -------------------------------------------------------
 *
 * Este arquivo traduz a identidade visual da marca
 * para intenções de uso.
 *
 * Componentes devem utilizar SOMENTE este arquivo.
 *
 */

export const semanticColors = {
  background: {
    default: brandColors.ivory[100],
    subtle: brandColors.ivory[300],
    muted: brandColors.sand[100],
    inverse: brandColors.espresso[900],
  },

  surface: {
    default: brandColors.ivory[50],
    card: brandColors.sand[100],
    elevated: brandColors.ivory[50],
    hover: brandColors.sand[200],
    pressed: brandColors.sand[300],
    disabled: brandColors.warmGray[100],
  },

  text: {
    primary: brandColors.espresso[900],
    secondary: brandColors.warmBrown[700],
    tertiary: brandColors.warmBrown[500],
    disabled: brandColors.warmGray[500],
    inverse: brandColors.ivory[50],
    link: brandColors.terracotta[600],
  },

  border: {
    default: brandColors.warmGray[200],
    subtle: brandColors.ivory[500],
    strong: brandColors.warmGray[400],
    focus: brandColors.terracotta[500],
    error: brandColors.feedback.error,
  },

  brand: {
    primary: brandColors.terracotta[600],
    secondary: brandColors.burntOrange[500],
    hover: brandColors.terracotta[700],
    active: brandColors.terracotta[800],
    soft: brandColors.terracotta[100],
  },

  feedback: {
    success: brandColors.feedback.success,
    warning: brandColors.feedback.warning,
    error: brandColors.feedback.error,
    info: brandColors.feedback.info,
  },

  button: {
    primary: {
      background: brandColors.terracotta[600],
      hover: brandColors.terracotta[700],
      active: brandColors.terracotta[800],
      text: brandColors.ivory[50],
      disabled: brandColors.warmGray[300],
    },

    secondary: {
      background: brandColors.sand[200],
      hover: brandColors.sand[300],
      active: brandColors.sand[400],
      text: brandColors.espresso[900],
    },

    ghost: {
      hover: brandColors.ivory[300],
      active: brandColors.ivory[400],
      text: brandColors.espresso[900],
    },
  },

  input: {
    background: brandColors.ivory[50],
    border: brandColors.warmGray[200],
    hover: brandColors.warmGray[300],
    focus: brandColors.terracotta[500],
    placeholder: brandColors.warmGray[500],
    text: brandColors.espresso[900],
  },

  sidebar: {
    background: brandColors.sand[100],
    border: brandColors.sand[300],
    item: brandColors.espresso[700],
    itemHover: brandColors.terracotta[100],
    itemActive: brandColors.terracotta[600],
    itemActiveBackground: brandColors.terracotta[50],
  },

  header: {
    background: brandColors.ivory[50],
    border: brandColors.ivory[400],
  },

  card: {
    background: brandColors.ivory[50],
    border: brandColors.ivory[400],
    hover: brandColors.sand[100],
  },

  badge: {
    neutral: brandColors.sand[300],
    primary: brandColors.terracotta[100],
    success: "#EAF8EF",
    warning: "#FFF6E5",
    error: "#FCEAEA",
  },

  progress: {
    background: brandColors.sand[200],
    fill: brandColors.terracotta[600],
  },

  chat: {
    userBubble: brandColors.terracotta[600],
    userText: brandColors.ivory[50],

    assistantBubble: brandColors.ivory[300],
    assistantText: brandColors.espresso[900],
  },

  overlay: {
    default: "rgba(28,21,19,.40)",
    strong: "rgba(28,21,19,.60)",
  },

  focus: {
    ring: brandColors.terracotta[400],
  },
} as const;

export type SemanticColors = typeof semanticColors;