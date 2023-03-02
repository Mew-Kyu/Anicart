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
        console.log(data);
        setTrend(data.results);
      });
  }, []);

  return (
    <Sider
      style={{
        overflow: "auto",
        height: "100vh",
        position: "fixed",
        right: 0,
        top: 0,
        bottom: 0,
      }}
    >
      <h2 style={{ color: "white", textAlign: "center" }}>Trending</h2>
      {trend.map((trend, index) => (
        <Row
          key={index}
          style={{
            height: 80,
            margin: 16,
            background: "rgba(255, 255, 255, 0.2)",
          }}
        >
          <Col span={9}>
            <img
              src={`https://image.tmdb.org/t/p/w200/${trend.poster_path}`}
              alt="icon"
              style={{ height: 80 }}
            />
          </Col>
          <Col span={15} style={{ color: "white", fontSize: 12 }}>
            <p>{trend.original_title}</p>
            <p>{trend.release_date}</p>
          </Col>
        </Row>
      ))}
    </Sider>
  );
};

export default MovieSider;
