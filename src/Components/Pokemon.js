import { useDispatch, useSelector } from "react-redux";
import { GetPokemon } from "../JS/actions/PokemonAction";
import _ from "lodash";
import { useEffect } from "react";
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import "./Pokemon.css"

const Pokemon = (props) => {
  const pokemonName = props.match.params.pokemon;
  const dispatch = useDispatch();
  const pokemonState = useSelector((state) => state.Pokemon);

  useEffect(() => {
    dispatch(GetPokemon(pokemonName));
  }, []);

  const ShowData = () => {
    if (!_.isEmpty(pokemonState.data[pokemonName])) {
      const pokeData = pokemonState.data[pokemonName];
      console.log(pokeData);
      return (
      
          
////    
<div className="pok">
<Flippy  flipOnClick={false} flipOnHover={true} flipDirection="horizontal" className='username' >
    <FrontSide >
        <div className="container">

        <div >
            <h1>Sprites</h1>
            <img src={pokeData.sprites.front_default} alt="" />
            <img src={pokeData.sprites.back_default} alt="" />
            <img src={pokeData.sprites.front_shiny} alt="" />
            <img src={pokeData.sprites.back_shiny} alt="" />
          </div>

        </div>

        </FrontSide>
        <BackSide >
            <div className="container">
            <div className="stats">
              <h1>Stats</h1>
              {pokeData.stats.map((el) => {
                return (
                  <div className="stats-bar">
                    <label>{el.stat.name}</label>
                    <progress max="100" value={el.base_stat} />
                  </div>
                );
              })}
            </div>
            </div>

        </BackSide>
    </Flippy>
        </div>



);
    }

    if (pokemonState.loading) {
      return <p>Loading...</p>;
    }

    if (pokemonState.errorMsg !== "") {
      return <p>{pokemonState.errorMsg}</p>;
    }

    return <p>error getting pokemon</p>;
  };

  return (
    <div className={"poke"}>
      <h1>{pokemonName}</h1>
      <ShowData />
    </div>
  );

};

export default Pokemon;