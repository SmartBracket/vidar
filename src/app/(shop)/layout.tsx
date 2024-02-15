import type { Metadata } from "next";

import 'normalize.css';
import '@/assets/styles/global.scss'

import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

import Popup from "@/components/ui/Popup"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

import { useAppContext, AppContextWrapper } from "@/components/AppContext"

export const metadata: Metadata = {
  title: "Аптека Vidar",
  description: "Онлайн аптека.",
};


export default async function RootLayout({
  children,
  productModal
}: {
  children: React.ReactNode,
  productModal: React.ReactNode
}) {
  
  
  // const fetchData = await fetch('http://localhost:3000/api/shop',{method: 'GET' , cache: 'no-store'})
  // const data = await fetchData.json()
  // console.log(data)

  return (
    <html lang="en">
      <body className={`${inter.className}`}>
          <Header />
            <AppContextWrapper>
            {children}
            <Popup>{productModal}</Popup>
            </AppContextWrapper>
          <Footer />
      </body>
    </html>
  );
}
