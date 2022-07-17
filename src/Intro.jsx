import Icons1s from "./Icons1";
import ContactButton from "./ContactButton";
import Monitor from "./Monitor";

const Intro = () => {
    return (
        <div className="intro-container">
            <div className="intro-content">
                <div className="text-padding-s">
                    <p>I am</p>
                    <h1>Aroon Salotra<span className="emphasise-text">,</span></h1>
                    <p className="font-s">a self-taught software developer with an art & design background,
                        eager to learn new skills to add to my toolset. I have a great understanding
                        with HTML, CSS, Javascript & React alongside using Git and Figma for version
                        control and pre production </p>
                </div>
                <ContactButton />
                {/* <Monitor /> */}
            </div>
            {/* <SkillIcons /> */}
        </div>
    );
}

export default Intro;