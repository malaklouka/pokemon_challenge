import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GetPokemonList } from "../JS/actions/PokemonAction";
import ReactPaginate from "react-paginate";
import _ from "lodash";
import Pokemon from "./Pokemon";
import "./Pokemon.css"


/**POKEMON'S LIST */
const PokemonList = (props) => {
  const [search, setSearch] = useState();
  const [nbr, setNbr] = useState (); 
  const [result, setResult] = useState(nbr);
  const handleClick = event => {
    setResult(nbr)
  }
  const dispatch = useDispatch();
  const PokemonList = useSelector((state) => state.PokemonList);
  useEffect(() => {
    FetchData(1);
  }, []);
  const FetchData = (page = 1) => {
    dispatch(GetPokemonList(page));
  };

  const showData = () => {
    if (PokemonList.Loading) {
    <p style={{position:"center", color:"red"}}> Pokemon is loading...</p>
 ;
    }

    if (!_.isEmpty(PokemonList.data)) {
      return (
        <div className="list-wrapper">
          {PokemonList.data.map((el) => {
            return (
              <>
              <div className="container">

              <div className="pokeball">
                <div className="line"></div>
            
                <div className="circle-top">
                  <div className="darker " id="darker"></div>
                  <div className="circle-black" id="button-2">
                    <div className="circle-black2" id="button-2"></div>
                    <div className="button"  id="button">
                      <div className="button-in" onClick="pokemon()" ></div>
                      
                    </div>
             <Link to={`/pokemon/${el.name}`}>  <p>{el.name}</p> </Link>
                  </div>
                </div>
                <div className="circle-bottom">
            
                </div>
              </div>
            </div>
            <div className="pokes" id="pokes"></div>
            </>
            );
          })}
        </div>
        /**max de pokemon  */
        /**<><ul>
          {
            PokemonList.data.map((el,i)=> {
               return (<li key={el.id}>{el.name}</li>)
          }).filter((e,k) => k < 10)
          }
       </ul></> */
      );
    }

    if (PokemonList.errorMsg !== "") {
      return <p>{PokemonList.errorMsg}</p>;
    }

    return <p>Pokemon is not ready</p>;
  };

  return (
    <div>
      <div className={"search-wrapper"}>
        <input
          type="text"
          placeholder="Search"
          onChange={(e) => setSearch(e.target.value)}
        />
         
        <button onClick={() => props.history.push(`/pokemon/${search}`)}>
          search pokemon
        </button>
      </div>
      <div>
      <input
          type="text"
          placeholder="nombre max"
          onChange={e => setNbr(+e.target.value)}
        />
      <button onClick={handleClick}>Click Here</button>
         
      </div>
     
     

      {showData()}
      {!_.isEmpty(PokemonList.data) && (

        /**pagination */
        <ReactPaginate
          pageCount={Math.ceil(PokemonList.count / 18)}
          pageRangeDisplayed={2}
          marginPagesDisplayed={1}
          onPageChange={(data) => FetchData(data.selected + 1)}
          containerClassName={"pagination"}
        />
      )}
    </div>
  );
};

export default PokemonList;