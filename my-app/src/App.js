import logo from './logo.svg';
import './App.css';
import './components/Hero.css';
import Hero from './components/Hero';
import { heroes } from './heroesData.js';

function App() {
  return (
    <div className="App">
      {
        heroes.map((hero) =>
          <Hero key={hero.id} pic={hero.pic} name={hero.name} universe={hero.universe} actions={hero.actions} superpower={hero.superpower} />
        )
      }
    </div>
  );
}

export default App;
