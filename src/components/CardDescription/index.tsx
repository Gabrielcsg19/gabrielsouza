import { Text, TextProps } from '@chakra-ui/react';

interface CardDescriptionProps extends TextProps {
  children: string;
}

export function CardDescription({ children, ...props }: CardDescriptionProps) {
  return (
    <Text {...props}>
      {children.length >= 200 ? `${children.slice(0, 200)} ...` : children}
    </Text>
  );
}
