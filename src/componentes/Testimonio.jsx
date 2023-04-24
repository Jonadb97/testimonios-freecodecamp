import '../estilo/Testimonio.css';
import React from 'react';

export function Testimonio(props) {


  return (
    <div 
    className='contenedor-testimonio'>
      <img 
      className='imagen-testimonio' 
      src={require(`../img/testimonio-${props.imagen}.jpg`)}
      alt={ props.alt }
      width='350px'/>
      <div 
      className='contenedor-texto-testimonio'>
        <h2 className='nombre-testimonio'><strong>{props.nombre}</strong> de {props.pais}</h2>
        <h3 className='cargo-testimonio'>{props.cargo} en <strong>{props.empresa}</strong></h3>
        <p className='texto-testimonio'> {props.testimonio} </p>
      </div>
    </div>
  );
}