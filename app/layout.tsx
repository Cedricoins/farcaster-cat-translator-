import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "🐱 Traducteur Miaou",
  description: "Traduis n'importe quelle phrase en langage de chat ! Partage sur Farcaster.",
  openGraph: {
    title: "🐱 Traducteur Miaou",
    description: "Miaou ! Traduis ta phrase en langage de chat.",
    url: "https://farcaster-cat-translator.vercel.app",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        <script src="https://warpcast.com/embed.js" async></script>
      </head>
      <body className={`${inter.className} bg-gradient-to-br from-pink-100 to-purple-100 min-h-screen`}>
        {children}
      </body>
    </html>
  );
}
