import React from "react";
import {useEffect} from "react";
import DataTable from 'react-data-table-component';
import 'bootstrap/dist/css/bootstrap.min.css';


const tabla1 = () =>{
    console.log('hola');
    const informacion =[
        {
            Fuentes: "Autos",
            Porcentaje: "70",
            Duracion: "Constante"
        },
        {
            Fuentes: "Personas",
            Porcentaje: "28",
            Duracion: "Constante"
        },
        {
            Fuentes: "Animales",
            Porcentaje: "2",
            Duracion: "Casual"
        }
    ];


    const columna =[
        {
            name: 'Fuentes de origen',
            selector: 'Fuentes',
            sortable: true
        },
        {
            name: 'Porcentaje',
            selector: 'Porcentaje',
            sortable: true
        },
        {
            name: 'Duracion',
            selector:'Duracion',
            sortable: true
        }
    ]


    return(
        <div>
            <DataTable columns={columna} data={informacion} title= "Composicion de sonidos por sector"/>
        </div>
    )

}
export default tabla1;