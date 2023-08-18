

function Card(props) {
    return (
        <section className="section">
            <div className="img--sec">
                <img src={props.img} className="placeImg"/>
        {props.like ? <i className="fa fas fa-heart"></i> : <i className="fa far fa-heart"></i>}
            </div>
            <div className="place--info">
                <div className="min--details">
                    <i className="fa fas fa-map-marker-alt"></i><span className="location">{props.location}</span><a href={props.glink} className="loc--link">View on Google Maps</a>
                </div>
                <h2 className="place">{props.place}</h2>
                <p className="dates">{props.dates}</p>
                <p className="desc">{props.desc}</p>
            </div>
        </section>
    
    
    )
}