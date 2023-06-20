import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "./hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { Genre } from "./hooks/useGenres";

interface Props {
    selectedGenre: Genre | null
}

/* need a state variable for storing game objects*/
const GameGrid = ({ selectedGenre }: Props) => {
  const { data, error, isLoading } =
    useGames(selectedGenre); /* use object to destructure games and error. Now this component is primarily responsible for returning some markup */
  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        padding="10px"
        spacing={3}
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        {data.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCard game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
