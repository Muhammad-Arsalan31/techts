import { AppProps } from "next/app";
import Head from "next/head";
import { MantineProvider } from "@mantine/core";
import {
  JetBrains_Mono as FontMono,
  Inter as FontSans,
} from "next/font/google";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>Page title</title>
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          /** Put your mantine theme override here */
          colorScheme: "light",
          fontFamily: `${fontSans.style.fontFamily}, ${fontMono.variable}`,
          headings: {
            fontFamily: `${fontSans.style.fontFamily}, ${fontMono.variable}`,
          },
          colors: {
            primary: [
              "#b6b1e7",
              "#a39ee1",
              "#918adb",
              "#7f77d5",
              "#483cc3",
              "#4136af",
              "#39309c",
              "#322a88",
              "#2b2475",
              "#1f1a54",
            ],
          },
          primaryColor: "primary",
        }}
      >
        <Component {...pageProps} />
      </MantineProvider>
    </>
  );
}
