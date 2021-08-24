import { Flex, Image } from '@chakra-ui/react';

import { HomeInfo } from '../components/HomeInfo';
import { PageContent } from '../components/PageContent';

export default function Home() {
  return (
    <Flex direction="column">
      <PageContent>
        <Flex h="inherit" align="center" justify="space-between">
          <HomeInfo />
          <Image
            src="/images/illustration.svg"
            alt="Illustration"
            width={{ base: 'auto', '2xl': '750px' }}
          />
        </Flex>
      </PageContent>
    </Flex>
  );
}
