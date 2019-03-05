import React, { useState } from "react";

function Search () {
    // here it is! the magic of hooks:
    const [search, setSearch] = useState("");

    // what is useState? this is a function that returns a pair of values:
    //    - a state value
    //    - and the function that updates it

    return (
        <div className="search-container">
            Search Giphy here!
            <input
                value={search}
                onChange={ e => setSearch(e.target.value) }
            />
        </div>
    );
}

export default Search;
