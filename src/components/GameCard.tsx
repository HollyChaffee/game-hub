import React from "react";
import { Game } from "./hooks/useGames";
import { Card, CardBody, HStack, Heading, Image, Text } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";

/* need to pass a game object as a prompt to the component */
/* use an interface to define shape of props */
interface Props {
  game: Game;
}
const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <Image src={game.background_image} />
      <CardBody>
        <Heading fontSize="sm">{game.name}</Heading>
        <HStack justifyContent='space-between'>
           <PlatformIconList  /* mapping is constructing an array of platform objects */
          platforms={game.parent_platforms.map((p) => p.platform)} />
        <CriticScore score={game.metacritic} /> 
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
