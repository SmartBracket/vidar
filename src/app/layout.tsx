import type { Metadata } from "next";


import 'normalize.css';
import '@/assets/styles/global.scss'


import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });


import Header from "@/components/Header"
import Footer from "@/components/Footer"


import { AppContextWrapper } from "@/components/AppContext"
import PageWrapper from '@/components/ui/PageWrapper'

import { SpeedInsights } from "@vercel/speed-insights/next"

export const metadata: Metadata = {
  title: "Аптека Vidar",
  description: "Онлайн аптека.",
};

export default async function RootLayout({
  children
}: {
  children: React.ReactNode,
  productModal: React.ReactNode
}) {
  return (
    
      <html lang="en">
        <body className={`${inter.className}`}>
          <AppContextWrapper>
            <Header />
              <PageWrapper>
                {children}
              </PageWrapper>
            <Footer />
          </AppContextWrapper>
        </body>
      </html>
 
  );
}
