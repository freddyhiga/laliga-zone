export function playerValidation(name, value) {
    switch (name) {
        case 'name':
            if (!/^[A-Za-zÁÉÍÓÚÜÑáéíóúüñ' -]*$/.test(value)) {
                return 'Only letters, spaces, hyphens, and apostrophes are allowed';
            }

            return '';

        case 'nation':
        case 'position':
            if (!/^[A-Za-zÁÉÍÓÚÜÑáéíóúüñ\s]*$/.test(value)) {
                return 'Only letters are allowed';
            }
            return '';

        case 'age':
        case 'matchesPlayed':
        case 'starts':
        case 'minutes':
        case 'goals':
        case 'assists':
        case 'penaltyGoals':
        case 'yellowCards':
        case 'redCards':
            if (value !== '' && (!Number.isInteger(Number(value)) || Number(value) < 0)) {
                return 'Number cannot be negative';
            }

            return '';

        case 'expectedGoals':
        case 'expectedAssists':
            if (value !== '' && Number(value) < 0) {
                return 'Number cannot be negative';
            }

            return '';
        default:
            return '';
    }
}