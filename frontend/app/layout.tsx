import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import "./globals.css";

const firaCode = Fira_Code({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Prathmesh | DevCP",
  description: "Developer Control Panel & System Architecture",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className="dark">
      <body
        className={`
        ${firaCode.className}
        bg-[#09090b]
        text-purple-400
        antialiased
        tracking-wide
        selection:bg-purple-500/30
        selection:text-purple-200
      `}>
        {children}
      </body>
    </html>
  );
}
