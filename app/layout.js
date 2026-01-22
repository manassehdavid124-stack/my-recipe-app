import "./globals.css"; // Tailwind
import ClientProviders from "./providers"; // nested client component

export const metadata = {
  title: "My App",
  description: "Next.js + Tailwind App Router",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ClientProviders>
          {children}
        </ClientProviders>
      </body>
    </html>
  );
}
