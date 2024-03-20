import type { Metadata } from "next";


import 'normalize.css';
import '@/assets/styles/global.scss'


import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

import AppSession from '@/components/AppSession'

import Header from "@/components/Header"
import Footer from "@/components/Footer"


import { AppContextWrapper } from "@/components/AppContext"
import PageWrapper from '@/components/ui/PageWrapper'


import { SpeedInsights } from "@vercel/speed-insights/next"


export const metadata: Metadata = {
  title: {
    template: '%s | Аптека Vidar',
    default : "Аптека Vidar",
  },
  description: "Онлайн аптека.",
  openGraph: {
    title: 'Аптека Vidar',
    description: 'Онлайн аптека.',
    images: '/logo.png'
  },
};

export default async function RootLayout({
  children
}: {
  children: React.ReactNode
}) {

  return (
      <html lang="en">
        <body className={`${inter.className}`}>
          {/* <AppSession> */}
            <AppContextWrapper>
              <Header />
                <PageWrapper>
                  {children}
                  <strong>Test Branch</strong>
                </PageWrapper>
              <Footer />
            </AppContextWrapper>
            <SpeedInsights />
          {/* </AppSession> */}
        </body>
      </html>
 
  );
}
