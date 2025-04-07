
import Header from "@/components/Header";
import "./globals.css";
import Footer from "@/components/Footer";


export const metadata = {
  title: "Transpeed Cargo",
  description: "Transpeed cargo is one of the best logistics company in delhi",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body>
        <main className="min-h-screen relative overflow-hidden">
          <Header />
          {children}
          <Footer />
        </main>
        </body>
    </html >
  );
}
