import type React from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div style={{ minHeight: "100vh" }}>{children}</div>;
}
