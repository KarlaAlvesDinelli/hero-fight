import { Inter } from 'next/font/google';
import './global.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Jornada do Herói'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en"  data-lt-installed="true">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
