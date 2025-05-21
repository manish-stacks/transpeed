"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Layout from "./admin/Layout";

const MainLayout = ({ children }) => {
  const pathname = usePathname();
  const isAdminRoute = pathname.startsWith("/admin");

  console.log(isAdminRoute);
  if (isAdminRoute) {
    return <Layout>{children}</Layout>;
  }

  return (
    <>
      <main className="min-h-screen relative overflow-hidden">
        <Header />
        {children}
        <Footer />
      </main>
    </>
  );
};

export default MainLayout;
