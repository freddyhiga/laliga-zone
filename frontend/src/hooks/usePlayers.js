import { useState, useEffect } from 'react';
import { getPlayers } from '../api/playerApi';

function usePlayers() {

    const [players, setPlayers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        getPlayers()
            .then((data) => {
                setPlayers(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error(error);
                setError('Failed to load players');
                setLoading(false);
            });
    }, []);
    return { players, loading, error };
}

export default usePlayers;