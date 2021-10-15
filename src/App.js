import "./App.css";
import { Switch, Route, NavLink, Redirect } from "react-router-dom";
import PokemonList from "./Components/PokemonList";
import Pokemon from "./Components/Pokemon";
import Comp from "./Components/Comparison/ComPokemon";
import Navbar from "../src/Components/Navbar"
import Max from "./Components/maxPoke/max";
function App() {
  
  return (
    <div className="App">
      <Navbar/>

      <nav>
           <div className="pk"> 
<img src="http://fc00.deviantart.net/fs70/i/2012/308/0/b/__hd___pokemon_logo___hd___by_peetzaahhh2010-d5k08gz.png" />
      </div>
      <div class="container">
	    <div class="ball">
	        <div class="button"></div>
	    </div>
	</div>
      </nav>
      
      <Switch>
        <Route path={"/"} exact component={PokemonList} />
        <Route path={"/pokemon/:pokemon"} exact component={Pokemon} />
        <Route path="/Comp" component={Comp} />
        <Route path="/max" component={Max} />

              <Redirect to={"/"} />
      </Switch>

    </div>
  );
}

export default App;