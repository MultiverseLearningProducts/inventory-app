import React from "react";

export const NavBar = ({fetchItems}) => {
  return (
    <>
      <div className="allthings" onClick={fetchItems}>All things 🔥</div>
    </>
  );
};
