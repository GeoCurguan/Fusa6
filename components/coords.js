const ViewCoords = (props) => {
    var lat = props.ubicacion.lat;
    var lng = props.ubicacion.lng;
    return(
        <div>
        <p className="loc">Latitud: {lat}  </p>
        <p className="loc">Longitud: {lng}</p></div>
    );
}
export default ViewCoords;