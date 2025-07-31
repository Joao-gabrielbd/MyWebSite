import { useState } from 'react';
import './CampoTexto.css';

const CampoTexto = (props) => {

    const whenWritten = (evento) => {
        props.whenChange(evento.target.value)

    }

    return (

        <div className='campo_texto'>
            <label>{props.label}</label>
        <input value = {props.valor} onChange = {whenWritten} required={props.mandatory}placeholder={props.placeholder}/>
        </div>
    )
}
export default CampoTexto