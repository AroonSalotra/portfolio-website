import Icons1s from "./Icons1";
import Contact from "./Contact";
import Monitor from "./Monitor";

const Intro = () => {
    return (
        <div className="intro-container">
            <div className="intro-content">
                <div className="text-padding-s">
                    <p>I am</p>
                    <h1>Aroon Salotra<span className="emphasise-text">,</span></h1>
                    <p>a self-taught software developer with an art & design background,
                        eager to learn new skills to add to my toolset. I have a great understanding
                        with HTML, CSS, Javascript & React alongside using Git and Figma for version
                        control and pre production </p>
                </div>
                <Contact />
                {/* <Monitor /> */}
            </div>
            {/* <SkillIcons /> */}
        </div>
    );
}

export default Intro;