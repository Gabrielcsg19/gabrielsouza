import { Box, Flex } from '@chakra-ui/react';

import { HomeInfo } from '../components/Home/HomeInfo';
import { PageContent } from '../components/PageContent';

export default function Home() {
  return (
    <Flex direction="column">
      <PageContent
        height={['calc(100vh - 85px)', 'calc(100vh - 93px)']}
        maxW="container.lg"
      >
        <Flex
          h="inherit"
          align="center"
          direction={{ base: 'column', md: 'row' }}
          justify={{ base: 'stretch', md: 'space-between' }}
        >
          <HomeInfo />
          <Box
            mt={['8', '6', 0]}
            mb={['5', '4', 0]}
            maxW={['200px', '400px', 'initial']}
            order={[-1, -1, 0]}
          >
            <img src="/images/illustration.svg" alt="Illustration" />
          </Box>
        </Flex>
      </PageContent>
    </Flex>
  );
}
