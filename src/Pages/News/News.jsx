import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';

const News = () => {
  const news = useLoaderData()
  const { _id, title, details, image_url, category_id } = news;

  return (
    <div className="card w-[90%] p-4 mx-auto glass">
      <figure>
        <img src={image_url} alt="" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{details}</p>
        <div className="card-actions ">
          <Link to={`/catagory/${category_id}`}>
            <button className="btn btn-primary">
              <FaArrowLeft />
              All news in this category
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default News;