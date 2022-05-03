const Button = ({ color, text, onClick }) => {
    return <button onClick={onClick} style={{ backgroundColor: '#7367f0'}} className="btn">{text}</button>
}

export default Button
