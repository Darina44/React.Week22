import './Hero.css';

function Hero(props) {
    return (
        <div className="hero-card">
            <img className="img" src={props.pic} alt={props.name} />
            <div className='title'>{props.name}</div>
            <div className="description">
                <div><span className="subtitle">Вселенная</span>: {props.universe}</div>
                <div><span className="subtitle">Род деятельности:</span>: {props.actions}</div>
                <div><span className="subtitle">Суперспособности</span>: {props.superpower}</div>
            </div>
        </div>
    );
}

export default Hero;