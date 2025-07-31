import './CommentArea.css';

const CommentArea = (props) => {
    return (
        <section className='commentArea'>
                <div className='comments'>
                    <h2 className='commentProject'>Project: {props.nameProjects}</h2>
                    <h3 className='commentName'>Name: {props.namePerson}</h3>
                    <p className='comment'>{props.comment}</p>
                </div>
        </section>
    )
}

export default CommentArea