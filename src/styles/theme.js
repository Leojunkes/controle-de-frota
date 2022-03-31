import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    Colors: {
      white: "#ffffff",
      waterGreen: "71BDD2",
      gray: "#313131",
      green: "#41710E",
      lightGreen: "#E0F7CD",
      gelo: "#DEE2E6",
      gray900: "#181B23",
      rosinha: "#f5e9f7",
      yellow: "#f9bd07",
      orange: "#e94b1b",
      ligthBlue: "#0b88ca",
    },
  },
  styles: {
    global: {
      body: {
        bg: "Colors.white",
        color: "Colors.gray",
      },
    },
  },
  fonts: {
    heading: "Roboto",
    body: "Roboto",
  },
});
