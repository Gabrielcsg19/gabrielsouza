import { Flex, Text } from '@chakra-ui/react';
import { PageContent } from '../components/PageContent';

export default function About() {
  return (
    <Flex direction="column">
      <PageContent>
        <Text>Sobre mim</Text>
      </PageContent>
    </Flex>
  );
}
