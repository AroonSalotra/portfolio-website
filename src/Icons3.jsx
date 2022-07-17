import { SiRedux } from "react-icons/si"
import { BsFillBootstrapFill } from "react-icons/bs"
import { GrReactjs } from "react-icons/gr"


const Icons3 = () => {
    return (
        <div className="skills-container">
            <div className="skills-content">
                <SiRedux className="icon" />
                <p>Redux</p>
            </div>
            <div className="skills-content">
                <BsFillBootstrapFill className="icon" />
                <p>Bootstrap</p>
            </div>
            <div className="skills-content">
                <GrReactjs className="icon" />
                <p>React</p>
            </div>
        </div>
    );
}

export default Icons3;