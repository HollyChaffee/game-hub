import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "./hooks/useGames";
import GameCard from "./GameCard";

/* need a state variable for storing game objects*/
const GameGrid = () => {
  const { games, error } =
    useGames(); /* use object to destructure games and error. Now this component is primarily responsible for returning some markup */
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid minChildWidth="130px" padding="10px" spacing={10}>
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
