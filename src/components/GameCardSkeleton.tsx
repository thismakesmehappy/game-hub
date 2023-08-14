import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

export function GameCardSkeleton() {
  return (
    <Card>
      <Skeleton height="200px"></Skeleton>
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
}
