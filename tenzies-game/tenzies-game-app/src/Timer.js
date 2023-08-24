function Timer(props) {
  const [time, setTime] = React.useState(0)  
  function reset() {
        setTime(0)
  }
    
  props.resetWatchTrigger(reset)
  React.useEffect(() => {
    let intervalId;
    if (props.runningWatch) {
      intervalId = setInterval(() => setTime(preVal => preVal + 1), 10) //To keep the timer running
    }
    return () => clearInterval(intervalId) //Memory Leaks
      
  }, [props.runningWatch])

  const hours = Math.floor(time / 360000);
  const minutes = Math.floor((time % 360000) / 6000);
  const seconds = Math.floor((time % 6000) / 100);

  return (
      <h2 className="info--data"> Timer: <span className="info--title">{hours}:{minutes.toString().padStart(2, "0")}:{seconds.toString().padStart(2, "0")}</span> 
      </h2>
  );
};