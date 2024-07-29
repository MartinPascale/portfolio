import { ReactNode } from 'react';
import { Box, Link } from '@chakra-ui/react';
import Chakra from './chakra';
import '../styles/globals.css';
import '../styles/crt-effect.css';

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className="crt-effect tv-frame tv-screen">
        <Chakra>
          <header>
            <Box as="nav" padding="20px" mt="-30px">
              <Link href="/" marginRight="10px">
                Home
              </Link>
              <Link href="/about" marginRight="10px">
                About
              </Link>
              <Link href="/projects">Projects</Link>
            </Box>
          </header>
          <main>{children}</main>
        </Chakra>
      </body>
    </html>
  );
}
