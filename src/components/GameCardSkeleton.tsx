import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const GameCardSkeleton = () => {
  return (
    <Card width="175px" borderRadius={10} overflow="hidden" >
      <Skeleton height="130px" />{" "}
      {/* Skeleton is a placeholder for an image being loaded*/}
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
};

export default GameCardSkeleton;
