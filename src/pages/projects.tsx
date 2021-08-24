/* eslint-disable react/no-children-prop */
import { Flex, Text, Heading } from '@chakra-ui/react';
import { GetServerSideProps } from 'next';
import { useEffect, useState } from 'react';

import { PageContent } from '../components/PageContent';
import { ProjectFilter } from '../components/ProjectFilter';
import { OverlayBox } from '../components/OverlayBox';
import { CardsGrid } from '../components/CardsGrid';
import axios from 'axios';

export default function Projects() {
  const [scrollY, setScrollY] = useState(0);
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Flex direction="column">
      <PageContent>
        <OverlayBox scrollY={scrollY} />
        <Heading
          as="h1"
          textAlign="center"
          my="8"
          fontSize="4xl"
          fontWeight="medium"
        >
          Meus projetos públicos no GitHub
          <Text display="inline" color="red.700">
            .
          </Text>
        </Heading>
        <ProjectFilter />

        <CardsGrid />
      </PageContent>
    </Flex>
  );
}

export const getServerSideProps: GetServerSideProps = async context => {
  const response = await axios.get(
    `https://api.github.com/users/Gabrielcsg19/repos?access_token=${process.env.GITHUB_API_TOKEN}`
  );

  console.log(response.data);

  return {
    props: {},
  };
};
