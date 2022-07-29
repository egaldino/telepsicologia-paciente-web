export const listScheduledAppointments = (userId) => {
    return fetch(`${process.env.REACT_APP_APPOINTMENT_API_URL}/patient/scheduled/${userId}`, {
        method: 'GET',
        headers: {'Accept': 'application/json'},
    })
        .then((res) => res.json())
}

export const listPastAppointments = (userId) => {
    return fetch(`${process.env.REACT_APP_APPOINTMENT_API_URL}/patient/pastAppointments/${userId}`, {
        method: 'GET',
        headers: {'Accept': 'application/json'},
    })
        .then((res) => res.json())
}

export const scheduleNewAppointment = (patientId, crp, date) => {
    return fetch(`${process.env.REACT_APP_APPOINTMENT_API_URL}/patient/scheduleNewAppointment`, {
        method: 'POST',
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json'},
        body: JSON.stringify({patientId, crp, date})
    })
}