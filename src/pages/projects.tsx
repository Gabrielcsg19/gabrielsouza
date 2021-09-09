/* eslint-disable react/no-children-prop */
import { Flex, Text, Heading } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import axios from 'axios';

import { PageContent } from '../components/PageContent';
import { ProjectFilter } from '../components/Projects/ProjectFilter';
import { OverlayBox } from '../components/Projects/OverlayBox';
import { CardsGrid } from '../components/Projects/CardsGrid';

type Repository = {
  id: number;
  fork: boolean;
  name: string;
  description: string;
  clone_url: string;
  homepage: string;
};

export default function Projects() {
  const [scrollY, setScrollY] = useState(0);
  const [repositories, setRepositories] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const getRepositories = async () => {
      const response = await axios.get(
        `https://api.github.com/users/Gabrielcsg19/repos?sort=updated&direction=desc`
      );

      const formattedData = response.data
        .filter(
          (repository: Repository) =>
            !repository.fork && repository.name !== 'Gabrielcsg19'
        )
        .map((repository: Repository) => ({
          id: repository.id,
          name: repository.name,
          cover_url: `https://raw.githubusercontent.com/Gabrielcsg19/${repository.name}/master/assets/cover-img.png`,
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
      <PageContent maxW="container.lg">
        <Heading
          as="h1"
          textAlign="center"
          my={['6', '8']}
          fontSize={['2xl', '4xl']}
          fontWeight="medium"
        >
          Meus projetos públicos no GitHub
          <Text as="span" color="red.700">
            .
          </Text>
        </Heading>
        <ProjectFilter onQuery={setQuery} query={query} />

        <CardsGrid repositories={repositories} query={query} />
        <OverlayBox scrollY={scrollY} />
      </PageContent>
    </Flex>
  );
}
