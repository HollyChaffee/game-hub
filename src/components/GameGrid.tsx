import { Text } from "@chakra-ui/react";
import useGames from "./hooks/useGames";

/* need a state variable for storing game objects*/
const GameGrid = () => {
  const { games, error } =
    useGames(); /* use object to destructure games and error. Now this component is primarily responsible for returning some markup */
  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
