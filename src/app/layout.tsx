import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { AuthProvider } from "@/contexts/AuthContext";
import { CartProvider } from "@/contexts/CartContext";
import { SearchProvider } from "@/contexts/SearchContext";

export const metadata: Metadata = {
  title: "Cacau Show - A maior fábrica de chocolates",
  description: "Na Cacau Show, cada chocolate é feito para transformar momentos simples em experiências especiais. Trufas irresistíveis, tabletes cremosos, bombons artesanais e presentes de chocolate.",
  keywords: ["Cacau Show", "chocolate", "Páscoa", "presentes", "bombons", "trufas"],
  authors: [{ name: "Cacau Show" }],
  openGraph: {
    title: "Cacau Show - A maior fábrica de chocolates",
    description: "Descubra o mundo Cacau Show e viva momentos doces, cheio de sabor, afeto e boas lembranças.",
    url: "https://cacaushow.com.br",
    siteName: "Cacau Show",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cacau Show",
    description: "A maior fábrica de chocolates do Brasil",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className="antialiased bg-background text-foreground">
        <ThemeProvider defaultTheme="light" switchable={false}>
          <AuthProvider>
            <CartProvider>
              <SearchProvider>
                {children}
                <Toaster />
              </SearchProvider>
            </CartProvider>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
