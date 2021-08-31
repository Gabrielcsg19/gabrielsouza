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
  const [query, setQuery] = useState('');

  useEffect(() => {
    const getRepositories = async () => {
      const response = await axios.get(
        `https://api.github.com/users/Gabrielcsg19/repos?type=forks`,
        {
          headers: {
            Authorization: `token acess_token`,
          },
        }
      );

      const formattedData = response.data.map(repository => ({
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
        <ProjectFilter onQuery={setQuery} query={query} />

        <CardsGrid repositories={repositories} query={query} />
      </PageContent>
    </Flex>
  );
}
