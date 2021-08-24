import {
  SimpleGrid,
  VStack,
  HStack,
  Icon,
  Image,
  Text,
  Link,
} from '@chakra-ui/react';
import { AiFillGithub } from 'react-icons/ai';
import { FiLink } from 'react-icons/fi';

// import { CardDescription } from '../CardDescription';

type Card = {
  id: number;
  name: string;
  description: string;
  clone_url: string;
  homepage: string;
};

interface CadsGridProps {
  repositories: Card[];
}

export function CardsGrid({ repositories }: CadsGridProps) {
  return (
    <SimpleGrid columns={[1, 2, 3]} spacing="16" mb="10">
      {repositories.length > 0 ? (
        repositories.map(repository => (
          <VStack
            border="3px solid"
            borderColor="gray.700"
            borderRadius="10px"
            p="5"
            align="flex-start"
            key={repository.id}
          >
            <Image
              src="https://user-images.githubusercontent.com/54643425/129791054-260dbfe0-fccc-4cfd-b85a-74f9a33f838c.png"
              alt="Project print"
              borderRadius="8px"
            />
            <HStack>
              <Text fontWeight="semibold" fontSize="2xl">
                {repository.name}
              </Text>
              <Link href={repository.clone_url} target="_blank">
                <Icon as={AiFillGithub} fontSize="xl" color="gray.700" />
              </Link>
              {repository.homepage && (
                <Link href={repository.homepage} target="_blank">
                  <Icon as={FiLink} fontSize="xl" color="gray.700" />
                </Link>
              )}
            </HStack>
            <Text>{repository.description}</Text>
          </VStack>
        ))
      ) : (
        <Text>Carregando...</Text>
      )}
    </SimpleGrid>
  );
}
