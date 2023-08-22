
function Timer(props) {
  const [time, setTime] = React.useState(0)  
    
  function reset() {
        setTime(0)
    }
    
  props.resetWatchTrigger(reset)

  React.useEffect(() => {
    let intervalId;
    if (props.runningWatch) {
      intervalId = setInterval(() => setTime(time + 1), 10)
    }
    return () => clearInterval(intervalId)
  }, [props.runningWatch,  time])

  const hours = Math.floor(time / 360000);
  const minutes = Math.floor((time % 360000) / 6000);
  const seconds = Math.floor((time % 6000) / 100);

  return (
      <h2 className="info--data"> Timer: <span className="info--title">{hours}:{minutes.toString().padStart(2, "0")}:{seconds.toString().padStart(2, "0")}</span> 
      </h2>
  );
};

