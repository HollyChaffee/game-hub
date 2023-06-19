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
    parent_platforms: { platform: Platform }[]
}

interface FetchGamesResponse {
    count: number;
    results: Game[]
}

const useGames = () => {
    const [games, setGames] = useState<Game[]>([]); /* get games array and function to update it*/
    const [error, setError] = useState(''); /*state variable for error messages*/
    /* use effect hook to send fetch request to backend. Pass a callback, in this function need to call API client*/

    useEffect(() => {
        const controller = new AbortController(); /* controller object to handle cancellations */

        apiClient.get<FetchGamesResponse>('/games', { signal: controller.signal})
            .then((res) => setGames(res.data.results)) /*use an interface that represents the shape of the response object*/
            .catch((err) => {
                if (err instanceof CanceledError) return;
                setError(err.message)
            });

            return () => controller.abort(); /*return cleanup function*/
    }, []); /*include array of dependencies in effect hook. Without this we cannot send a send request to backend.*/

    return { games, error };
}

export default useGames;