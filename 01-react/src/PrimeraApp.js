// Funcional Component

import React, {Fragment} from "react";
import PropTypes from "prop-types";


const PrimeraApp = ({saludo2, valorPorDefecto}) => {


    // return <h1>Esto funciona para una sola línea</h1>
    // return (
    //     <Fragment>
    //         <h1>Hola mundo</h1>
    //         <p>Mi página</p>
    //     </Fragment>
    // )

    const saludo = 'Hola, soy Camilo';
    const saludoObjeto = {
        nombre: 'Camilo',
        edad: 20
    };
    return (
        <>
            <h1>{valorPorDefecto}</h1>
            <h1>{saludo2}</h1>
            <h1>{saludo}</h1>
            <h1>{saludoObjeto.nombre}</h1>
            <h1>{JSON.stringify(saludoObjeto)}</h1>
            <p>Mi página</p>
        </>
    )
}
/**
 *
 * Con esto deberíamos validar los textos
 * @type {{saludo2: *}}
 */
PrimeraApp.propTypes = {
    saludo2: PropTypes.string.isRequired
}

PrimeraApp.defaultProps = {
    valorPorDefecto: 'XD'
}


export default PrimeraApp;
