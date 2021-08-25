/* eslint-disable react/no-children-prop */
import { Flex, Text, Heading } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

import { PageContent } from '../components/PageContent';
import { ProjectFilter } from '../components/Projects/ProjectFilter';
import { OverlayBox } from '../components/Projects/OverlayBox';
import { CardsGrid } from '../components/Projects/CardsGrid';
import axios from 'axios';

export default function Projects() {
  const [scrollY, setScrollY] = useState(0);
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    const getRepositories = async () => {
      const response = await axios.get(
        `https://api.github.com/users/Gabrielcsg19/repos?access_token=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`
      );

      const formattedData = response.data.map(repository => ({
        id: repository.id,
        name: repository.name,
        description: repository.description,
        clone_url: repository.clone_url,
        homepage: repository.homepage,
      }));

      setRepositories(formattedData);
    };

    getRepositories();
  }, []);

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

        <CardsGrid repositories={repositories} />
      </PageContent>
    </Flex>
  );
}
