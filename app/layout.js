import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import Header from "@/components/main/Header";
import Footer from "@/components/main/Footer";
import Stack from "@/components/main/Stack";
import Social from "@/components/main/Social";

export const metadata = {
  title: "JahByte Technologies",
  description:
    "Welcome to Jahbyte Technologies, your go to for your web and mobile app development",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <Stack />
        <Social />
        {children}
        <Footer />
      </body>
    </html>
  );
}
