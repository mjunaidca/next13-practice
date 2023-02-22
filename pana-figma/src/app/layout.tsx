// import './globals.css'

import Wrapper from "@/components/Wrapper"
import Navbar from "@/views/Navbar"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <Navbar />
          <Wrapper>
            {children}
          </Wrapper>
        </body>
    </html>
  )
}
