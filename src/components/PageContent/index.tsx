import { Flex, Container, ContainerProps } from '@chakra-ui/react';
import { ReactNode } from 'react';
import Head from 'next/head';

import { Header } from '../Header';
import { Sidebar } from '../Sidebar';

interface PageContentProps extends ContainerProps {
  children: ReactNode;
}

export function PageContent({ children, ...props }: PageContentProps) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, user-scalable=no"
        />
        <title>Gabriel Souza</title>
      </Head>
      <Header />
      <Sidebar />
      <Flex>
        <Container {...props}>{children}</Container>
      </Flex>
    </>
  );
}
