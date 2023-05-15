import { ThemeOptions } from "@mui/material/styles";
import { typographyStylesOverrides } from "./overrides/components/TypographyFontStyle";
import { componetnsOverrides } from "./overrides/components";
import { typographyOverride } from "./overrides/components/Typography";

const darkThemeOptions: ThemeOptions = {
  palette: {
    mode: "dark",
    text: {
      primary: "#FFFFFF",
      secondary: "#d28994",
      success: "#01ab55",
    },
    background: {
      default: "#003c3b",
      paper: "#43685D",
      header: "#003c3b",
      avatar: "#FFFFFF",
    },
    primary: {
      main: "#fc9915",
    },
  },
  // shape: { ...shapOverrides },
  typography: { ...typographyStylesOverrides, ...typographyOverride },

  components: {
    ...componetnsOverrides,
  },
};

export default darkThemeOptions;
