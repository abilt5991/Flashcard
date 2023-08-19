
function Main() {
    
    const [meme, setMeme] = React.useState({topTxt: "", btmTxt: "", randomUrl:"http://i.imgflip.com/1bij.jpg"})
    
    const [allMemes, setAllMemes] = React.useState([])
    
    function getNewImg () {
        const imgUrl = allMemes[Math.floor(Math.random() * allMemes.length)].url
        setMeme(preVal => ({
            ...preVal,
                randomUrl: imgUrl
        }))
    }
    
    React.useEffect(function() {
        fetch("https://api.imgflip.com/get_memes")
        .then(resp => resp.json())
        .then(data => setAllMemes(data.data.memes))
        
    }, [])
    
    function handleChange() {
        event.preventDefault
        const {name, value} = event.target
        setMeme(preVal => ({
            ...preVal,
            [name]: value
        }))
    }
    
    return (
        <main>
            <div className="main--cont">
               <input
                    type="text"
                    defaultValue={meme.topTxt}
                    placeholder="Top Text"
                    className="form--input"
                    name="topTxt"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    defaultValue={meme.btmTxt}
                    placeholder="Bottom Text"
                    className="form--input"
                    name="btmTxt"
                    onChange={handleChange}
                />
                <input type="button" 
                    className="form--button"
                    onClick={getNewImg}
                    value="Get a new image"
                    
                /> 
            </div>
            <div className="meme">
                <img src={meme.randomUrl} className="meme--img"/>
                <h2 className="meme--text top">{meme.topTxt}</h2>
                <h2 className="meme--text bottom">{meme.btmTxt}</h2>
            </div>
        </main>
    ) 
}