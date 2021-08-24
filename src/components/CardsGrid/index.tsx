import {
  SimpleGrid,
  VStack,
  HStack,
  Icon,
  Image,
  Text,
} from '@chakra-ui/react';
import { AiFillGithub } from 'react-icons/ai';
import { FiLink } from 'react-icons/fi';

import { CardDescription } from '../CardDescription';

export function CardsGrid() {
  return (
    <SimpleGrid columns={[1, 2, 3]} spacing="16" mb="10">
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
  );
}
