import { useEffect, useState } from "react";
import { getPlayersByPosition } from "../api/playerApi";

function usePositionPlayers(position) {
    const [players, setPlayers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        getPlayersByPosition(position)
            .then((data) => {
                setPlayers(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error(error);
                setError('Failed to load players');
                setLoading(false);
            });
    }, [position]);

    return { players, loading, error };
}

export default usePositionPlayers;