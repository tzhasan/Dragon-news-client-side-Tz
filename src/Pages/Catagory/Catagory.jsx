import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Newscard from '../Home/newscard/Newscard';

const Catagory = () => {
  const { id } = useParams()
  const catagoryNews = useLoaderData()
  return (
    <div>
      {id && <h2>Total news: {catagoryNews.length}</h2>}

      {catagoryNews.map((news) => (
        <Newscard key={news._id} news={news}></Newscard>
      ))}
    </div>
  );
};

export default Catagory;