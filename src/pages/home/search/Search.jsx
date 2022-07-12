import Typography from "@mui/material/Typography";
import {Card, CardActions, CardContent, InputAdornment, TextField} from "@mui/material";
import Button from "@mui/material/Button";
import {useEffect, useState} from "react";
import Grid from "@mui/material/Grid";
import SearchIcon from '@mui/icons-material/Search';
import Box from "@mui/material/Box";
import {listPsychologists} from "../../../service/psychologists";
import {Link} from "react-router-dom";

const Search = () => {
    const [psychologists, setPsychologists] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(()=> {
        listPsychologists()
            .then(psychologists => setPsychologists(psychologists))
            .catch(error => console.error(error));
    } , [])

    return <>
        <Box mb={3}>
            <TextField
                id="input-with-icon-textfield"
                label="Buscar Psicólogo"
                fullWidth
                value={search}
                onChange={input => setSearch(input.target.value)}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start" on>
                            <SearchIcon />
                        </InputAdornment>
                    ),
                }}
                variant="outlined"
            />
        </Box>
        <Grid container rowSpacing={1} columnSpacing={{xs: 1, sm: 2, md: 3}}>
        {psychologists
            .filter(psychologist => psychologist.name.toUpperCase().includes(search.toUpperCase()))
            .map(psychologist =>
            <Grid key={psychologist.id} item xs={4}>
                <PsychologistCard psychologist={psychologist}/>
            </Grid>
        )}
    </Grid></>;
}

function PsychologistCard({psychologist}) {
    return (
        <Card>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {psychologist.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    CRP: {psychologist.crp}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" component={Link} to={`/schedule/${psychologist.crp}`}>Agendar</Button>
            </CardActions>
        </Card>
    );
}

export default Search;