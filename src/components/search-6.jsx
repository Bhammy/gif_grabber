import React, { useState, useEffect } from "react";

function Search () {
    const [search, setSearch] = useState("");
    const [prevSearches, setPrevSearch] = useState([]);
    const [timesSearch, setTimesSearch] = useState(0);

    // we can do more than just use state - we can mimic methods like
    // componentDidMount, componentDidUpdate, and componentWillUnmount
    // they are all covered by a single API function, useEffect!
    // it's called useEffect because it fires off side effects
    // in this case, we

    useEffect(() => {
        // note!!
        // a rule of hooks is that you *must not use* hooks
        //    - conditionally
        //    - in loops
        //    - in other functions
        // Hooks *need* to be run in the same order throughout a component
        // thus, only call them at a top level
        // and if you need conditionals, call them within the hook:
        if (prevSearches.length === 5) {
            let clippedPrevSearches = prevSearches.slice(0, 4);
            setPrevSearch(clippedPrevSearches);
        }
    });

    return (
        <div className="search-container">
            Search Giphy here!
            <p>Number of times searched: <span>{timesSearch}</span></p>
            <input
                value={search}
                onChange={ e => setSearch(e.target.value) }
            />
          <button onClick={() => {
              setTimesSearch(timesSearch + 1);
              const newPrevSearches = prevSearches.slice();
              newPrevSearches.unshift(search);
              setPrevSearch(newPrevSearches);
            }}
          >
                Search!
            </button>
            <div>
                <p>Previous searches:</p>
                { prevSearches.map( (prev, idx) => <p key={`idx-${prev}`}>{prev}</p>) }
            </div>
        </div>
    );
}

export default Search;
