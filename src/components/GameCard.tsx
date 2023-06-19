import React from "react";
import { Game } from "./hooks/useGames";
import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
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
        <Heading fontSize="-moz-initial">{game.name}</Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
