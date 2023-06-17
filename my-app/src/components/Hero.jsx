import './Hero.css';

function Hero(props) {
    return (
        <div className="Hero-card">
            <img className="img" src={props.pic} alt={props.name} />
            <div className='Title'>{props.name}</div>
            <div className="Description">
                <div><span className="Subtitle">Вселенная</span>: {props.universe}</div>
                <div><span className="Subtitle">Род деятельности:</span>: {props.actions}</div>
                <div><span className="Subtitle">Суперспособности</span>: {props.superpower}</div>
            </div>
        </div>
    );
}

export default Hero;