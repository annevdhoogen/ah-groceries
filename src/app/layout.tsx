import type { Metadata } from "next";
import { Roboto_Flex } from "next/font/google";
import "@/style/global.css";
import * as styles from "@/style/main.css";
import { Navigation } from "@components/navigation/navigation";
import { WeekMenuProvider } from "./contexts/WeekmenuContext";

const font = Roboto_Flex({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Weekly Groceries",
  description: "Quickly add weekmenu to AH cart",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <WeekMenuProvider>
      <html lang="en">
        <head>
          <meta name="view-transition" content="same-origin" />
        </head>
        <body className={font.className}>
          <Navigation />
          <main className={styles.main}>{children}</main>
        </body>
      </html>
    </WeekMenuProvider>
  );
}
