import {
  SimpleGrid,
  VStack,
  HStack,
  Icon,
  Image,
  Text,
  Link,
  Skeleton,
  Box,
  SkeletonText,
} from '@chakra-ui/react';
import { useState } from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { FiLink } from 'react-icons/fi';

type Card = {
  id: number;
  name: string;
  cover_url: string;
  description: string;
  clone_url: string;
  homepage: string;
};

interface CadsGridProps {
  repositories: Card[];
  query: string;
}

export function CardsGrid({ repositories, query }: CadsGridProps) {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <SimpleGrid columns={[1, 2, 3]} spacing="16" mb="10">
      {repositories
        .filter(repo => repo.name.includes(query))
        .map(repository => (
          <VStack
            border="3px solid"
            borderColor="gray.700"
            borderRadius="10px"
            p="5"
            align="flex-start"
            key={repository.id}
          >
            <Skeleton
              isLoaded={!isLoading}
              width="100%"
              h="140px"
              borderRadius="8px"
            >
              <Image
                src={repository.cover_url}
                alt="Project print"
                borderRadius="inherit"
                onLoad={() => setIsLoading(false)}
                h="100%"
                w="100%"
              />
            </Skeleton>

            {isLoading ? (
              <Box width="100%">
                <Skeleton h="20px" mt={2} />
                <SkeletonText fontSize="md" mt={7} spacing="3" noOfLines={3} />
              </Box>
            ) : (
              <>
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
              </>
            )}
          </VStack>
        ))}
    </SimpleGrid>
  );
}
