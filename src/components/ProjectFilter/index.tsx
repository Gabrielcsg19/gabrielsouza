/* eslint-disable react/no-children-prop */
import {
  InputGroup,
  InputLeftElement,
  Icon,
  Input,
  Button,
  HStack,
} from '@chakra-ui/react';
import { FiSearch } from 'react-icons/fi';

export function ProjectFilter() {
  return (
    <HStack mb="5">
      <InputGroup maxW="364px" h="48px">
        <InputLeftElement
          h="inherit"
          ml="1"
          pointerEvents="none"
          children={<Icon as={FiSearch} fontSize="24px" color="gray.700" />}
        />
        <Input
          h="inherit"
          placeholder="Pesquise um projeto pelo título"
          fontSize="lg"
          fontWeight="semibold"
          _placeholder={{ color: 'gray.700', textIndent: '8px' }}
          borderColor="gray.700"
          borderWidth="3px"
          _hover={{ borderColor: 'gray.700' }}
        />
      </InputGroup>
      <Button
        bg="red.700"
        py="6"
        px="6"
        transition="filter 0.2s"
        _hover={{ bg: 'red.700', filter: 'brightness(80%)' }}
        textTransform="uppercase"
      >
        Filtrar
      </Button>
    </HStack>
  );
}
