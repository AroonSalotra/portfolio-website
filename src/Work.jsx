import WorkTemplate from "./WorkTemplate";
import thumbOneDesktop from "./assets/01-desktop.png"
import thumbOneMobile from "./assets/01-mobile.png"
import thumbTwoDesktop from "./assets/02-desktop.png"

const Work = () => {
    return (
        <div className="about-container content-align">
            <h1 className="subtitle highlight-s">My Work</h1>
            <div className="work-container">
                <WorkTemplate title="Static Shopping Page" img={thumbOneDesktop}
                    text="HTML, CSS and JavaScript"
                    direct="https://aroonsalotra.github.io/shopping-site/"
                    repo="https://github.com/AroonSalotra/shopping-site" />

                <WorkTemplate title="Covid Data" img={thumbTwoDesktop}
                    text="HTML, CSS and React & APIs"
                    direct="https://aroonsalotra.github.io/covid-app/"
                    repo="https://github.com/AroonSalotra/covid-app" />
            </div>
        </div>
    );
}


export default Work;