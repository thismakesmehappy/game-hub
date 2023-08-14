import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

export function CriticScore({ score }: Props) {
  let color = score > 75 ? "green" : score > 60 ? "yellow" : "";
  return (
    <Badge colorScheme={color} font-size="14px" paddingX={1} borderRadius="4px">
      {score}
    </Badge>
  );
}
