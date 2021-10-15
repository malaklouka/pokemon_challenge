import React from 'react'
import PokemonList from '../PokemonList'
const Max=()=>{
<>
<ul>
          {
            PokemonList.data.map((el,i)=> {
               return (<li key={el.id}>{el.name}</li>)
          }).filter((e,k) => k < 10)
          }
       </ul></>
}

export default Max;