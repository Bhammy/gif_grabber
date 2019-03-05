import React, { useState, useEffect } from "react";

function Search () {
    const [search, setSearch] = useState("");
    const [prevSearches, setPrevSearch] = useState([]);
    const [timesSearch, setTimesSearch] = useState(0);

    // we can do more than just use state - we can mimic methods like
    // componentDidMount, componentDidUpdate, and componentWillUnmount
    // they are all covered by a single API function, useEffect!
    // it's called useEffect because it fires off side effects
    //

    useEffect(() => {
        if (prevSearches.length === 5) {
            let clippedPrevSearches = prevSearches.slice(0, 4);
            setPrevSearch(clippedPrevSearches);
        }
    })

    return (
        <div className="search-container">
            Search Giphy here!
            <p>Number of times searched: <span>{timesSearch}</span></p>
            <input
                value={search}
                onChange={ e => setSearch(e.target.value) }
            />
          <button onClick={() => {
              setTimesSearch(timesSearch + 1)
              const newPrevSearches = prevSearches.slice();
              newPrevSearches.unshift(search);
              setPrevSearch(newPrevSearches);
            }}
          >
                Search!
            </button>
            <div>
                <p>Previous searches:</p>
                { prevSearches.map( prev => <p>{prev}</p>) }
            </div>
        </div>
    );
}

export default Search;
