import { Flex, HStack, Container, Image } from '@chakra-ui/react';
import { ActiveLink } from '../ActiveLink';

export function Header() {
  return (
    <Flex as="header" h={85}>
      <Container maxW={{ base: 'container.lg', '2xl': 'container.2xl' }}>
        <Flex align="center" justify="space-between">
          <Image
            src="/images/logo.svg"
            alt="Gabriel Souza's logo"
            width="55px"
          />

          <HStack as="nav" spacing={65} h="85px" lineHeight="85px">
            <ActiveLink href="/">Início</ActiveLink>
            <ActiveLink href="/projects">Meus projetos</ActiveLink>
            <ActiveLink href="/about">Sobre mim</ActiveLink>
          </HStack>
        </Flex>
      </Container>
    </Flex>
  );
}
