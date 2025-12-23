import React, { useState } from "react";
import ParentComponent from "./parentcomponent";

export const Counter = () => {
  {
    const [state, setState] = useState(0);
    const increment = () => {
      //   setState(state + 1);
      setState((prevState) => prevState + 1);
      setState((prevState) => prevState + 1);
    };
    const decrement = () => {
      setState(state - 1);
    };
    return (
      <>
        <ParentComponent>
          <h1>Content</h1>
          <h1>{state}</h1>
          Increment <button onClick={increment}></button>
          <br />
          Increment <button onClick={decrement}></button>
        </ParentComponent>
      </>
    );
  }
};

export default Counter;
