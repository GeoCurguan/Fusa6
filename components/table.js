import React, { useEffect , useContext} from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

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

const useStyles = makeStyles({
    table: {
        minWidth: 400,
    },
});

export default function CustomizedTables(props) {
    const classes = useStyles();
    const { audios, selectedAudios, getAudios, getReproducerAudio} = useContext(AudioContext)

    var lat = props.ubicacion.lat;
    var lng = props.ubicacion.lng;

    useEffect(() => {
        getAudios(lat, lng);
    }, [])
    return (
        <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
            <TableHead>
            <TableRow>
                <StyledTableCell align="center">Sonidos</StyledTableCell>
                <StyledTableCell align="center">Latitud</StyledTableCell>
                <StyledTableCell align="center">Longitud</StyledTableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {audios.map((aud) => (
                <StyledTableRow key={audios.indexOf(aud)} >
                <StyledTableCell align="right"><button onClick={() => getReproducerAudio((aud.data))}>Audio</button></StyledTableCell>
                <StyledTableCell component="th" scope="row">{aud.latitude} </StyledTableCell>
                <StyledTableCell align="right">{aud.longitude}</StyledTableCell>
                </StyledTableRow>
            ))}
            </TableBody>
        </Table>
        </TableContainer>
    );
}
