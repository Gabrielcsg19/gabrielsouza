import { Flex, Container } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface PageContentProps {
  children: ReactNode;
}

export function PageContent({ children }: PageContentProps) {
  return (
    <Flex
      bgImg="/images/background.svg"
      h="calc(100vh - 85px)"
      bgSize="cover"
      mt="2"
    >
      <Container
        h="inherit"
        maxW={{ base: 'container.lg', '2xl': 'container.2xl' }}
      >
        {children}
      </Container>
    </Flex>
  );
}
