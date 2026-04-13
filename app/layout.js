import "./globals.css";

export const metadata = {
  title: "My Recipe App",
  description: "Recipe finder with Django backend",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}