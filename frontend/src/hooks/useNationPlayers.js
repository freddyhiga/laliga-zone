import { useEffect, useState } from "react";
import { getPlayersByNation } from '../api/playerApi';

function useNationPlayers(nation) {

    const [players, setPlayers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        getPlayersByNation(nation)
            .then((data) => {
                setPlayers(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error(error);
                setError('Failed to load players');
                setLoading(false);
            });
    }, [nation]);
    return { players, loading, error }
}

export default useNationPlayers;