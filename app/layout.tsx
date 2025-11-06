import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import { QueryProvider } from "@/components/providers/QueryProvider";
import { ThemeProvider } from "@/components/providers/ThemeProvider";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://pranoybasu.vercel.app'),
  title: {
    default: "Pranoy Basu - Software Engineer & Creative Developer",
    template: "%s | Pranoy Basu"
  },
  description: "Full-stack software engineer specializing in modern web technologies, React, Next.js, TypeScript, Three.js, and creative interactive experiences. View my portfolio, projects, and get in touch.",
  keywords: [
    "Pranoy Basu",
    "Software Engineer",
    "Full Stack Developer",
    "Web Developer",
    "React Developer",
    "Next.js",
    "TypeScript",
    "Three.js",
    "3D Web Development",
    "Frontend Engineer",
    "Backend Engineer",
    "Portfolio",
    "Creative Developer",
    "JavaScript",
    "Node.js",
    "MongoDB",
    "E-commerce",
    "Disease Tracker",
    "Data Visualization"
  ],
  authors: [{ name: "Pranoy Basu", url: "https://pranoybasu.vercel.app" }],
  creator: "Pranoy Basu",
  publisher: "Pranoy Basu",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://pranoybasu.vercel.app",
    siteName: "Pranoy Basu Portfolio",
    title: "Pranoy Basu - Software Engineer & Creative Developer",
    description: "Full-stack software engineer specializing in modern web technologies, React, Next.js, TypeScript, Three.js, and creative interactive experiences.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Pranoy Basu - Software Engineer Portfolio",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pranoy Basu - Software Engineer & Creative Developer",
    description: "Full-stack software engineer specializing in modern web technologies, React, Next.js, TypeScript, Three.js, and creative interactive experiences.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} font-sans antialiased`}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange={false}
        >
          <QueryProvider>
            {children}
          </QueryProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}