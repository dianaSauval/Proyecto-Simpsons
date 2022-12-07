import Quote from "./features/quote/Quote";
import "./App.css";
import Bio from "./features/bio/Bio";
import News from "./features/news/News";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img
          src="https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2Fsimpsons.PNG?1497481539770"
          alt="The-Simpsons"
          className="logo"
        />
        <Quote />
      </header>
      <section className="App-bio">
        <Bio />
      </section>
      <section className="App-news">
        <News />
      </section>
    </div>
  );
}

export default App;
