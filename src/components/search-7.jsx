import React, { useState, useEffect } from "react";
import { searchGiphy } from "../utils";

function Search () {
    const [search, setSearch] = useState("");
    const [prevSearches, setPrevSearch] = useState([]);
    const [timesSearch, setTimesSearch] = useState(0);
    const [gifs, setGifs] = useState([]);

    useEffect(() => {
        if (prevSearches.length === 5) {
            let clippedPrevSearches = prevSearches.slice(0, 4);
            setPrevSearch(clippedPrevSearches);
        }
    });

    console.log(gifs);

    return (
        <div className="search-container">
            Search Giphy here!
            <p>Number of times searched: <span>{timesSearch}</span></p>
            <input
                value={search}
                onChange={ e => setSearch(e.target.value) }
            />
          <button onClick={async () => {
              setTimesSearch(timesSearch + 1);
              const newPrevSearches = prevSearches.slice();
              newPrevSearches.unshift(search);
              setPrevSearch(newPrevSearches);
              const newGifs = await searchGiphy(search);
              setGifs(newGifs);
            }}
          >
                Search!
            </button>
            <div style={{display: "flex", marginTop: "15px"}}>
                <div style={{width: "25%"}}>
                    <p>Previous searches:</p>
                    { prevSearches.map( (prev, idx) => <p key={`idx-${prev}`}>{prev}</p>) }
                </div>
                <div style={{width: "50%"}}>
                    { gifs.map( (gif,idx) => <img key={idx} src={gif} />) }
                </div>
            </div>
        </div>
    );
}

export default Search;
