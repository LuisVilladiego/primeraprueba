import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Linux Academy - Tu academia personal de Linux, Cloud y DevOps",
  description: "Aprende Linux, administración de sistemas, Docker, Cloud, DevOps y más desde cero hasta nivel profesional.",
  keywords: ["Linux", "DevOps", "Cloud", "Docker", "Kubernetes", "AWS", "Tutorial", "Educación"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${inter.variable} h-full`} suppressHydrationWarning>
      <body className="min-h-full bg-zinc-50 font-sans antialiased dark:bg-zinc-950">
        {children}
      </body>
    </html>
  );
}
