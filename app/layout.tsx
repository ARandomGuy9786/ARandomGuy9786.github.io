import type { Metadata } from "next";
import { Bowlby_One, Schibsted_Grotesk, Sedgwick_Ave_Display } from "next/font/google";
import "./globals.css";

const bowlby = Bowlby_One({ weight: "400", subsets: ["latin"], variable: "--font-bowlby", display: "swap" });
const tag = Sedgwick_Ave_Display({ weight: "400", subsets: ["latin"], variable: "--font-tag", display: "swap" });
const body = Schibsted_Grotesk({ subsets: ["latin"], variable: "--font-body", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://arandomguy9786.github.io"),
  title: { default: "Min Htet Aung (Nicholas) · AI & security engineer", template: "%s · Min Htet Aung (Nicholas)" },
  description: "Min Htet Aung (Nicholas) builds multi-agent systems and security tooling in Bangkok, and proves they work by running them.",
  openGraph: { type: "website", siteName: "Min Htet Aung (Nicholas)" },
};

// Runs before paint: restore a saved theme (light otherwise, whatever the OS says) and mark JS as live,
// so the entrance animations start from their hidden state instead of flashing.
const boot = `try{if(localStorage.getItem('theme')==='dark')document.documentElement.setAttribute('data-theme','dark')}catch(e){}document.documentElement.classList.add('js');`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="light" className={`${bowlby.variable} ${tag.variable} ${body.variable}`} suppressHydrationWarning>
      <head>
        <script id="theme-boot" dangerouslySetInnerHTML={{ __html: boot }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
