import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NuqsAdapter } from "nuqs/adapters/next/app";

import { ConvexClientProvider } from "@/components/convex-client-provider";
import { Toaster } from "sonner";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Docs",
  description: "Google Docs Clone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <NuqsAdapter>
          <Toaster theme="light" closeButton richColors />
          <ConvexClientProvider>{children}</ConvexClientProvider>
        </NuqsAdapter>
      </body>
    </html>
  );
}
