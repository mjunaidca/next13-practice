import "./globals.css";
import { Container } from "./components/container";
import { Header } from "./components/header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <div>
          <Header />
      <main className="pt=[var(--navigation-height)]">
        {children}
      </main>
          <footer>
            <Container>footer here</Container>
          </footer>
        </div>
      </body>
    </html>
  );
}
