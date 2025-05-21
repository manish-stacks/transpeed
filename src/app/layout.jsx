
import "./globals.css";
import MainLayout from "@/components/MainLayout";

export const metadata = {
  title: "Transpeed Cargo",
  description: "Transpeed cargo is one of the best logistics company in delhi",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MainLayout>
            {children}
        </MainLayout>
      </body>
    </html>
  );
}
