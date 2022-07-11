export const login = (email, password) =>{
    return fetch(`${process.env.REACT_APP_PACIENTE_API_URL}/login`, {
        method: 'POST',
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json'},
        body: JSON.stringify({email, password})
    })
        .then((res) => res.json())
}