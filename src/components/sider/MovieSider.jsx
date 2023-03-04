import { Layout, Row, Col } from "antd";
import { useState, useEffect } from "react";
import TRENDING_URL from "../../utils/trending";
import "./index.css";

const { Sider } = Layout;

const MovieSider = () => {
  const [trend, setTrend] = useState([]);

  useEffect(() => {
    fetch(`${TRENDING_URL}`)
      .then((response) => response.json())
      .then((data) => {
        setTrend(data.results);
      });
  }, []);

  return (
    <Sider
      style={{
        overflow: "auto",
        height: "80vh",
        position: "fixed",
        right: 0,
        margin: 5,
        borderRadius: 15,
      }}
    >
      <h2 style={{ color: "white", textAlign: "center" }}>Trending</h2>
      {trend.map(
        (trend, index) =>
          index < 4 && (
            <Row
              key={index}
              style={{
                height: 82,
                margin: 14,
                background: "rgba(255, 255, 255, 0.2)",
              }}
            >
              <Col span={9}>
                <img
                  src={`https://image.tmdb.org/t/p/w200/${trend.poster_path}`}
                  alt={trend.original_title || trend.name}
                  style={{ height: 82 }}
                />
              </Col>
              <Col span={15} style={{ color: "white", fontSize: 12 }}>
                <p style={{ fontWeight: "bold" }}>
                  {trend.original_title || trend.name}
                </p>
                <p>{trend.release_date || trend.first_air_date}</p>
              </Col>
            </Row>
          )
      )}
    </Sider>
  );
};

export default MovieSider;
