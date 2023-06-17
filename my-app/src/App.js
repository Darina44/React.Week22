import logo from './logo.svg';
import './App.css';
import './components/Hero.css';
import Hero from './components/Hero';

const heroes = [
  {
    pic: "https://static.insales-cdn.com/images/collections/1/6155/59668491/_vyrn_49593202-2735_m1.jpg",
    name: "Бэтмен",
    universe: "DC Comics",
    actions: "борец с преступностью, филантроп, миллиардер",
    superpower: "интеллект, обширные познания, знания боевых искусств, ловкость",
  },
  {
    pic: "https://freepngimg.com/convert-png/20969-superman-free-download",
    name: "Супермен",
    universe: "DC Comics",
    actions: "борец за справедливость",
    superpower: "непробиваемость, суперсила, полет, самоисцеление, суперзрение и суперслух, классный костюм",
  },
  {
    pic: "https://clipartix.com/wp-content/uploads/2019/02/spiderman-clipart-2019-30.jpeg",
    name: "Человек-паук",
    universe: "Marvel Comics",
    actions: "борец за справедливость, студент, фотограф",
    superpower: "сверхчеловеческие рефлексы, «паучье чутье», способность прилепляться к твердым поверхностям, производство паутины",
  }
];

function App() {
  return (
    <div className="App">
      {
        heroes.map((hero) =>
          <Hero pic={hero.pic} name={hero.name} universe={hero.universe} actions={hero.actions} superpower={hero.superpower}></Hero>
        )
      }
    </div>
  );
}

export default App;
