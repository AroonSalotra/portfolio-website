const WorkTemplate = (props) => {
    return (
        <div className="work-content">
            <p className="work-title">{props.title}</p>
            {/* <a href="#"> */}
            <img src={props.img} className="work-img" alt="" />
            {/* </a> */}
            <p className="work-text">{props.text}</p>
            <div className="work-links">
                <a target={"_blank"} rel="noreferrer" href={props.direct}>Direct Link </a>
                <a target={"_blank"} rel="noreferrer" href={props.repo}>Github Repo</a>
            </div>
        </div>
    );
}

export default WorkTemplate;