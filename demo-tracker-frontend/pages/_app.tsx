import "../styles/globals.css";
import type { AppProps } from "next/app";
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "../styles/theme";
import createCache from "@emotion/cache";
import rtlPlugin from "stylis-plugin-rtl";

import { prefixer } from "stylis";
import { CacheProvider } from "@emotion/react";
import { Toaster } from "react-hot-toast";

const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
        <Toaster />
      </ThemeProvider>
    </CacheProvider>
  );
}

export default MyApp;
