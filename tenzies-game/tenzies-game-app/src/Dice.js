


function Dice(props) {
    const styles = {
                backgroundColor: props.isHeld ? "#59E391" : "white"
            }
    
    return (
        
        <div className="die--face" id={props.id} style={styles} onClick={props.holdMeFunc}>
            <h2 className="die--val" >{props.value}
            </h2>
        </div>
        
    )  
}
