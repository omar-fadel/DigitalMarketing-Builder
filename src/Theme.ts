import { createMuiTheme } from "@material-ui/core";
import { green, purple } from "@material-ui/core/colors";

const theme = createMuiTheme({
    palette: {
      primary: {
        main: purple[500],
      },
      secondary: {
        main: green[500],
      },
    },
    overrides: {
        MuiTab: {
            root: {
                textTransform: 'capitalize',
                minHeight: 0
            }
        },
        MuiTabs: {
            root: {
                minHeight: 0
            }
        }
    },
  });

  export default theme;