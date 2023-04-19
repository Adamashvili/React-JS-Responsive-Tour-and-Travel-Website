import "./heroStyles.css"
function Hero (props) {
    return (
        <>
        <div className={props.cName}>
            <img alt="hero" src={props.heroImg}></img>
            <div className="hero-text">
                <h1>{props.title}</h1>
                <p>{props.text}</p>
                <a href={props.url} className={props.btnClass} >{props.buttonText}</a>
            </div>
       
        </div>
        </>
    )


}

export default Hero;