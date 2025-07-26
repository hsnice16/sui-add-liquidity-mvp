import { ThemeVars } from "@mysten/dapp-kit";

export const darkTheme: ThemeVars = {
  blurs: {
    modalOverlay: "blur(0)",
  },
  backgroundColors: {
    primaryButton: "#1E1E1E",
    primaryButtonHover: "#2A2A2A",
    outlineButtonHover: "#2E2E2E",
    modalOverlay: "rgba(0 0 0 / 40%)",
    modalPrimary: "#121212",
    modalSecondary: "#1A1A1A",
    iconButton: "transparent",
    iconButtonHover: "#2C2C2C",
    dropdownMenu: "#1F1F1F",
    dropdownMenuSeparator: "#333333",
    walletItemSelected: "#1C1C1C",
    walletItemHover: "#2A2A2A",
  },
  borderColors: {
    outlineButton: "#3A3A3A",
  },
  colors: {
    primaryButton: "#FFFFFF",
    outlineButton: "#FFFFFF",
    iconButton: "#FFFFFF",
    body: "#EDEDED",
    bodyMuted: "#A0A0A0",
    bodyDanger: "#FF9777",
  },
  radii: {
    small: "6px",
    medium: "8px",
    large: "12px",
    xlarge: "16px",
  },
  shadows: {
    primaryButton: "0px 4px 12px rgba(0, 0, 0, 0.3)",
    walletItemSelected: "0px 2px 6px rgba(0, 0, 0, 0.2)",
  },
  fontWeights: {
    normal: "400",
    medium: "500",
    bold: "600",
  },
  fontSizes: {
    small: "14px",
    medium: "16px",
    large: "18px",
    xlarge: "20px",
  },
  typography: {
    fontFamily:
      'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
    fontStyle: "normal",
    lineHeight: "1.3",
    letterSpacing: "1",
  },
};
