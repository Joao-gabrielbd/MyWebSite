
import './ListaSuspensa.css';


const ListaSuspensa = (props) => {

    return(
        <div className="campo_lista">
            <label>{props.label}</label>
            <select onChange = {evento => props.whenChange(evento.target.value)} required={props.mandatory}>
                {(props.itens ?? []).map(item => {
                 return <option key={item}>{item}</option>})}
            </select>
        </div>

    );
}
export default ListaSuspensa