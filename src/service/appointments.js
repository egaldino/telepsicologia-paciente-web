export const listScheduledAppointments = (userId, token) => {

    return new Promise((resolve, reject) => {

        resolve([
            {
                id: 1,
                psychologist: {
                    id: 55555555,
                    name: "Psicólogo 1"
                },
                date: "01/12/2022",
                hour: "10:00"
            },
            {
                id: 2,
                psychologist: {
                    id: 44444444,
                    name: "Psicólogo 2"
                },
                date: "01/12/2022",
                hour: "11:00"
            },
            {
                id: 3,
                psychologist: {
                    id: 3333333,
                    name: "Psicólogo 3"
                },
                date: "01/12/2022",
                hour: "12:00"
            }
        ])
    });

    // return fetch(`${process.env.REACT_APP_APPOINTMENT_API_URL}/patient/scheduled/${userId}`, {
    //     method: 'GET',
    //     headers: {'Accept': 'application/json', 'Authorization': `Bearer ${token}`},
    // }).then((res) => res.json())
}

export const listPastAppointments = (userId, token) => {
    return new Promise((resolve, reject) => {

        resolve([
            {
                id: 1,
                psychologist: {
                    id: 55555555,
                    name: "Psicólogo 1"
                },
                date: "01/12/2022",
                hour: "10:00"
            },
            {
                id: 2,
                psychologist: {
                    id: 44444444,
                    name: "Psicólogo 2"
                },
                date: "01/12/2022",
                hour: "11:00"
            },
            {
                id: 3,
                psychologist: {
                    id: 3333333,
                    name: "Psicólogo 3"
                },
                date: "01/12/2022",
                hour: "12:00"
            }
        ])
    });

    // return fetch(`${process.env.REACT_APP_APPOINTMENT_API_URL}/patient/pastAppointments/${userId}`, {
    //     method: 'GET',
    //     headers: {'Accept': 'application/json', 'Authorization': `Bearer ${token}`},
    // }).then((res) => res.json())
}

export const scheduleNewAppointment = (patientId, crp, date, token) => {
    return new Promise((resolve, reject) => {

        resolve([
            {
                id: 1,
                psychologist: {
                    id: 55555555,
                    name: "Psicólogo 1"
                },
                date: "01/12/2022",
                hour: "10:00"
            },
            {
                id: 2,
                psychologist: {
                    id: 44444444,
                    name: "Psicólogo 2"
                },
                date: "01/12/2022",
                hour: "11:00"
            },
            {
                id: 3,
                psychologist: {
                    id: 3333333,
                    name: "Psicólogo 3"
                },
                date: "01/12/2022",
                hour: "12:00"
            }
        ])
    });

    // return fetch(`${process.env.REACT_APP_APPOINTMENT_API_URL}/patient/scheduleNewAppointment`, {
    //     method: 'POST',
    //     headers: { 'Accept': 'application/json', 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`},
    //     body: JSON.stringify({patientId, crp, date})
    // })
}