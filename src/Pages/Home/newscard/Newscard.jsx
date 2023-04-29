import React from "react";
import { Link } from "react-router-dom";
import { FaBookmark, FaEye, FaRegStar, FaRegStarHalf, FaShare } from "react-icons/fa";
import Rating from "react-rating";

const Newscard = ({ news }) => {
  const { _id, title, details, image_url, author, rating, total_view } = news;
  return (
    <div className="card card-compact mb-4 bg-base-100 shadow-xl">
      <div className="card-body">
        <div className="flex justify-between items-center mx-2">
          <div className="flex gap-3 items-center">
            <img className="w-[10%] rounded-full" src={author.img} alt="" />
            <div className="flex flex-col">
              <h4 className="font-bold">{author.name}</h4>
              <h4>{author.published_date}</h4>
            </div>
          </div>
          <div className="flex gap-3 text-2xl">
            <span>
              <FaBookmark />
            </span>
            <span>
              <FaShare />
            </span>
          </div>
        </div>
        <h2 className="card-title">{title}</h2>
        <img src={image_url} alt="" />
        <p>
          {details.length < 250 ? (
            <>{details}</>
          ) : (
            <>
              {details.slice(0, 250)}...
              <Link className="link-error" to={`/news/${_id}`}>Read More</Link>
            </>
          )}
        </p>
        <div className="card-actions justify-between">
          <div className="flex items-center gap-2">
            <Rating
              readonly
              placeholderRating={rating.number}
              emptySymbol={<FaRegStarHalf />}
              placeholderSymbol={<FaRegStar />}
              fullSymbol={<FaRegStar />}
            />
            {rating.number}
          </div>
          <div className="flex items-center gap-2">
            <FaEye></FaEye>
            {total_view}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newscard;
