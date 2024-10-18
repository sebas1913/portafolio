import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "../styles/globals.scss";

export const metadata: Metadata = {
  title: 'Portafolio',
  description: 'Portafolio de Sebastián Osorno Castrillón',
  keywords: ['Next.js', 'Develop', 'Desarrollo', 'Desarrollador', 'TypeScript', 'Sebastián Osorno'],
  icons: {
    icon: '/images/logo.png'
  }
};

const raleway = Raleway({ subsets: ["latin"] });

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="es">
      <body className={raleway.className}>
        {children}
      </body>
    </html>
  );
}
