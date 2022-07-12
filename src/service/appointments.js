export const listScheduledAppointments = (userId) => {
    return fetch(`${process.env.REACT_APP_PACIENTE_API_URL}/scheduled/${userId}`, {
        method: 'GET',
        headers: {'Accept': 'application/json'},
    })
        .then((res) => res.json())
}

export const listPastAppointments = (userId) => {
    return fetch(`${process.env.REACT_APP_PACIENTE_API_URL}/pastAppointments/${userId}`, {
        method: 'GET',
        headers: {'Accept': 'application/json'},
    })
        .then((res) => res.json())
}

export const scheduleNewAppointment = (crp, date) => {
    return fetch(`${process.env.REACT_APP_PACIENTE_API_URL}/scheduleNewAppointment`, {
        method: 'POST',
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json'},
        body: JSON.stringify({crp, date})
    })
}