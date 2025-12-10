import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Brindavan Gardens | Brindavan Garden Mysore | Places in Mysore",
  description: "Your guide for Brindavan garden Mysore. Places in mysore that you would love. Learn all about brindavan gardens here. All parts of the garden well....",
   icons: {
    icon: [
      { url: '/Brindavan-45x45.png', sizes: '32x32', type: 'image/png' },
      { url: '/Brindavan-300x300.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: [
      { url: '/Brindavan-300x300.png', sizes: '180x180', type: 'image/png' },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
