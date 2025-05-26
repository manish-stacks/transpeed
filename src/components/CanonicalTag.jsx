// components/CanonicalTag.jsx
"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

const CanonicalTag = () => {
  const pathname = usePathname();

  useEffect(() => {
    const canonicalUrl = `${window.location.origin}${pathname}`;

    let link = document.querySelector("link[rel='canonical']");
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      document.head.appendChild(link);
    }
    link.setAttribute("href", canonicalUrl);
  }, [pathname]);

  return null;
};

export default CanonicalTag;
