import { muiTheme } from "storybook-addon-material-ui";
import theme from '../src/Theme';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: { expanded: true }
}
export const decorators = [
	muiTheme([theme])
];