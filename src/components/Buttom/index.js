import './Button.css';

const Button = (props) => {
    return (
        <button className="Comment_button">
            {props.children}
        </button>
    );
}

export default Button