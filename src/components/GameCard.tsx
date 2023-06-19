import React from "react";
import { Game } from "./hooks/useGames";
import { Card, CardBody, Heading, Image, Text } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
/* need to pass a game object as a prompt to the component */
/* use an interface to define shape of props */
interface Props {
  game: Game;
}
const GameCard = ({ game }: Props) => {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={game.background_image} />
      <CardBody>
        <Heading fontSize="md">{game.name}</Heading>
        <PlatformIconList
          platforms={game.parent_platforms.map((p) => p.platform)}
        />
        {/* mapping is constructing an array of platform objects */}
      </CardBody>
    </Card>
  );
};

export default GameCard;
