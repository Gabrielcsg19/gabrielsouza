import { Flex, HStack, Container } from '@chakra-ui/react';
import Image from 'next/image';
import { ActiveLink } from '../ActiveLink';

export function Header() {
  return (
    <Container maxW={{ base: 'container.lg', '2xl': 'container.2xl' }}>
      <Flex as="header" h={85} align="center" justify="space-between">
        <Image
          src="/images/logo.svg"
          alt="Gabriel Souza's logo"
          width={69}
          height={61}
        />

        <HStack as="nav" spacing={65} h="85px" lineHeight="85px">
          <ActiveLink href="/">Início</ActiveLink>
          <ActiveLink href="/projects">Meus projetos</ActiveLink>
          <ActiveLink href="/about">Sobre mim</ActiveLink>
        </HStack>
      </Flex>
    </Container>
  );
}
