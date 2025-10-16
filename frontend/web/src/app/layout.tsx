import './global.css';
import { Providers } from "../components/Providers";

export const metadata = {
  title: 'artvance - AI Art Generator',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="dark" lang="en">
      <body >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
