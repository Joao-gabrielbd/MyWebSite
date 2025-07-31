import './Comment.css';

const Comment = (props) => {
    return (
            <div id = 'Comment'className="campo_texto">
                <label>{props.label}</label>
                <textarea onChange = {evento => props.whenChange(evento.target.value)} required={props.mandatory} placeholder = {props.placeholder} maxLength={550}></textarea>
            </div>    
    )
    
}

export default Comment