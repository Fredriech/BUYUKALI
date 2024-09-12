import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Data from "../ServerData.json";
import "../static/Stock.css";

export default function Stock() {
  const params = useParams();
  const id = Number(params.id);
  const [data, setData] = useState({
    imgA: {},
    imgGrp: <div className="img-A">Hello!</div>,
  });
  const [like, setLike] = useState(0);

  useEffect(() => {
    Data.forEach((value) => {
      if (value.id === id) {
        let d = Data.map((v) => {
          return (
            <div key={v.id} className="img-A">
              <img src={v.url} />
            </div>
          );
        });
        setData((p) => {
          return {
            imgGrp: d,
            imgA: value,
          };
        });
      }
    });
  }, [params]);

  return (
    <div className="contain-detail">
      <div className="image-slider">{data.imgGrp}</div>
      <div className="center-img">
        <div className="img-wrapper">
          {data !== "" ? (
            <img src={data.imgA.url} className="detailed-img" />
          ) : (
            ""
          )}
        </div>
        <div className="img-details">
          <div className="details-o1">
            <div>Type: long dress</div>
            <div className="liked">
              Like{" "}
              <label className="checkme">
                <input
                  type="checkbox"
                  onClick={(e) =>
                    e.target.checked
                      ? setLike((p) => p + 1)
                      : setLike((p) => p - 1)
                  }
                />
                <span>&#9829;</span>
              </label>
              <strong>{like}</strong>
            </div>
          </div>

          <div>chest size: 30 cm</div>
          <div>waist size: 32 cm </div>

          <div className="with-but">
            <div>
              price: <span className="price">30000 Tsh</span>{" "}
            </div>
            <button className="buy-button">Buy</button>
          </div>
        </div>
      </div>
    </div>
  );
}
