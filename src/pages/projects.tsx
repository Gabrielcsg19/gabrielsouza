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
  SimpleGrid,
  VStack,
  Image,
  Box,
  Heading,
} from '@chakra-ui/react';
import { FiSearch, FiLink } from 'react-icons/fi';
import { AiFillGithub } from 'react-icons/ai';

import { PageContent } from '../components/PageContent';
import { useEffect, useState } from 'react';
import { CardDescription } from '../components/CardDescription';

export default function Projects() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Flex direction="column">
      <PageContent>
        <Box
          position="fixed"
          bottom={0}
          left={0}
          height="280px"
          right={0}
          bgGradient="linear(to-b, transparent, black)"
          transition="opacity 1s"
          opacity={scrollY === 0 ? '1' : '0'}
        />
        <Heading
          as="h1"
          textAlign="center"
          my="8"
          fontSize="4xl"
          fontWeight="medium"
        >
          Meus projetos públicos no GitHub
          <Text display="inline" color="red.700">
            .
          </Text>
        </Heading>
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

        <SimpleGrid columns={[1, 2, 3]} spacing="16">
          <VStack
            border="3px solid"
            borderColor="gray.700"
            borderRadius="10px"
            p="5"
            align="flex-start"
          >
            <Image
              src="https://user-images.githubusercontent.com/54643425/129791054-260dbfe0-fccc-4cfd-b85a-74f9a33f838c.png"
              alt="Project print"
              borderRadius="8px"
            />
            <HStack>
              <Text fontWeight="semibold" fontSize="2xl">
                Letmeask
              </Text>
              <Icon as={AiFillGithub} fontSize="xl" color="gray.700" />
              <Icon as={FiLink} fontSize="xl" color="gray.700" />
            </HStack>
            <CardDescription>
              Aplicação para criação de salas de Q&A ao-vivo desenvoldida com
              React.js com dados servidos pelo Firebase.
            </CardDescription>
          </VStack>
          <VStack
            border="3px solid"
            borderColor="gray.700"
            borderRadius="10px"
            p="5"
            align="flex-start"
          >
            <Image
              src="https://user-images.githubusercontent.com/54643425/129791054-260dbfe0-fccc-4cfd-b85a-74f9a33f838c.png"
              alt="Project print"
              borderRadius="8px"
            />
            <HStack>
              <Text fontWeight="semibold" fontSize="2xl">
                Letmeask
              </Text>
              <Icon as={AiFillGithub} fontSize="xl" color="gray.700" />
              <Icon as={FiLink} fontSize="xl" color="gray.700" />
            </HStack>
            <Text>
              Aplicação para criação de salas de Q&A ao-vivo desenvoldida com
              React.js com dados servidos pelo Firebase.
            </Text>
          </VStack>
          <VStack
            border="3px solid"
            borderColor="gray.700"
            borderRadius="10px"
            p="5"
            align="flex-start"
          >
            <Image
              src="https://user-images.githubusercontent.com/54643425/129791054-260dbfe0-fccc-4cfd-b85a-74f9a33f838c.png"
              alt="Project print"
              borderRadius="8px"
            />
            <HStack>
              <Text fontWeight="semibold" fontSize="2xl">
                Letmeask
              </Text>
              <Icon as={AiFillGithub} fontSize="xl" color="gray.700" />
              <Icon as={FiLink} fontSize="xl" color="gray.700" />
            </HStack>
            <Text>
              Aplicação para criação de salas de Q&A ao-vivo desenvoldida com
              React.js com dados servidos pelo Firebase.
            </Text>
          </VStack>
          <VStack
            border="3px solid"
            borderColor="gray.700"
            borderRadius="10px"
            p="5"
            align="flex-start"
          >
            <Image
              src="https://user-images.githubusercontent.com/54643425/129791054-260dbfe0-fccc-4cfd-b85a-74f9a33f838c.png"
              alt="Project print"
              borderRadius="8px"
            />
            <HStack>
              <Text fontWeight="semibold" fontSize="2xl">
                Letmeask
              </Text>
              <Icon as={AiFillGithub} fontSize="xl" color="gray.700" />
              <Icon as={FiLink} fontSize="xl" color="gray.700" />
            </HStack>
            <Text>
              Aplicação para criação de salas de Q&A ao-vivo desenvoldida com
              React.js com dados servidos pelo Firebase.
            </Text>
          </VStack>
          <VStack
            border="3px solid"
            borderColor="gray.700"
            borderRadius="10px"
            p="5"
            align="flex-start"
          >
            <Image
              src="https://user-images.githubusercontent.com/54643425/129791054-260dbfe0-fccc-4cfd-b85a-74f9a33f838c.png"
              alt="Project print"
              borderRadius="8px"
            />
            <HStack>
              <Text fontWeight="semibold" fontSize="2xl">
                Letmeask
              </Text>
              <Icon as={AiFillGithub} fontSize="xl" color="gray.700" />
              <Icon as={FiLink} fontSize="xl" color="gray.700" />
            </HStack>
            <Text>
              Aplicação para criação de salas de Q&A ao-vivo desenvoldida com
              React.js com dados servidos pelo Firebase.
            </Text>
          </VStack>
          <VStack
            border="3px solid"
            borderColor="gray.700"
            borderRadius="10px"
            p="5"
            align="flex-start"
          >
            <Image
              src="https://user-images.githubusercontent.com/54643425/129791054-260dbfe0-fccc-4cfd-b85a-74f9a33f838c.png"
              alt="Project print"
              borderRadius="8px"
            />
            <HStack>
              <Text fontWeight="semibold" fontSize="2xl">
                Letmeask
              </Text>
              <Icon as={AiFillGithub} fontSize="xl" color="gray.700" />
              <Icon as={FiLink} fontSize="xl" color="gray.700" />
            </HStack>
            <Text>
              Aplicação para criação de salas de Q&A ao-vivo desenvoldida com
              React.js com dados servidos pelo Firebase.
            </Text>
          </VStack>
        </SimpleGrid>
      </PageContent>
    </Flex>
  );
}
