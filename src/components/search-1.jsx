import React, { useState } from "react";

function Search () {
    // what is a hook?
    // basically, it's a way of letting you "hook into" component lifecycle methods
    // like, most usefully, state - without using classes

    // why would we want to use them?
    // 1) can reduce the size of components from huge classes into smaller functions
    // 2) reduce the need to duplicate logic between components
    // 3) reduce use of complicated patterns like higher order components
    // 4) minifies better than classes
    // ...that said, your mileage may vary
    return (
        <div className="search-container">
            Search Giphy here!
        </div>
    );
}

export default Search;
