import "./globals.css";
import Providers from "./Providers";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="./favicon.ico" type="image/x-icon" />
        <meta name="description" content="Where every book finds its place" />
        <title>Lymbrarie</title>
      </head>
      <body className="font-mono w-full min-h-screen flex justify-center items-start bg-slate-800 pt-10 pb-20">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
