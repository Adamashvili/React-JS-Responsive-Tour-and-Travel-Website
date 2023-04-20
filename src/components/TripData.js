import "./TripStyles.css"


function TripData(props) {
    return (
        <div className="t-card">
            <div className="t-image">
                <img alt="imgs" src={props.imgs}></img>
            </div>
            <h4>{props.heading}</h4>
            <p>{props.text}</p>
        </div>
    )
}

export default TripData;