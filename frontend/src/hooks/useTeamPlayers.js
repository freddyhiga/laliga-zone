import { useState, useEffect } from 'react';
import { getPlayersByTeam } from '../api/playerApi';

function useTeamPlayers(team) {

    const [players, setPlayers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        getPlayersByTeam(team)
            .then((data) => {
                setPlayers(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error(error);
                setError('Failed to load players');
                setLoading(false);
            });
    }, [team]);
    return { players, loading, error };
}

export default useTeamPlayers;