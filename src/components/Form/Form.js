import { useState } from 'react';
import Button from '../Buttom';
import CampoTexto from '../CampoTexto';
import Comment from '../Comment';
import ListaSuspensa from '../ListaSuspensa';
import './Form.css';

const Form = (props) => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [comment, setComment] = useState('')
    const [listProjects, setListaProjects] = useState('')
    


const saveForm = (evento) => {
    evento.preventDefault()
    props.newCollaborator({
        email,
        name, 
        listProjects,
        comment
    })
}

    return (
    
        <section className='formulario'>
            <form onSubmit={saveForm}>
                <h2>Leave a comment about our projects</h2>
                <CampoTexto mandatory={true}
                label = 'Email' 
                placeholder = 'Write your email...'
                valor = {email}
                whenChange = {valor => setEmail(valor)}
                />
                <CampoTexto mandatory={true}
                label = 'Name' 
                placeholder = 'Write your name...'
                valor = {name}
                whenChange = {valor => setName(valor)}
                />
                <ListaSuspensa mandatory={true}
                itens = {props.commentProjects} 
                label = 'Projects' 
                placeholder = 'Choose a project...'
                valor = {listProjects}
                whenChange = {valor => setListaProjects(valor)}
                />
                <Comment mandatory={true}
                abel = 'Comment' 
                placeholder = 'Make a comment...'
                valor = {comment}
                whenChange = {valor => setComment(valor)}
                />
                <Button>
                    Comment
                </Button>  
            </form>
        </section>
    );
}
export default Form