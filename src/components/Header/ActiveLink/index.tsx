import { ReactNode } from 'react';
import Link from 'next/link';
import { Link as ChakraLink } from '@chakra-ui/react';
import { useRouter } from 'next/router';

interface ActiveLinkProps {
  children: ReactNode;
  href: string;
}

export function ActiveLink({ children, href }: ActiveLinkProps) {
  const { asPath } = useRouter();

  const active = asPath === href;

  return (
    <Link href={href} passHref>
      <ChakraLink
        px="2.5"
        transition="border .5s"
        borderBottom={'3px solid'}
        borderColor={active ? 'red.700' : 'gray.900'}
        _hover={{ textDecoration: 'none' }}
        _focus={{ boxShadow: 'none' }}
      >
        {children}
      </ChakraLink>
    </Link>
  );
}
