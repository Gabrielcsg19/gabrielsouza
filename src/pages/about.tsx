/* eslint-disable react/no-unescaped-entities */
import {
  Flex,
  Avatar,
  Text,
  HStack,
  Icon,
  Heading,
  Link,
  VStack,
  Box,
} from '@chakra-ui/react';
import React from 'react';
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from 'react-icons/ai';

import { PageContent } from '../components/PageContent';

export default function About() {
  const today = new Date();
  const currentAge = today.getFullYear() - 1997;
  return (
    <Flex direction="column">
      <PageContent
        height={{ base: 'initial', md: 'calc(100vh - 85px)' }}
        maxW="container.lg"
      >
        <Flex
          height="inherit"
          direction={{ base: 'column', md: 'row' }}
          mb={{ base: '14', md: 0 }}
        >
          <Flex
            direction="column"
            justify="center"
            align="center"
            flex="1"
            color="gray.600"
            order={{ base: 1, md: 0 }}
            mt={{ base: '8', md: 0 }}
          >
            <Avatar
              showBorder
              borderColor="gray.700"
              borderWidth="3px"
              bg="transparent"
              p="1"
              w={['150px', '230px']}
              h={['150px', '230px']}
              name="Gabriel Souza"
              src="https://avatars.githubusercontent.com/u/54643425?v=4"
              mb="2"
            />
            <Text fontSize={['lg', '2xl']}>Gabriel Souza</Text>
            <HStack>
              <Link href="https://github.com/Gabrielcsg19" target="_blank">
                <Icon
                  as={AiFillGithub}
                  fontSize={['lg', '2xl']}
                  color="gray.700"
                />
              </Link>
              <Link
                href="https://br.linkedin.com/in/gabrielsouza97"
                target="_blank"
              >
                <Icon
                  as={AiFillLinkedin}
                  fontSize={['lg', '2xl']}
                  color="gray.700"
                />
              </Link>
              <Link href="mailto:gabrielcsg19@hotmail.com" target="_blank">
                <Icon
                  as={AiOutlineMail}
                  fontSize={['lg', '2xl']}
                  color="gray.700"
                />
              </Link>
            </HStack>
            <Text
              mt={['1', '2']}
              fontSize={['small', 'md']}
              fontWeight="semibold"
            >
              {currentAge}, Garopaba, SC
            </Text>
          </Flex>

          <VStack justify="center" align="flex-end" flex="1">
            <Heading
              mb={['2', '4']}
              mt={{ base: '8', md: 0 }}
              fontSize={['3xl', '4xl']}
              textAlign={{ base: 'center', md: 'end' }}
            >
              Olá
              <Text as="span" color="red.700">
                !
              </Text>{' '}
              Prazer em te ver aqui. Senta que lá vem história.
            </Heading>
            <Box
              fontSize={['md', 'larger']}
              lineHeight="tall"
              textAlign="justify"
            >
              <Text>
                Quando criança gostava de construir coisas com LEGO e destruir
                brinquedos para ver o "motorzinho". Ganhei meu primeiro
                computador com 12 anos, e a partir daí nunca mais toquei em
                algum brinquedo.
              </Text>
              <Text>
                Com 14 anos aprendi a tocar violão e a cantar. Eu mandava bem,
                quase montei uma banda.
              </Text>
              <Text>
                Foi com 19 anos que conheci a programação através dos vídeos do{' '}
                <Link
                  href="https://www.youtube.com/channel/UCrWvhVmt0Qac3HgsjQK62FQ"
                  target="_blank"
                >
                  Gustavo Guanabara no Youtube
                </Link>
                .
              </Text>
              <Text>
                A partir daí iniciei o curso de Análise e Desenvolvimento de
                Sistemas pela UNIASSELVI e me formei após 3 anos e meio de
                curso.
              </Text>
              <Text>
                Desde então tenho colocado em prática os conhecimentos
                adquiridos de cursos online, documentação e comunidade por meio
                de projetos hospedados no GitHub.
              </Text>
            </Box>
          </VStack>
        </Flex>
      </PageContent>
    </Flex>
  );
}
