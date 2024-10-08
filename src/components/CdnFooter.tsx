"use client";

import { usePathname } from "next/navigation";
import Footer from "./Footer";

const ConditionalFooter = () => {
  const pathname = usePathname();
  const skipHeaderRoutes = ["/update-password", "/forgot-password", "/verify-OTP"];

  if (skipHeaderRoutes.includes(pathname)) {
    return null;
  }

  return (
    <>
      <Footer />
    </>
  );
};

export default ConditionalFooter;
