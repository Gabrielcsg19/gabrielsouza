import { VStack, Box, Heading, Button, Text, Link } from '@chakra-ui/react';

export function HomeInfo() {
  return (
    <VStack align="flex-start" maxW="360px" spacing="5" mb={['4', '20']}>
      <Box textAlign={{ base: 'center', md: 'left' }}>
        <Text
          fontSize={['smaller', 'lg']}
          fontWeight="light"
          textTransform="uppercase"
        >
          Desenvolvedor full-stack web
        </Text>
        <Heading as="h1" fontSize={['3xl', '5xl']} fontWeight="semibold">
          <Text as="span" color="red.700">
            G
          </Text>
          abriel Souza
        </Heading>
        <Text fontSize="lg">
          Apaixonado pelo impacto que a programação causa no mundo e motivado
          por novos desafios.
        </Text>
      </Box>

      <Link
        href="https://drive.google.com/file/d/1fFrtOfEwpwSoGXtZH71Nn8I8DxRxjwQw/view?usp=sharing"
        target="_blank"
        _hover={{ textDecoration: 'none' }}
        alignSelf={{ base: 'center', md: 'flex-start' }}
      >
        <Button
          bg="transparent"
          border="3px solid"
          borderColor="red.700"
          textTransform="uppercase"
          fontWeight="semibold"
          fontSize={['sm', 'lg']}
          px={['5', '10']}
          py={['3', '6']}
          transition="filter 0.2s"
          _hover={{ bg: 'transparent', filter: 'brightness(80%)' }}
        >
          Acessar currículo
        </Button>
      </Link>
    </VStack>
  );
}
