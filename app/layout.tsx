import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SimpleBayar",
  description:
    "SimpleBayar adalah penyedia solusi teknologi yang membantu bisnis di Indonesia dengan hosting website, keamanan siber, dan konsultasi IT.",
  metadataBase: new URL("https://simplebayar.vercel.app/"),
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "SimpleBayar",
    description:
      "SimpleBayar adalah penyedia solusi teknologi yang membantu bisnis di Indonesia dengan hosting website, keamanan siber, dan konsultasi IT.",
    url: "/",
    siteName: "SimpleBayar",
    images: [
      {
        url: "/favicon.png",
        width: 1200,
        height: 630,
        alt: "SimpleBayar Logo",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
