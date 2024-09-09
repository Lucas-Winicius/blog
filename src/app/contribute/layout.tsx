import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contribute",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
