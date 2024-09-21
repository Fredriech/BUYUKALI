import React, { useEffect, useState } from "react";
import { redirect, useParams } from "react-router-dom";
import Data from "../ServerData.json";
import "../static/Stock.css";
import { useNavigate, useOutletContext } from "react-router-dom";

export default function Stock() {
  const params = useParams();
  const id = Number(params.id);
  const [folders, setFolder] = useOutletContext();

  const [data, setData] = useState({
    imgA: "",
    imgGrp: (
      <div className="wrapper">
        <div className="spinner"></div>
      </div>
    ),
  });

  const [like, setLike] = useState(0);

  function viewImg({ target }) {
    const indx = target.src.indexOf("src") - 1;
    setData((p) => {
      return {
        ...p,
        imgA: { url: target.src.substr(indx) },
      };
    });
  }

  useEffect(() => {
    Data.forEach((value) => {
      if (value.id === id) {
        let d = Data.map((v) => {
          return (
            <div key={v.id} className="img-A">
              <img src={v.url} onClick={viewImg} />
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

  const navigate = useNavigate();

  function reDirectPage() {
    return navigate("Purchase");
  }

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
            <div className="bk">Type: long dress</div>
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

          <div className="bk">
            chest size: <i className="metric">30</i> cm
          </div>
          <div className="bk">
            waist size: <i className="metric">32</i> cm
          </div>

          <div className="with-but">
            <div>
              price: <span className="price">30000 Tsh</span>{" "}
            </div>
          </div>
          <div className="dButton">
            <button
              className="buy-button"
              onClick={() => {
                setFolder((p) => {
                  if (p.paths.includes(data.imgA.url)) {
                    return {
                      ...p,
                    };
                  } else {
                    return {
                      paths: [...p.paths, data.imgA.url],
                      count: p.count + 1,
                    };
                  }
                });
              }}
            >
              Add to Cart
            </button>
            <button className="buy-button" onClick={reDirectPage}>
              Buy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
