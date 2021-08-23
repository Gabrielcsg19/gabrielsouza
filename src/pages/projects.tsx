/* eslint-disable react/no-children-prop */
import {
  Flex,
  Text,
  Input,
  InputGroup,
  InputLeftElement,
  Icon,
  HStack,
  Button,
} from '@chakra-ui/react';
import { FiSearch } from 'react-icons/fi';

import { PageContent } from '../components/PageContent';

export default function Projects() {
  return (
    <Flex direction="column">
      <PageContent>
        <Text textAlign="center" my="8" fontSize="4xl" fontWeight="medium">
          Meus projetos públicos no GitHub
          <Text display="inline" color="red.700">
            .
          </Text>
        </Text>
        <HStack>
          <InputGroup maxW="364px" h="48px">
            <InputLeftElement
              h="inherit"
              pointerEvents="none"
              children={<Icon as={FiSearch} fontSize="24px" color="gray.700" />}
            />
            <Input
              h="inherit"
              placeholder="Pesquise um projeto pelo título"
              fontSize="lg"
              fontWeight="semibold"
              _placeholder={{ color: 'gray.700' }}
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
      </PageContent>
    </Flex>
  );
}
