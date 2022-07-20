const Icons = (props) => {
    return (
        <div className="icon-content">
            {props.icon}
            <p>{props.text}</p>
        </div>
    );
}

export default Icons;