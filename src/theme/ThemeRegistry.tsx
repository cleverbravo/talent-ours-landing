"use client";

import { useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import { useServerInsertedHTML } from "next/navigation";
import theme from "./index";

export default function ThemeRegistry({ children }: { children: React.ReactNode }) {
  const [cache] = useState(() => {
    const c = createCache({ key: "mui", prepend: true });
    c.compat = true;
    return c;
  });

  useServerInsertedHTML(() => {
    return (
      <style
        data-emotion={`${cache.key} global`}
        dangerouslySetInnerHTML={{
          __html: Object.values(cache.inserted).join(" "),
        }}
      />
    );
  });

  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </CacheProvider>
  );
}
