import './App.css';
import Header from './component/Header/Header';
import Hero from './component/Hero/Hero'
import Weather from './component/Weather/Weather';
import Pets from './component/Pets/Pets';
import Nature from './component/Nature/Nature';
import Footer from './component/Footer/Footer';
import Eight from './component/Eight/Eight';
import Table from './component/Table/Table';
import Graph from './component/Graph/Graph';
import { useState } from 'react';
function App() {
const [isLogin, setIsLogin] = useState(false);

  return (
    <div className="App">
      <Header isLogin={isLogin} setIsLogin={setIsLogin}></Header>
      <Hero></Hero>
      <Eight></Eight>
      <Pets></Pets>
      <Nature></Nature>
      <Footer></Footer>
    </div>
  );
}

export default App;
