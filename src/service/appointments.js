export const listScheduledAppointments = (userId, token) => {
    return fetch(`${process.env.REACT_APP_APPOINTMENT_API_URL}/patient/scheduled/${userId}`, {
        method: 'GET',
        headers: {'Accept': 'application/json', 'Authorization': `Bearer ${token}`},
    }).then((res) => res.json())
}

export const listPastAppointments = (userId, token) => {
    return fetch(`${process.env.REACT_APP_APPOINTMENT_API_URL}/patient/pastAppointments/${userId}`, {
        method: 'GET',
        headers: {'Accept': 'application/json', 'Authorization': `Bearer ${token}`},
    }).then((res) => res.json())
}

export const scheduleNewAppointment = (patientId, crp, date, token) => {
    return fetch(`${process.env.REACT_APP_APPOINTMENT_API_URL}/patient/scheduleNewAppointment`, {
        method: 'POST',
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`},
        body: JSON.stringify({patientId, crp, date})
    })
}