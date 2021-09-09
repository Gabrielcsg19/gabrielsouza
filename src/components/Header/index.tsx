import {
  Flex,
  HStack,
  Container,
  Image,
  IconButton,
  Icon,
  useBreakpointValue,
} from '@chakra-ui/react';
import { RiMenuLine } from 'react-icons/ri';

import { useSidebarDrawer } from '../../context/SidebarDrawerContext';
import { ActiveLink } from './ActiveLink';

export function Header() {
  const isMobileVersion = useBreakpointValue({ base: true, md: false });
  const { onOpen } = useSidebarDrawer();

  return (
    <Flex as="header" h={['70px', '85px']} align="center" bg="gray.900">
      <Container maxW="container.lg">
        <Flex align="center" justify="space-between">
          <Image
            src="/images/logo.svg"
            alt="Gabriel Souza's logo"
            width={['40px', '55px']}
          />

          {isMobileVersion ? (
            <IconButton
              aria-label="Open navigation"
              icon={<Icon as={RiMenuLine} />}
              variant="unstyled"
              fontSize="24"
              onClick={onOpen}
            />
          ) : (
            <HStack as="nav" spacing={65} h="85px" lineHeight="85px">
              <ActiveLink href="/">Início</ActiveLink>
              <ActiveLink href="/projects">Meus projetos</ActiveLink>
              <ActiveLink href="/about">Sobre mim</ActiveLink>
            </HStack>
          )}
        </Flex>
      </Container>
    </Flex>
  );
}
