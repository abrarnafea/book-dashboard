import './globals.css'
import { inter } from '@/components/shared/fonts'
import { APP_DESCRIPTION, APP_NAME, SERVER_URL } from '@/lib/constants'
import { Metadata } from 'next'
import { ThemeProvider } from 'next-themes'
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: {
    template: `%s | ${APP_NAME}`,
    default: APP_NAME,
  },
  description: APP_DESCRIPTION,
  metadataBase: new URL(SERVER_URL),
}
export const experimental_ppr = true
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
      <ThemeProvider
     attribute="class"
     defaultTheme="system"
     enableSystem
     disableTransitionOnChange
   >
      <Toaster />

     {children}
   </ThemeProvider>
      </body>
    </html>
  )
}