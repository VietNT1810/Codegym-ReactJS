const Input = (props) => {
    return (
        <input type={props.type} onChange={props.onChange} placeholder={props.placeholder}/>
    );
}

export default Input;