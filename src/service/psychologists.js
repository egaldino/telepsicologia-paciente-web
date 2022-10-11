export const listPsychologists = (token) => {
    return new Promise((resolve, reject) => {

        resolve([
            {
                id: 55555555,
                crp: 55555555,
                name: "Psicólogo 1"
            },
            {
                id: 44444444,
                crp: 44444444,
                name: "Psicólogo 2"
            },
            {
                id: 3333333,
                crp: 3333333,
                name: "Psicólogo 3"
            }
        ])
    });


    // return fetch(`${process.env.REACT_APP_PSICOLOGO_API_URL}/psychologist/`, {
    //     method: 'GET',
    //     headers: {'Accept': 'application/json', 'Authorization': `Bearer ${token}`},
    // })
    //     .then((res) => res.json())
}