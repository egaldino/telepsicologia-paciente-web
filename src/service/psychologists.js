export const listPsychologists = (token) => {
    return fetch(`${process.env.REACT_APP_PSICOLOGO_API_URL}/psychologist/`, {
        method: 'GET',
        headers: {'Accept': 'application/json', 'Authorization': `Bearer ${token}`},
    })
        .then((res) => res.json())
}