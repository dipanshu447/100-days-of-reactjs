import { useState, useEffect } from "react";
import html2canvas from 'html2canvas';

export default function Main() {

    const [memeData, setmemeData] = useState([]);

    useEffect(() => {
        fetch('https://api.imgflip.com/get_memes')
            .then(response => response.json())
            .then(memesData => {
                // let data = [];
                // for (const key in memesData.data.memes) {
                //     data[key] = memesData.data.memes[key].url;
                // }
                setmemeData(memesData.data.memes);
            })
    },[])

    const [memeInfo, setMemeInfo] = useState({
        topText: "One does not simply",
        bottomText: "Walk into Mordor",
        imageUrl: "http://i.imgflip.com/1bij.jpg"
    })

    function randomMemeGenerator() {
        let randIndex = Math.floor(Math.random() * memeData.length);
        setMemeInfo(prev => ({...prev, imageUrl:memeData[randIndex].url}));
        // setMemeInfo(prev => ({...prev, imageUrl:memeData[randIndex]}));
    }
    
    function handleChange(event){
        const {value, name} = event.target;
        setMemeInfo(prev => ({...prev, [name]: value}))
    }

    function downloadMeme() {
        html2canvas(document.querySelector('.meme'),{useCORS:true}).then((canvas) => {
            let a = document.createElement('a');
            a.download = "meme.png";
            a.href = canvas.toDataURL();
            a.click();
        })
    }

    return (
        <main>
            <div className="form">
                <label>Top Text
                    <input
                        type="text"
                        placeholder="One does not simply"
                        name="topText"
                        onChange={handleChange}
                        value={memeInfo.topText}
                    />
                </label>

                <label>Bottom Text
                    <input
                        type="text"
                        placeholder="Walk into Mordor"
                        name="bottomText"
                        onChange={handleChange}
                        value={memeInfo.bottomText}
                    />
                </label>
                <button onClick={randomMemeGenerator}>Get a new meme image 🖼</button>
            </div>
            <div className="meme">
                <img src={memeInfo.imageUrl} />
                <span className="top">{memeInfo.topText}</span>
                <span className="bottom">{memeInfo.bottomText}</span>
            </div>
            <button className="download" onClick={downloadMeme}>Download the meme</button>
        </main>
    )
}