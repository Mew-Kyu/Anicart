import React from "react";
import { Layout, Row, Col, Card } from "antd";
import POLULAR_URL from "../../../utils/popular";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MovieSider from "../../sider/MovieSider";
import MovieHeader from "../../header/MovieHeader";

const { Content } = Layout;

const MovieHome = () => {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    fetch(`${POLULAR_URL}`)
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        setPopular(data.results);
      });
  }, []);
  return (
    <>
      <MovieHeader />
      <Layout className="layout">
        <Content
          span={16}
          style={{
            padding: "0 50px",
            paddingRight: "250px",
            paddingTop: "20px",
          }}
        >
          <div className="site-card-wrapper">
            <Row gutter={[16, 16]}>
              {popular.map((popular, index) => (
                <Col key={index} xs={24} sm={12} md={8} lg={4}>
                  <Link to={`/detail/${popular.id}`}>
                    <Card
                      hoverable
                      cover={
                        <img
                          alt={popular.title}
                          src={`https://image.tmdb.org/t/p/w200/${popular.poster_path}`}
                        />
                      }
                    >
                      <Card.Meta
                        title={popular.title}
                        description={popular.release_date}
                      />
                    </Card>
                  </Link>
                </Col>
              ))}
            </Row>
          </div>
        </Content>
        <MovieSider span={8} />
      </Layout>
    </>
  );
};

export default MovieHome;
