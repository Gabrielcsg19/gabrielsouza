import { Flex, Container, FlexProps } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface PageContentProps extends FlexProps {
  children: ReactNode;
}

export function PageContent({ children, ...props }: PageContentProps) {
  return (
    <Flex bgImg="/images/background.svg" mt="2" {...props}>
      <Container
        h="inherit"
        maxW={{ base: 'container.lg', '2xl': 'container.2xl' }}
      >
        {children}
      </Container>
    </Flex>
  );
}
