import { brandColors } from "../brand/colors";

export const semanticColorsDark = {
  background: {
    default: brandColors.espresso[900],
    subtle: brandColors.espresso[800],
    muted: brandColors.espresso[700],
    inverse: brandColors.ivory[50],
  },

  surface: {
    default: brandColors.espresso[800],
    card: brandColors.espresso[700],
    elevated: brandColors.espresso[600],
    hover: brandColors.espresso[700],
    pressed: brandColors.espresso[600],
    disabled: brandColors.warmGray[800],
  },

  text: {
    primary: brandColors.ivory[100],
    secondary: brandColors.ivory[300],
    tertiary: brandColors.ivory[500],
    disabled: brandColors.warmGray[500],
    inverse: brandColors.espresso[900],
    link: brandColors.terracotta[400],
  },

  border: {
    default: brandColors.warmGray[700],
    subtle: brandColors.espresso[600],
    strong: brandColors.warmGray[500],
    focus: brandColors.terracotta[500],
    error: brandColors.feedback.error,
  },

  brand: {
    primary: brandColors.terracotta[500],
    secondary: brandColors.burntOrange[400],
    hover: brandColors.terracotta[400],
    active: brandColors.terracotta[300],
    soft: brandColors.terracotta[900],
  },

  feedback: {
    success: brandColors.feedback.success,
    warning: brandColors.feedback.warning,
    error: brandColors.feedback.error,
    info: brandColors.feedback.info,
  },

  button: {
    primary: {
      background: brandColors.terracotta[500],
      hover: brandColors.terracotta[400],
      active: brandColors.terracotta[300],
      text: brandColors.ivory[50],
      disabled: brandColors.warmGray[600],
    },

    secondary: {
      background: brandColors.espresso[700],
      hover: brandColors.espresso[600],
      active: brandColors.espresso[500],
      text: brandColors.ivory[100],
    },

    ghost: {
      hover: brandColors.espresso[700],
      active: brandColors.espresso[600],
      text: brandColors.ivory[100],
    },
  },

  input: {
    background: brandColors.espresso[800],
    border: brandColors.warmGray[600],
    hover: brandColors.warmGray[500],
    focus: brandColors.terracotta[500],
    placeholder: brandColors.warmGray[400],
    text: brandColors.ivory[100],
  },

  sidebar: {
    background: brandColors.espresso[900],
    border: brandColors.espresso[700],
    item: brandColors.ivory[300],
    itemHover: brandColors.terracotta[900],
    itemActive: brandColors.terracotta[500],
    itemActiveBackground: brandColors.terracotta[900],
  },

  header: {
    background: brandColors.espresso[900],
    border: brandColors.espresso[700],
  },

  card: {
    background: brandColors.espresso[800],
    border: brandColors.espresso[600],
    hover: brandColors.espresso[700],
  },

  badge: {
    neutral: brandColors.espresso[700],
    primary: brandColors.terracotta[900],
    success: "#1A3D2A",
    warning: "#3D3020",
    error: "#3D2020",
  },

  progress: {
    background: brandColors.espresso[700],
    fill: brandColors.terracotta[500],
  },

  chat: {
    userBubble: brandColors.terracotta[600],
    userText: brandColors.ivory[50],

    assistantBubble: brandColors.espresso[700],
    assistantText: brandColors.ivory[100],
  },

  overlay: {
    default: "rgba(0,0,0,.50)",
    strong: "rgba(0,0,0,.70)",
  },

  focus: {
    ring: brandColors.terracotta[500],
  },

  auth: {
    offWhite: brandColors.offWhite,
    panelStart: brandColors.terracotta[600],
    panelEnd: brandColors.terracotta[700],
    rowSelectedBackground: brandColors.espresso[700],
    rowSelectedBorder: brandColors.espresso[600],
    badgeBackground: brandColors.terracotta[900],
  },
} as const;

export type SemanticColorsDark = typeof semanticColorsDark;
