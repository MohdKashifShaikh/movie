import React, { useEffect, useState } from "react";
import { Movies } from "../utils/data";
import Axios from "axios";

const Cards = () => {
  document.title = "Index";
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setMovies(Movies);
    }, 800);
    Axios.get("http://localhost:5000/get-route");
  }, []);

  const handleAPI = () => {
    Axios({
      method: "POST",
      url: `http://localhost:5000/movies`,
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      data: movies,
    })
      .then((response) => {
        if (response.status === 200) {
          alert("Sent Success!!!");
        }
      })
      .catch((error) => {
        console.log(`Error is : `, error.toString());
      });
  };

  const handleCard = (data) => {
    console.log(data);
    if (!data) {
      alert("Please select atleast 1 card!");
      return;
    }
    Axios({
      method: "POST",
      url: `http://localhost:5000/card`,
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      data,
    })
      .then((response) => {
        if (response.status === 200) {
          alert("Added!!!");
        }
      })
      .catch((error) => {
        console.log(`Error is : `, error.toString());
      });
  };

  return (
    <div className="mt-5">
      <div className="text-end me-5 mb-4">
        <button className="btn btn-danger" onClick={handleAPI}>
          Send API
        </button>
      </div>
      <div className="flex-box card-div">
        {movies.length > 0 ? (
          movies.map((val) => {
            return (
              <div className="card m-2" style={{ width: "18rem" }}>
                <img
                  src={val.image}
                  className="card-img-top"
                  alt={val.name}
                  width={100}
                  height={180}
                />
                <div className="card-body">
                  <h4 className="card-title">{val.name}</h4>
                  <h5 className="card-title">Rating : {val.rating}</h5>
                  <h6 className="card-title">Date : {val.releasedDate}</h6>
                  <div className="d-grid">
                    <button className="btn btn-danger" onClick={() => handleCard(val)}>
                      Select
                    </button>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div className="text-end ms-5">
            <h2 className="text-end ms-5">Loading...</h2>
          </div>
        )}{" "}
      </div>
    </div>
  );
};

export default Cards;
