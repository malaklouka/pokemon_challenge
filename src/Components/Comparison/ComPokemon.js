import React, { useEffect, useState } from "react";
import axios from "axios";
import "../Comparison/Comp.css";
import Search from "./Search";
import Preview from "./Preview";

function Comp() {
  const [pokemons, setPokemons] = useState([]);
  const [name1, setPokname1] = useState("");
  const [name2, setPokname2] = useState("");
  const [pokStats1, setPokStats1] = useState([]);
  const [pokStats2, setPokStats2] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let list = [];
    axios
      .get(`https://pokeapi.co/api/v2/pokemon?limit=964`)
      .then((pokemons) => {
        console.log(pokemons.data);

        list = pokemons.data.results;
        setPokemons(list);
      })
      .catch((err) => console.log(err));
  }, []);
  async function getPokemons() {
    const result1 = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${name1}`
    );
    setPokStats1(result1.data);
    const result2 = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${name2}`
    );
    setPokStats2(result2.data);
    setLoaded(true);
  }
  function onChange1(name) {
    setPokname1(name);
  }
  function onChange2(name) {
    setPokname2(name);
  }
  function onSubmit(e) {
    e.preventDefault();
    getPokemons();
  }
  if (loaded) {
    return (
      <div className="Comp">
        <h1>Poke Comparator</h1>
      
        <Search
          onChange1={onChange1}
          onChange2={onChange2}
          onSubmit={onSubmit}
          options={pokemons.map((pokemon) => ({
            value: pokemon.name,
            name: pokemon.name,
          }))}
        />
        <div className="preview">
          <Preview pokemon1={pokStats1} pokemon2={pokStats2} />
        </div>
      </div>
    );
  } else {
    return (
      <div className="Comp">
        <h1>Poke Comparator</h1>
        <Search
          onChange1={onChange1}
          onChange2={onChange2}
          onSubmit={onSubmit}
          options={pokemons.map((pokemon) => ({
            value: pokemon.name,
            name: pokemon.name,
          }))}
        />
      </div>
    );
  }
}

export default Comp;
