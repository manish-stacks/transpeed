import CanonicalTag from "@/components/CanonicalTag";
import "./globals.css";
import MainLayout from "@/components/MainLayout";

export const metadata = {
  title: "Transpeed Cargo",
  description: "Transpeed cargo is one of the best logistics company in delhi",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL}`,
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <CanonicalTag />
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
