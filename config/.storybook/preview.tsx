import type { Preview } from "@storybook/react";
import 'app/styles/index.scss';
import React from "react";
import { BrowserRouter } from "react-router-dom";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    themes: [
      {name: 'Dark', class: ["app", "dark"], default: true}, 
      {name: 'Light', class: ["app", "light"]}, 
    ]
  },
  decorators: [(Story) => (<BrowserRouter><Story /></BrowserRouter>)]
};


export default preview;
