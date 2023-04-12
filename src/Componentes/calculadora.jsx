
import React from 'react';
import '../Hoja-de-Estilos/calculadora.css';


const numeros = () =>{
    console.log("clic")
}

function Calculadora(props) {
  return (
    <div className="Contenedor-calculadora" >
     <div className='resultado'></div>
     <div className='numero'>   
        <div className='uno' id='boton' onClick ={numeros}>1</div>
        <div className='dos' id='boton'>2</div>
        <div className='tres' id='boton'>3</div>
        <div className='cuatro' id='boton'>4</div>
        <div className='cinco' id='boton'>5</div>
        <div className='seis' id='boton'>6</div>
        <div className='siete' id='boton'>7</div>
        <div className='ocho' id='boton'>8</div>
        <div className='nueve' id='boton'>9</div>
        <div className='cero' id='boton'>0</div>
        
        <div className='suma' id='boton'>+</div>
        <div className='resta' id='boton'>-</div>
        <div className='multiplicacion' id='boton'>*</div>
        <div className='division' id='boton'>/</div>
        <div className='igual' id='boton'>=</div>
        <div className='borrar' id='boton'>del</div>
    </div>

    </div>
  );
}

export default Calculadora;
