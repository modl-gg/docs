import { RootProvider } from 'fumadocs-ui/provider/next';
import './global.css';
import { Inter, Audiowide } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
});

const audiowide = Audiowide({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-audiowide',
});

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={`${inter.className} ${audiowide.variable}`} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider search={{ enabled: false }}>{children}</RootProvider>
      </body>
    </html>
  );
}
