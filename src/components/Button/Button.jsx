const Button = (props) => {

    console.log(props);
    return <button style={{background:'pink', color: props.textColor}}>{props.label}</button>
}

export default Button