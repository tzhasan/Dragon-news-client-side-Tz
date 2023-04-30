import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftNav = () => {
  const [catagories, setCatagories] = useState([]);
  useEffect(() => {
    fetch("https://dragon-news-server-ten-sepia.vercel.app/catagories")
      .then((res) => res.json())
      .then((data) => setCatagories(data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div>
      <h4 className="text-2xl font-bold">All Catagory</h4>
      {catagories.map((catagory) => (
        <p className="link-primary" key={catagory.id}>
          <Link to={`/catagory/${catagory.id}`}>{catagory.name}</Link>
        </p>
      ))}
    </div>
  );
};

export default LeftNav;
