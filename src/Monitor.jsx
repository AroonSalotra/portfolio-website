import Contact from "./Contact";

const Monitor = () => {
    return (
        <div className="monitor-container">
            <div className="monitor-base" />
            {/* <div className="screen-a-container">
                <div className="screen-a-base">
                    <div className="screen-a-window"/>
                    <div className="screen-b-window"/>
                </div>
            </div> */}
            <div className="contact">
                <p>Contact Me<span className="shape-block"/></p>
            </div>
            <div className="monitor-stand-a" />
            <div className="monitor-stand-b" />
            <div className="flex-row">
                <div className="keyboard" />
                <div className="mouse" />
            </div>
            <div className="bottle" />
            <div className="bottle-top" />
            <div className="desk" />
            {/* <div style={ monitorScreen } /> */}
        </div>
    );
}

export default Monitor;