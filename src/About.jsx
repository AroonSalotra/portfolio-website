import Icons1 from "./Icons1";
import Icons2 from "./Icons2";
import Icons3 from "./Icons3";

const About = () => {
    return (
        <div className="about-container">
            <h2 className="sub-title">Skills</h2>
            <p>Languages</p>
            <Icons1 />
            <p>Planning & Version Control</p>
            <Icons2 />
            <p>Libraries</p>
            <Icons3 />
        </div>
    );
}

export default About;