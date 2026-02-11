import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "dev.temilorun",
  description: "dev.temilorun Portfolio Page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/logo.png" />
      </head>
      <body
        className='antialiased'
      >
        {children}
      </body>
    </html>
  );
}
