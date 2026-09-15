export function getTeamLogo(team) {
    return (
        team
            .toLowerCase()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .replaceAll(' ', '-') + '.png'
    );
}