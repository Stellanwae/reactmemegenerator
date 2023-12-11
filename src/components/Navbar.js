import React from "react"

export default function Navbar(props) {
    const styles = {
        justifyContent: props.darkMode ? "end" : "start"
    }
    return (
        <div className={props.darkMode ? "dark-nav" : "light-nav"}>
            <div className="navbar">
                <div className="meme--left">
                    <img className="meme--icon" src="./images/troll-face.png"/>
                    <h1>Meme Generator</h1>
                </div>
                <div className="toggle--section">
                    <p className={props.darkMode ? "" : "font"}>Light</p> 
                    <div className="toggle--main" style={styles}>
                        
                        <div 
                        className="toggle--slider"
                        onClick={props.toggle}
                        ></div>              
                    </div>
                    <p className={props.darkMode ? "font" : ""}>Dark</p>
                </div>

            </div>
        </div>
    )
}