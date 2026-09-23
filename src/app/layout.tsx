import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Kalam } from "next/font/google";

import "./globals.css";

import { ThemeProvider } from "@/components/providers/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { MotionProvider } from "@/components/providers/motion-provider";
import { SiteShell } from "@/components/layout/site-shell";

import { profile } from "@/content/profile";

import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const handwritten = Kalam({
  variable: "--font-kalam",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  preload: false,
});

const siteDescription =
  "Portfolio of Alessandro Argenziano, a software developer building web applications across frontend, backend, and DevOps.";

export const metadata: Metadata = {
  metadataBase: new URL(profile.contact.website),

  title: {
    default: "Alessandro Argenziano - Software Developer",
    template: "%s | Alessandro Argenziano",
  },

  description: siteDescription,

  alternates: {
    canonical: "/",
  },

  authors: [
    {
      name: profile.name,
      url: profile.contact.website,
    },
  ],

  creator: profile.name,

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: `${profile.name} Portfolio`,
    title: "Alessandro Argenziano - Software Developer",
    description: siteDescription,
  },

  twitter: {
    card: "summary_large_image",
    title: "Alessandro Argenziano - Software Developer",
    description: siteDescription,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${handwritten.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <TooltipProvider>
            <MotionProvider>
              <SiteShell>{children}</SiteShell>
            </MotionProvider>
          </TooltipProvider>
        </ThemeProvider>

        <Analytics />
      </body>
    </html>
  );
}
