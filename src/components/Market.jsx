import React, { useEffect } from "react";
import "../static/Market.css";
import Data from "../ServerData.json";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Market() {
  const [pics, setPics] = useState([]);
  useEffect(() => {
    setPics(
      Data.map((data) => {
        return (
          <Link to={`Market/${data.id}`}>
            <img key={data.id} src={data.url} alt="img" className="img1" />
          </Link>
        );
      })
    );
  }, []);

  return (
    <div className="img-container">
      <div className="img-box box0">{pics[0]}</div>
      <div className="text-holder">
        <div className="text">
          lets do this bro like we never do it again. This is what we do.
          nothing gonna stop us. non no more. For the start until the end of the
          week we got to understand The main Job for the whole time which is
          drone designing. Then we we gain familiarity with various tools and
          devices That we are going to use during that time. The main thing is
          that we installed different software programs for programming,
          designing and simulation.
        </div>
      </div>
      <div className="img-box box1">{pics[1]}</div>
      <div></div>
      <div className="img-box box1">{pics[2]}</div>
      <div className="text-holder">
        <div className="text">
          lets do this bro like we never do it again. This is what we do.
          nothing gonna stop us. non no more. For the start until the end of the
          week we got to understand The main Job for the whole time which is
          drone designing. Then we we gain familiarity with various tools and
          devices That we are going to use during that time. The main thing is
          that we installed different software programs for programming,
          designing and simulation.
        </div>
      </div>
      <div className="img-box box2">{pics[3]}</div>
      <div className="img-box box3">{pics[4]}</div>
      <div></div>
      <div className="img-box box3">{pics[5]}</div> <div></div>
      <div className="img-box box4"></div>
    </div>
  );
}
