import React, { useEffect, useState } from 'react'
import apiClient from '../services/api-client';
import { Text } from '@chakra-ui/react';

interface Game {
    id: number;
    name: string;
}

interface FetchGamesResponse {
    count: number;
    results: Game[]
}
/* need a state variable for storing game objects*/
const GameGrid = () => {
    const [games, setGames] = useState<Game[]>([]); /* get games array and function to update it*/
    const [error, setError] = useState(''); /*state variable for error messages*/
    /* use effect hook to send fetch request to backend. Pass a callback, in this function need to call API client*/

    useEffect(() => {
        apiClient.get<FetchGamesResponse>('/xgames')
            .then(res => setGames(res.data.results)) /*use an interface that represents the shape of the response object*/
            .catch(err => setError(err.message));
    })
  return (
    <>
    {error && <Text>{error}</Text>}
    <ul>
        {games.map(game => <li key={game.id}>{game.name}</li>)}
    </ul>
    </>
  )
}

export default GameGrid