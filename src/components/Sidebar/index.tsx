import { VStack } from '@chakra-ui/layout';
import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
  DrawerHeader,
} from '@chakra-ui/modal';
import { useSidebarDrawer } from '../../context/SidebarDrawerContext';
import { ActiveLink } from '../Header/ActiveLink';

export function Sidebar() {
  const { isOpen, onClose } = useSidebarDrawer();
  return (
    <Drawer isOpen={isOpen} onClose={onClose} placement="left" size="full">
      <DrawerOverlay />
      <DrawerContent bg="gray.900">
        <DrawerCloseButton />
        <DrawerHeader>Navegação</DrawerHeader>
        <DrawerBody>
          <VStack as="nav" spacing={65} h="85px" lineHeight="85px">
            <ActiveLink href="/">Início</ActiveLink>
            <ActiveLink href="/projects">Meus projetos</ActiveLink>
            <ActiveLink href="/about">Sobre mim</ActiveLink>
          </VStack>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
}
