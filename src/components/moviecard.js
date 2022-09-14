import React from "react";
import "./moviecard.css";
import StarRatings from "react-star-ratings";
import { Link } from "react-router-dom";
const Moviecard = ({ el }) => {
  return (
    <Link to={`/movies/${el._id}`}>
    <div>
      <div style={{ padding: 35 }}>
        <figure className="movie">
          <div className="movie__hero">
            <img src={el.ImageURL} alt="newmovie" className="movie__img" />
          </div>
          <div className="movie__content">
            <div className="movie__title">
              <h1 className="heading__primary">
                {el.Title}
                <i className="fas fa-fire" />
              </h1>
              <div className="movie__tag movie__tag--1">#action</div>
              <div className="movie__tag movie__tag--2">#thriller</div>
            </div>
            <p className="movie__description">{el.Description}</p>
            <div className="movie__details">
            <p className="movie__detail">
                <span className="icons icons-red">
                  <i className="fas fa-camera-retro" />{" "}
                </span>
                <StarRatings
                  numberOfStars={5}
                  rating={el.Rating}
                  name="Rating"
                  starRatedColor="gold"
                  starDimension="20px"
                  starSpacing="5px"
                />
              </p>
              <p className="movie__detail">
                <span className="icons icons-grey">
                  <i className="fas fa-clock" />{" "}
                </span>
                1h 33m
              </p>
              <p className="movie__detail">
                <span className="icons icons-yellow">
                  <i className="fas fa-file-invoice-dollar" />
                </span>
                $12.52
              </p>
            </div>
          </div>
          <div className="movie__price">$12.56</div>
        </figure>
      </div>
    </div>
    </Link>
  );
};

export default Moviecard;
