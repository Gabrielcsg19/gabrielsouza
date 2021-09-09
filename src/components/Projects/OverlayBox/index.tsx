import { Box } from '@chakra-ui/react';

interface OverlayBoxProps {
  scrollY: number;
}

export function OverlayBox({ scrollY }: OverlayBoxProps) {
  return (
    <Box
      position="fixed"
      height="150px"
      bottom={0}
      left={0}
      right={0}
      bgGradient="linear(to-b, transparent, black)"
      transition="opacity 1s"
      opacity={scrollY === 0 ? '1' : '0'}
    />
  );
}
