import { EnvVarWarning } from "@/components/env-var-warning";
import HeaderAuth from "@/components/header-auth";
import { hasEnvVars } from "@/lib/utils/supabase/check-env-vars";
import { GeistSans } from "geist/font/sans";
import { ThemeProvider } from "next-themes";
import { Toaster } from "@/components/ui/sonner";
import Link from "next/link";
import "./globals.css";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { DashboardSidebar } from "@/components/dashboard/sidebar";

const defaultUrl = process.env.NEXT_PUBLIC_VERCEL_URL
  ? process.env.NEXT_PUBLIC_VERCEL_URL
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Paycasso",
  description: "Automated escrow agent that facilitates secure transactions",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.className} suppressHydrationWarning>
      <body className="bg-background overflow-x-hidden text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Toaster expand />
          <div className="w-full flex flex-col items-center min-h-screen">
            <div className="w-full flex justify-center">
            </div>
            <main className="flex-1 w-full flex flex-col items-center">
              {children}
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
