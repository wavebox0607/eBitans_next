import { Archivo } from "next/font/google";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import "./globals.css";
import Footer from "@/components/common/Footer";
import ScrollToTop from "@/lib/ScrollToTop";
import { AOSInit } from "./aos";
import { ThemeContextProvider } from "@/context/ThemeContext";
import ThemeProvider from "@/providers/ThemeProvider";
import { dir } from "i18next";
import i18nConfig from "../../../i18nConfig";

const archivo = Archivo({ subsets: ["latin"], display: 'swap' });

export const metadata = {
  title: {
    default: "eBitans - E-Commerce Website Builder in Bangladesh",
    template: "%s | eBitans"
  },
  keywords: ['e-commerce', 'website', 'ebitans'],
  description: "Looking to launch your online store in Bangladesh? Discover top E-commerce website builder customized for the Bangladeshi market. Create a personalized, user-friendly E-commerce to showcase your products and grow your business online now.",
  twitter: {
    card: "summary_large_image"
  },
  openGraph: {
    images: 'https://ebitans.com/Image/ebitans-website-builder-Social-Preview-image.png',
    width: 1200,
    height: 630,
  },
};

export function generateStaticParams() {
  return i18nConfig.locales.map(locale => ({ locale }));
}

export default async function RootLayout({ children, params: { locale } }) {

  return (
    <html lang={locale} dir={dir(locale)}>
      <AOSInit />
      <body className={archivo.className}>
        <ScrollToTop />
        <div className='absolute top-0 left-0 bottom-0 h-full w-full lg:grid grid-cols-6 divide-x hidden'>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <ToastContainer position="top-right" newestOnTop />
        <ThemeContextProvider>
          <ThemeProvider>
            <div className="min-h-screen">{children}</div>
            <Footer locale={locale} />
          </ThemeProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
