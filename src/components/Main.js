import React from "react"
import memesData from "../memesData"

export default function Main(props) {
    const [memes, setMemes] = React.useState(memesData)
    const [memeInfo, setMemeInfo] = React.useState({
        top: "",
        bottom: "",
        url: "https://i.imgflip.com/1g8my4.jpg"
    })
    function generateMeme() {
        const memeArray = memes.data.memes
        const memeIndex = Math.floor(Math.random() *memeArray.length)
        const memeUrl = memeArray[memeIndex].url

        setMemeInfo(prevMemeInfo => ({
            ...prevMemeInfo,
            url: memeUrl
        }))
    }

    function textChange(event) {
        const {name, value} = event.target
        setMemeInfo((prevMeme) => ({
            ...prevMeme,
            [name]: value

        })
        )
    }
    return (
        <div className={props.darkMode ? "dark-main" : ""}>
            <div className="container">
                <div className="input--section">
                    <input 
                    placeholder="Top"
                    name="top"
                    value={memeInfo.top}
                    onChange={textChange}
                    
                    />
                    <input
                    placeholder="Bottom"
                    name="bottom"
                    value={memeInfo.bottom}
                    onChange={textChange}
                    
                    />
                </div>
                <button onClick={generateMeme}>Get New Meme Image</button>
                <div className="meme--image--section">
                    <h3 className="top">{memeInfo.top}</h3>
                    <img className="meme--image--main" src={memeInfo.url} />
                    <h3 className="bottom">{memeInfo.bottom}</h3>
                    
                </div>
            </div>
        </div>
    )
}