import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create new post",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
