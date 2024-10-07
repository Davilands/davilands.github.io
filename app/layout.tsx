import { useState } from 'react';

import type { Metadata } from 'next'
import { Inter } from 'next/font/google';
import Header from '@/app/header/page';
import Menu from '@/app/menu/page';
import Footer from '@/app/footer/page';
import Login from '@/app/login/page';
import Link from 'next/link';
const inter = Inter({ subsets: ['latin'] })


import '@/styles/globals.css';
import '@/styles/layout.css';
import '@/styles/main.css';
import '@/styles/mode.css';


export const metadata: Metadata = {
  title: 'DaviTek',
  description: 'DaviLands Technology',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <head>
        <link href="https://unpkg.com/boxicons@2.1.1/css/boxicons.min.css" rel="stylesheet" />
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" />

        {/* <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" />
        <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"></script> */}
      </head>
      <body>
        <Header />


        <div className="main">
          <Menu />
          {/* <Login /> */}
          <div className="container">
            {/* <Slides /> */}
            {children}
            {/* <div className='content'>
              {children}
            </div> */}
          </div>
        </div>

        {/* <Footer /> */}
      </body>
    </html>
  )
}
