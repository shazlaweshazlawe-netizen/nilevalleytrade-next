import './globals.css'
import Head from 'next/head'

export const metadata = {
  title: 'Nile Valley Trade — Quality Driven',
  description: 'Nile Valley Trade — Quality Driven. Packed food, canned food, citrus, seeds.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap" rel="stylesheet" />
      </Head>
      <body className='bg-white'>
        {children}
      </body>
    </html>
  )
}
