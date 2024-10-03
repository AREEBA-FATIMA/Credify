import "./globals.css";
import { ReactNode } from "react";

export default function RootLayout({
  children,
}: { children: ReactNode }) {
  return (
    <html>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"
        />
      </head>
      <body>
        <header className="header">
          <section className="flex">
            <a href="#" className="logo">
              <i className="fas fa-credit-card"></i> CREDIFY
            </a>

            <nav className="navbar">
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#options">Options</a>
              <a href="#contact">Contact</a>
              <a href="#blogs">Blogs</a>
            </nav>

            <a href="#" className="btn">
              Get Started
            </a>

            <div id="menu-btn" className="fas fa-bars-staggered"></div>
          </section>
        </header>
        {children}
        <script src="/js/script.js" async></script>
      </body>
    </html>
  );
}
