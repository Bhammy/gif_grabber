import React, { useState } from "react";

function Search () {
    const [search, setSearch] = useState("");
    const [timesSearch, setTimesSearch] = useState(0);

    // things to note!
    //    - useState's argument is the *initial state value*
    //    - it does *not* need to be an object
    //    - you can use it more than once (whoah)

    return (
        <div className="search-container">
            Search Giphy here!
            <p>Number of times searched: <span>{timesSearch}</span></p>
            <input
                value={search}
                onChange={ e => setSearch(e.target.value) }
            />
            <button onClick={() => setTimesSearch(timesSearch + 1)}>
                Search!
            </button>
        </div>
    );
}

export default Search;
