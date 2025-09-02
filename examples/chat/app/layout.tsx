import type { Metadata } from "next"
import "./globals.scss"

export const metadata: Metadata = {
  title: "NexTauri Example Chat",
  description: "An example to demonstrate how to use NexTauri with pg/sqlite.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
