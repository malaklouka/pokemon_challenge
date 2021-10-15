import React from "react";
import { v4 as uuidv4 } from "uuid";
let i = -1;
let j = -1;
export default function Preview({ pokemon1, pokemon2 }) {
  return (
    <div className="preview">
      <div>
        <h4>Name</h4>
        <h4>Height</h4>
        <br />
        <h4>Sprite</h4>
        <br />
        <h4>Hp</h4>
        <h4>Attack</h4>
        <h4>Defense</h4>
        <h4>S-Attack</h4>
        <h4>S-Defense</h4>
        <h4>Speed</h4>
      </div>
      <div>
        <h4>{pokemon1.name}</h4>
        <h4
          style={{ color: pokemon1.height > pokemon2.height ? "green" : "red" }}
        >
          {pokemon1.height}
        </h4>
        <div className="image">
        <img src={pokemon1.sprites.front_default} alt="" />
        </div>
        {pokemon1.stats.map((stat) => {
          j=(j+1)
          if(j===6){
            j=0
          }
          return (
            <h4
              key={uuidv4()}
              style={{
                color:
                  pokemon2.stats[j].base_stat < stat.base_stat
                    ? "green"
                    : "red",
              }}
            >
              {stat.base_stat}
            </h4>
          );
        })}
      </div>
      <div>
        <h4>{pokemon2.name}</h4>
        <h4
          style={{ color: pokemon1.height < pokemon2.height ? "green" : "red" }}
        >
          {pokemon2.height}
        </h4>
        <div className="image">
        <img src={pokemon2.sprites.front_default} alt="" />
        </div>
        {pokemon2.stats.map((stat) => {
          i=i+1
          if(i===6){
            i=0
          }
          return (
            <h4
              key={uuidv4()}
              style={{
                color:
                  pokemon1.stats[i].base_stat < stat.base_stat
                    ? "green"
                    : "red",
              }}
            >
              {stat.base_stat}
            </h4>
          );
        })}
      </div>
    </div>
  );
}
