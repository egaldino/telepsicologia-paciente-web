export const listPsychologists = () => {
    return fetch(`${process.env.REACT_APP_PSICOLOGO_API_URL}/psychologist`, {
        method: 'GET',
        headers: {'Accept': 'application/json'},
    })
        .then((res) => res.json())
}