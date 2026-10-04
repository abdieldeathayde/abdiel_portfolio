import type { Metadata } from "next";
import "./globals.css";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : undefined);

export const metadata: Metadata = {
  ...(siteUrl ? { metadataBase: new URL(siteUrl) } : {}),
  title: "Abdiel de Athayde | Desenvolvedor Back-end Java",
  description:
    "Portfólio de Abdiel de Athayde: desenvolvimento back-end com Java, Spring Boot, MySQL e Docker, além de experiência com APIs RESTful, automação e infraestrutura.",
  openGraph: {
    title: "Abdiel de Athayde | Desenvolvedor Back-end Java",
    description:
      "Desenvolvimento back-end com Java, Spring Boot, MySQL e Docker. Conheça meus projetos e minha trajetória.",
    ...(siteUrl ? { images: ["/assets/foto-perfil.jpeg"] } : {}),
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
