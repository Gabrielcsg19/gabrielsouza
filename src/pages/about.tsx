import {
  Flex,
  Avatar,
  SimpleGrid,
  VStack,
  Text,
  HStack,
  Icon,
  Heading,
  Link,
  Image,
} from '@chakra-ui/react';
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from 'react-icons/ai';

import { PageContent } from '../components/PageContent';

export default function About() {
  return (
    <Flex direction="column">
      <PageContent height="calc(100vh - 93px)">
        <SimpleGrid columns={[1, 2]} spacingX="10" spacingY="8" mt="10">
          <Flex direction="column" justify="center" align="center">
            <VStack>
              <Avatar
                showBorder
                borderColor="gray.700"
                borderWidth="3px"
                bg="transparent"
                p="1"
                w="180px"
                h="180px"
                name="Gabriel Souza"
                src="https://avatars.githubusercontent.com/u/54643425?v=4"
              />
              <Text fontSize="xl" color="gray.600">
                Gabriel Souza
              </Text>
              <HStack>
                <Link href="https://github.com/Gabrielcsg19" target="_blank">
                  <Icon as={AiFillGithub} fontSize="xl" color="gray.700" />
                </Link>
                <Link
                  href="https://br.linkedin.com/in/gabrielsouza97"
                  target="_blank"
                >
                  <Icon as={AiFillLinkedin} fontSize="xl" color="gray.700" />
                </Link>
                <Link href="mailto:gabrielcsg19@hotmail.com" target="_blank">
                  <Icon as={AiOutlineMail} fontSize="xl" color="gray.700" />
                </Link>
              </HStack>
            </VStack>
          </Flex>

          <Flex justify="flex-end" direction="column" textAlign="end">
            <Heading fontWeight="normal" mb="10">
              Olá
              <Text display="inline" color="red.700">
                !
              </Text>{' '}
              Prazer em te ver aqui.
            </Heading>
            <Text fontSize="larger">
              Apesar de ter nascido no{' '}
              <Link
                href="https://pt.wikipedia.org/wiki/Garopaba"
                target="_blank"
              >
                <Text display="inline" textDecoration="underline">
                  lindo litoral de Santa Catarina
                </Text>
              </Link>{' '}
              sempre fui muito caseiro (até demais, as vezes). A paixão por
              computador foi descoberta cedo, e logo se tornou parte da minha
              vida.
            </Text>
          </Flex>
          <Flex>
            <Text fontSize="larger">
              Desde que comecei no mundo da programação me interesso pela web e
              seu ecossistema. Atualmente minha principal linguagem é Javascript
              e stack de desenvolvimento é Node.js + React.js.
            </Text>
          </Flex>
          <Flex justify="center" align="center">
            <HStack
              bg="gray.800"
              px="10"
              py="4"
              borderRadius="full"
              spacing="14"
            >
              <Image src="/images/javascript.svg" w="40px" alt="Javascript" />
              <Image src="/images/node.js.svg" w="40px" alt="NodeJS" />
              <Image src="/images/react.js.svg" w="40px" alt="ReactJS" />
            </HStack>
          </Flex>
        </SimpleGrid>
      </PageContent>
    </Flex>
  );
}
