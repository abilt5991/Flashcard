
function App() {
    
    const [allDice, setAllDice] = React.useState(intialVal())
    const [tenzies, setTenzies] = React.useState(false)
    const [rollCount, setRollCount] = React.useState(0)
    const [startWatch, setStartWatch] = React.useState(false)
    
    const diceBlocks = allDice.map((item) => {
        return   <Dice key={item.id} isHeld={item.isHeld} holdMeFunc={()=>holdMe(item.id)} value={item.value}/>
    })
    
    function holdMe(id) {
        setAllDice(preVal => preVal.map((item) => {
            return item.id === id ? {...item, isHeld: !item.isHeld} : item
        }))
    }
        
    React.useEffect(()=>{        
        const allState = allDice.every(item => item.isHeld)
        const firstVal = allDice[0].value
        const allSameVal = allDice.every(item => item.value == firstVal)
        if(allState && allSameVal) {
            setStartWatch(false)
            setTenzies(preVal => true)
            confetti({ spread: 180 })
        }
    }, [allDice])
        
        
    function newDice(i) {
        const value = Math.ceil(Math.random() * 6)
        const dice = {
                "id" : i,
                "isHeld" : false,
                "value" : value
            }
        return dice
    }
        
    function intialVal() {
        const numArr = []
        for(let i = 0; i < 10; i++) {
            const dice = {
                "id" : i,
                "isHeld" : false,
                "value" : "-"
            }
            numArr.push(dice)
        }
        return numArr
    }
        
    function generateDice() {
        const numArr = []
        for(let i = 0; i < 10; i++) {
            numArr.push(newDice(i))
        }
        return numArr
    }
    
    function rollDice() {
        if(tenzies) {
            setAllDice(preVal => generateDice())
            setTenzies(false)
            callbackRef.current()
            setStartWatch(true)
            setRollCount(val => 0)
        } else {
            setStartWatch(true)
            setAllDice(preVal => preVal.map( item => {
            return item.isHeld ? item : newDice(item.id)
            }))
            setRollCount(val => val+1)
        }
    }
        
    function resetGame() {
        setAllDice(intialVal())
        setTenzies(false)
        setRollCount(0)
        setStartWatch(false)
        callbackRef.current()
                    
    }
        
    const callbackRef = React.useRef()
    function resetWatchTrigger(resetCallback)
    {
        callbackRef.current = resetCallback
    }
        
    return (
        <div>
            <div className="top--info">
                <Timer runningWatch={startWatch} resetWatchTrigger={resetWatchTrigger}> </Timer>
                <Rolls rollCount={rollCount}> </Rolls>
            </div>
        
            <main>
                <h1 className="title">Tenzies</h1>
                <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
                <div className="bg--box">
                    {diceBlocks}
                </div>
                
                <button className="btn roll--btn" value="Roll" onClick={rollDice}>{tenzies ? "New Game" : "Roll"}</button>
            </main>
                <button className="btn reset--btn" value="Reset" onClick={resetGame}>Reset Game</button>
        </div>
    )  
}