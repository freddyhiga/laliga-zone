const API_URL = 'http://localhost:8080/api/players';

export function getPlayers() {
    return fetch(API_URL)
        .then((response) => {
            if (!response.ok) {
                throw new Error('Failed to fetch players');
            }

            return response.json();
        });
}

export function getPlayersByTeam(team) {
    return fetch(`${API_URL}?team=${encodeURIComponent(team)}`)
        .then((response) => {
            if (!response.ok) {
                throw new Error('Failed to fetch players');
            }

            return response.json();
        });
}

export function getPlayersByNation(nation) {
    return fetch(`${API_URL}?nation=${encodeURIComponent(nation)}`)
        .then((response) => {
            if (!response.ok) {
                throw new Error('Failed to fetch players');
            }

            return response.json();
        });
}

export function getPlayersByPosition(position) {
    return fetch(`${API_URL}?position=${encodeURIComponent(position)}`)
        .then((response) => {
            if (!response.ok) {
                throw new Error('Failed to fetch players');
            }

            return response.json();
        });
}

export function getPlayerById(id) {
    return fetch(`${API_URL}/${id}`)
        .then((response) => {
            if (!response.ok) {
                throw new Error('Failed to fetch player');
            }

            return response.json();
        });
}

export function addPlayer(player) {
    return fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: sessionStorage.getItem('auth'),
        },
        body: JSON.stringify(player),
    })
        .then(async (response) => {
            console.log('Status:', response.status);

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Failed to add player');
            }

            return data;
        });
}

export function updatePlayer(player) {
    return fetch(`${API_URL}/${player.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            Authorization: sessionStorage.getItem('auth'),
        },
        body: JSON.stringify(player),
    })
        .then(async (response) => {
            console.log('Status:', response.status);

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Failed to update player');
            }

            return data;
        });
}

export function deletePlayer(player) {
    return fetch(`${API_URL}/${player.id}`, {
        method: 'DELETE',
        headers: {
            Authorization: sessionStorage.getItem('auth'),
        },
    })
    .then((response) => {
        if (!response.ok) {
            throw new Error('Failed to delete player');
        }
    });
}