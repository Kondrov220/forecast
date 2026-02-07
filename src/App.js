import './App.css';
import Header from './component/Header/Header';
import Hero from './component/Hero/Hero'
import Weather from './component/Weather/Weather';
import Pets from './component/Pets/Pets';
import Nature from './component/Nature/Nature';
import Footer from './component/Footer/Footer';
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Hero></Hero>
      <Weather></Weather>
      <Pets></Pets>
      <Nature></Nature>
      <Footer></Footer>
    </div>
  );
}

export default App;
