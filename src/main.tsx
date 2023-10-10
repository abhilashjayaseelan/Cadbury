import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { Provider } from "react-redux";

import { ChakraProvider, extendTheme} from "@chakra-ui/react";

import store from "./redux/store.ts";

const theme = extendTheme({
  colors: {
    brand: {
      100: "#e6f0ff",
      500: "#0063ff"
    },
  },
})

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
    </Provider>
  </React.StrictMode>
);
