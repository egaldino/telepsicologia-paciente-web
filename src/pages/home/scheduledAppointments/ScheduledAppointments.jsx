import {Card, CardActions, CardContent} from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {useEffect, useState} from "react";
import {listScheduledAppointments} from "../../../service/appointments";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import {DataGrid} from "@mui/x-data-grid";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

const renderDetailsButton = (params) => {
    return (
        <strong>
            <Button
                variant="contained"
                color="error"
                size="small"
                style={{ marginLeft: 16 }}
                onClick={() => {
                    alert('Consulta cancelada')
                }}
            >
                Cancelar
            </Button>
        </strong>
    )
}

const columns = [
    { field: 'psychologist.name', headerName: 'Nome', width: 375, valueGetter: (params) => params.row?.psychologist?.name  },
    { field: 'psychologist.id', headerName: 'CRP', width: 200, valueGetter: (params) => params.row?.psychologist?.id  },
    { field: 'date', headerName: 'Data', width: 200 },
    { field: 'actions', headerName: 'Ações', width: 200, renderCell: renderDetailsButton },
];

const ScheduledAppointments = () => {
    const [appointments, setAppointments] = useState([]);

    const userId = useSelector(state => state.value.user.id);
    const token = useSelector(state => state.value.user.token);

    useEffect(()=> {
        listScheduledAppointments(userId,token)
            .then(appointments => setAppointments(appointments))
            .catch(error => console.error(error));
    } , [userId, token])

    return <>
        <Typography variant="h5" component="h1" sx={{marginBottom: 2}}>
            Próximo Atendimento
        </Typography>
        {appointments.length > 0 &&  <Card>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {appointments[0].psychologist.name} (CRP: {appointments[0].psychologist.id})
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {appointments[0].date}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" component={Link} to={`/call/${appointments[0].psychologist.id}`}>Entrar na chamada</Button>
                <Button size="small" sx={{color: 'error.main'}}>Cancelar</Button>
            </CardActions>
        </Card> }
        <Divider />
        <Typography variant="h5" component="h1" sx={{marginY: 2}}>
            Atendimentos Agendados
        </Typography>

        <Box sx={{ height: 400, width: '100%', backgroundColor: 'white' }}>
            <DataGrid
                rows={appointments}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                disableSelectionOnClick
            />
        </Box>

    </>
}

export default ScheduledAppointments;