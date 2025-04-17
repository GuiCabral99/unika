import "./globals.css";

export const metadata = {
  title: "Unika Crédito & Soluções",
  description: "Transformando crédito em oportunidade.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="max-w-[1040px] m-auto shadow-2xl">{children}</body>
    </html>
  );
}
