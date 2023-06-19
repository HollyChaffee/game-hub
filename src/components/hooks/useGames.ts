import { useEffect, useState } from "react";
import apiClient from "../../services/api-client";
import { CanceledError } from "axios";

export interface Platform {
    id: number;
    name: string;
    slug: string;
}

export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: { platform: Platform }[];
    metacritic: number;
}

interface FetchGamesResponse {
    count: number;
    results: Game[]
}

const useGames = () => {
    const [games, setGames] = useState<Game[]>([]); /* get games array and function to update it*/
    const [error, setError] = useState(''); /*state variable for error messages*/
    /* use effect hook to send fetch request to backend. Pass a callback, in this function need to call API client*/
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        const controller = new AbortController(); /* controller object to handle cancellations */

        setLoading(true); // Just before we call the API
        apiClient.get<FetchGamesResponse>('/games', { signal: controller.signal})
            .then((res) => {
                setGames(res.data.results);
                setLoading(false);
            }) 
            .catch((err) => {
                if (err instanceof CanceledError) return;
                setError(err.message)
                setLoading(false);
            });

            return () => controller.abort(); /*return cleanup function*/
    }, []); /*include array of dependencies in effect hook. Without this we cannot send a send request to backend.*/

    return { games, error, isLoading };
}

export default useGames;