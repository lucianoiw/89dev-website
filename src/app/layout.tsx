import { PropsWithChildren } from "react";
import type { Metadata } from "next";

import { dmSans, spaceGrotesk } from "@/styles/fonts";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "89dev - Tecnologia Inteligente para Impulsionar Negócios",
  description:
    "Especializada em desenvolvimento web, sistemas escaláveis e soluções com inteligência artificial. Mais de 25 anos de experiência em tecnologia.",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="pt-br">
      <body
        className={`${spaceGrotesk.variable} ${dmSans.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
