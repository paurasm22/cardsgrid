import React from "react";

const Card = () => {
  return (
    <div className="mt-6">
      <div className="card " style={{ width: "15rem" }}>
        <img src="..." className="card-img-top bg-black h-40 w-a5" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>

        <div className="card-body">
          <a href="#" className="btn btn-primary">
            <span class="material-symbols-outlined">shopping_cart</span>
          </a>
          <a href="#" className="card-link btn btn-warning ml-5 ">
            <span class="material-symbols-outlined ">favorite</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
