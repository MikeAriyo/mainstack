import "./globals.css";
import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import { Providers } from "@/redux/Provider";

const font = Figtree({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mainstack",
  description: "Modern Software and Embedded Payments for Entrepreneurs",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
