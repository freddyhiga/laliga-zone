export function getPositionName(position) {

    const positions = {
        GK: 'Goalkeeper',
        DF: 'Defender',
        MF: 'Midfielder',
        FW: 'Forward'
    };

    const result = position
        .split(',')
        .map((code) => positions[code] || code)
        .join(', ');

    return result;
}