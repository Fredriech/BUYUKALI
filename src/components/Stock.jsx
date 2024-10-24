import React, { useEffect, useState, Suspense } from "react";
import { useParams } from "react-router-dom";
import "../static/Stock.css";
import {
  useNavigate,
  useOutletContext,
  useLoaderData,
  Await,
} from "react-router-dom";

export default function Stock() {
  const params = useParams();
  const { setFolder } = useOutletContext();
  const loadedData = useLoaderData();

  const [data, setData] = useState({
    imgA: "",
    imgGrp: [],
  });

  const [like, setLike] = useState(0);
  const navigate = useNavigate();

  const addPhoto = () => {
    setFolder((p) => {
      for (const v of p.paths) {
        if (v.url === data.imgA.url) {
          return {
            ...p,
          };
        }
      }
      return {
        paths: [...p.paths, data.imgA],
        count: p.count + 1,
      };
    });
  };

  function reDirectPage() {
    addPhoto();
    return navigate(`/Market/${params.id}/Purchase`, { replace: true });
  }

  return (
    <div className="contain-detail">
      <Suspense
        fallback={
          <div className="wrapper-b">
            <div></div>
          </div>
        }
      >
        <Await resolve={loadedData.viewData}>
          {(Data) => {
            useEffect(() => {
              for (const value of Data) {
                if (value.id === Number(params.id)) {
                  const d = Data.map((v) => {
                    return (
                      <div key={v.id} className="img-A">
                        <img
                          src={v.url}
                          onClick={() => {
                            setData((p) => {
                              return {
                                ...p,
                                imgA: v,
                              };
                            });
                          }}
                        />
                      </div>
                    );
                  });
                  setData(() => {
                    return {
                      imgGrp: d,
                      imgA: value,
                    };
                  });
                  break;
                }
              }
            }, [params]);
            return (
              <>
                <div className="image-slider">{data.imgGrp}</div>

                <div className="center-img">
                  <div className="img-wrapper">
                    <img src={data.imgA.url} className="detailed-img" />
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
                      <button className="buy-button" onClick={addPhoto}>
                        Add to Cart
                      </button>
                      <button className="buy-button" onClick={reDirectPage}>
                        Buy
                      </button>
                    </div>
                  </div>
                </div>
              </>
            );
          }}
        </Await>
      </Suspense>
    </div>
  );
}
