import React from 'react';
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


const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
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

const rows = [
    createData(<AutoClick />,'Autos', 70, 'constante'),
    createData(<PersonaClick/>,'Personas', 25, 'constante'),
    createData(<AnimalClick/>,'Animales', 5, 'casual'),
];

const useStyles = makeStyles({
    table: {
        minWidth: 400,
    },
});

export default function CustomizedTables() {
    const classes = useStyles();

    return (
        <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
            <TableHead>
            <TableRow>
                <StyledTableCell>Sonidos</StyledTableCell> 
                <StyledTableCell >Fuentes sonoras</StyledTableCell>
                <StyledTableCell align="right" >Porcentaje</StyledTableCell>
                <StyledTableCell align="right" >Duracion</StyledTableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {rows.map((row) => (
                <StyledTableRow key={row.name} >  
                <StyledTableCell align="right">{row.sound}</StyledTableCell>
                <StyledTableCell component="th" scope="row">{row.name} </StyledTableCell> 
                <StyledTableCell align="right">{row.Porcentaje}</StyledTableCell>
                <StyledTableCell align="right">{row.Duracion}</StyledTableCell>
                </StyledTableRow>
            ))}
            </TableBody>
        </Table>
        </TableContainer>
    );
}
