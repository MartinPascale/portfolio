import { ReactNode } from 'react';
import { Box, Link } from '@chakra-ui/react';
import Chakra from './chakra';
import '../styles/globals.css';

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <Chakra>
          <header>
            <Box as="nav" padding="20px">
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
