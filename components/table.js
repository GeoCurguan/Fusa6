import React, { useEffect , useContext} from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {AutoClick} from "../components/FuncionClick"
import {PersonaClick} from "../components/FuncionClick"
import {AnimalClick} from "../components/FuncionClick"

import AudioContext from '../contexts/AudiosContext/AudioContext';

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: "#006dea",
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);

function createData(sound, name, Porcentaje , Duracion) {
    return {sound, name, Porcentaje, Duracion};
}



const useStyles = makeStyles({
    table: {
        minWidth: 400,
    },
});

export default function CustomizedTables() {
    const classes = useStyles();
    const { audios, selectedAudios, getAudios, getReproducerAudio} = useContext(AudioContext)
    /*const rows = [
        createData(<button onClick={() => getReproducerAudio(0)}>Auto</button>,'Autos', 70, 'constante'),
        createData(<button onClick={() => getReproducerAudio(1)}>Persona</button>,'Personas', 25, 'constante'),
        createData(<button onClick={() => getReproducerAudio(2)}>Animales</button>,'Animales', 5, 'casual'),
        createData('a','b','c','d'),
    ];*/


    useEffect(() => {
        getAudios();
        /*console.log(audios[1].id);*/
    }, [])

    return (
        <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
            <TableHead>
            <TableRow>
                <StyledTableCell align="center">Sonidos</StyledTableCell>
                <StyledTableCell align="center">Latitud</StyledTableCell>
                <StyledTableCell align="center">Longitud</StyledTableCell>
                <StyledTableCell align="center">Nombre</StyledTableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {audios.map((aud) => (
                <StyledTableRow key={aud.id} >
                <StyledTableCell align="right"><button onClick={() => getReproducerAudio((aud.id)-1)}>Audio</button></StyledTableCell>
                <StyledTableCell component="th" scope="row">{aud.latitude} </StyledTableCell>
                <StyledTableCell align="right">{aud.longitude}</StyledTableCell>
                <StyledTableCell align="right">{aud.filename}</StyledTableCell>
                </StyledTableRow>
            ))}
            </TableBody>
        </Table>
        </TableContainer>
    );
}
