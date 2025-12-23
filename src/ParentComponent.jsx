import React from "react";

export const ParentComponent = ({ children }) => {
  return (
    <div>
      <nav> Navigation Bar</nav>
      {children}
      <footer>footer</footer>
    </div>
  );
};

export default ParentComponent;
