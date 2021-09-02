import { Flex, Image } from '@chakra-ui/react';

import { HomeInfo } from '../components/Home/HomeInfo';
import { PageContent } from '../components/PageContent';

export default function Home() {
  return (
    <Flex direction="column">
      <PageContent height={['calc(100vh - 78px)', 'calc(100vh - 93px)']}>
        <Flex
          h="inherit"
          align="center"
          direction={['column', 'column', 'row']}
          justify={['stretch', 'space-between']}
        >
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
