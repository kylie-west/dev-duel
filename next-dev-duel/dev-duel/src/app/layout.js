"use client";

import AppProvider from "../context/AppProvider";
import { Navbar } from "@/components";
import StyledComponentsRegistry from "./lib/registry";
import GlobalStyles from "@/GlobalStyles";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;600;800&family=Staatliches&display=swap"
          rel="stylesheet"
        />
      </head>
      <AppProvider>
        <GlobalStyles />
        <body>
          <Navbar />
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </body>
      </AppProvider>
    </html>
  );
}
