import React, { useState } from "react";

const SearchParams = () => {
  // const location = "Seattle, WA";
  const [location, setLocation] = useState("Seattle, WA");
  //useState("Seattle, WA" is the default state)
  //ALL HOOKS BEGIN WITH "USE" - Hooks bring stateful logic 
  //  [location, setLocation] - UseState always gives back an [Array] we should be destructuring. 
  // First item is always the STATE the second item is always the UPDATE FUNCTION.
  // [state, updaterFunction]
  //Hooks are to never be put in a conditional statement. 


  return (
    <div className="search-params">
      {/* <h1>{location}</h1> */}
      {/* Demonstrating that no matter where {location} is - it will update and re-render */}
      <form action="">
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={location}
            placeholder="Location"
            onChange={e => {
              setLocation(e.target.value);
            }}
          />
          {/* with out an useState/onChange you can't update the value of location input - when it rerenders the location is always the variable of location - 2way binding isn't "free" */}
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
