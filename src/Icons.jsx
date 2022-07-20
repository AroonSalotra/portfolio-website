const Icons = (props) => {
    return (
        <div className="icon-content icon-size-m">
            {props.icon}
            <p className="icon-text">{props.text}</p>
        </div>
    );
}

export default Icons;