/* eslint-disable react/no-children-prop */
import {
  InputGroup,
  InputLeftElement,
  Icon,
  Input,
  HStack,
} from '@chakra-ui/react';
import { ChangeEvent } from 'react';
import { FiSearch } from 'react-icons/fi';

interface ProjectFilterProps {
  onQuery: (query: string) => void;
  query: string;
}

export function ProjectFilter({ onQuery, query }: ProjectFilterProps) {
  return (
    <HStack mb="5">
      <InputGroup maxW="364px" h="48px">
        <InputLeftElement
          h="inherit"
          ml="1"
          pointerEvents="none"
          children={<Icon as={FiSearch} fontSize="24px" color="gray.700" />}
        />
        <Input
          h="inherit"
          placeholder="Pesquise um projeto pelo título"
          fontSize="lg"
          fontWeight="semibold"
          _placeholder={{ color: 'gray.700', textIndent: '8px' }}
          borderColor="gray.700"
          borderWidth="3px"
          _hover={{ borderColor: 'gray.700' }}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            onQuery(event.target.value)
          }
          value={query}
        />
      </InputGroup>
    </HStack>
  );
}
