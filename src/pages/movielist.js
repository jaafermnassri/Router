import React from "react";
import Moviecard from "../components/moviecard";

const Movielist = ({ data }) => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {data.map((el) => (
        <Moviecard el={el} key={el._id}  />
      ))}
    </div>
  );
};

export default Movielist;
