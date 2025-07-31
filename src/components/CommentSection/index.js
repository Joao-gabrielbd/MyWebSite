import CommentArea from "../CommentArea"
import '../CommentArea/CommentArea.css';

const CommentSection = ({collaborators}) => {
    return (
        <section className="commentArea">
            {collaborators.map((collaborator, index) => (
                <CommentArea
                key={index}
                nameProjects = {collaborator.listProjects}
                namePerson = {collaborator.name}
                comment = {collaborator.comment}
                />
            ))}
        </section>
    )
      

}

export default CommentSection