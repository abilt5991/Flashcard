

function App() {
    const Details = Data.map((item) => {
        return (
            <Card 
                key = {item.id}
                {...item}
            />
        )
    })
    
    return (
        <div>
            <Header/>
            {Details}
        </div>
    )
}

ReactDOM.createRoot(document.querySelector("#root")).render(<App/>)