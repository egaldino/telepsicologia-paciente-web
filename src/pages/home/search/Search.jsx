import Typography from "@mui/material/Typography";
import {Card, CardActions, CardContent, InputAdornment, TextField} from "@mui/material";
import Button from "@mui/material/Button";
import {useState} from "react";
import Grid from "@mui/material/Grid";
import SearchIcon from '@mui/icons-material/Search';
import Box from "@mui/material/Box";

const Search = () => {
    const [pendingRequests] = useState([{id: 1, name: 'Myodo', crp: '3217732193'},
        {id: 2, name: 'Cuvuo', crp: '3217732193'},{id: 3, name: 'Faici', crp: '3217732193'},
        {id: 4, name: 'Woyde', crp: '3217732193'},{id: 5, name: 'Hauporis', crp: '3217732193'},
        {id: 6, name: 'Guas', crp: '3217732193'},{id: 7, name: 'Piale', crp: '3217732193'},
        {id: 8, name: 'Plamo', crp: '3217732193'}]);


    return <>
        <Box mb={3}>
            <TextField
                id="input-with-icon-textfield"
                label="Buscar Psicólogo"
                fullWidth
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <SearchIcon />
                        </InputAdornment>
                    ),
                }}
                variant="outlined"
            />
        </Box>
        <Grid container rowSpacing={1} columnSpacing={{xs: 1, sm: 2, md: 3}}>
        {pendingRequests.map(pendingRequest =>
            <Grid key={pendingRequest.id} item xs={4}>
                <PendingRequestCard pendingRequest={pendingRequest}/>
            </Grid>
        )}
    </Grid></>;
}

function PendingRequestCard({pendingRequest}) {
    return (
        <Card>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {pendingRequest.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    CRP: {pendingRequest.crp}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Agendar</Button>
            </CardActions>
        </Card>
    );
}

export default Search;