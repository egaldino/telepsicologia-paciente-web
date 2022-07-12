import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import InputMask from 'react-input-mask';
import * as React from "react";
import {useState} from "react";
import {scheduleNewAppointment} from "../../../service/appointments";
import {useNavigate, useParams} from "react-router-dom";

const ScheduleNew = () => {

    const [date, setDate] =  useState('');

    const navigate = useNavigate();
    let { crp } = useParams();

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        scheduleNewAppointment(crp, data.get('date'))
            .then(() =>{
                navigate("/schedule")
            }).catch(error => console.error(error))
    };

    return <Box sx={{p: 3, backgroundColor: "white"}}>
        <Typography component="h1" variant="h5">
            Novo agendamento
        </Typography>
        <Box component="form" noValidate sx={{mt: 3, backgroundColor: "white"}} onSubmit={handleSubmit}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <InputMask
                        mask="99/99/99 99:99:99"
                        value={date}
                        onChange={evt => setDate(evt.target.value)}
                        disabled={false}
                        maskChar=" "
                    >
                        {() => <TextField
                            name="date"
                            required
                            fullWidth
                            id="date"
                            label="Data"
                            autoFocus
                        />}
                    </InputMask>


                </Grid>
            </Grid>
            <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{mt: 3, mb: 2}}
            >
                Salvar
            </Button>
        </Box>
    </Box>
}

export default ScheduleNew;