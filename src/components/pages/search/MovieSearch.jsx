import { useState } from "react";
import SEARCH_URL from "../../../utils/search";
import { Link } from "react-router-dom";
import { Input, Space } from "antd";
import { Layout, Row, Col, Card } from "antd";

const { Content } = Layout;
const { Search } = Input;

const MovieSearch = () => {
  const [search, setSearch] = useState([]);

  const handleSubmit = (value) => {
    fetch(`${SEARCH_URL}&query=${value}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setSearch(data.results);
      });
  };

  return (
    <>
      <Space
        direction="horizontal"
        style={{
          width: "100%",
          justifyContent: "center",
        }}
      >
        <Search
          placeholder="Enter the movie name"
          allowClear
          onSearch={handleSubmit}
          style={{ width: 600, marginTop: 20, marginBottom: 20 }}
        />
      </Space>
      <Layout className="layout">
        <Content
          style={{
            padding: "0 50px",
            paddingRight: "250px",
            paddingTop: "20px",
          }}
        >
          <div className="site-card-wrapper">
            <Row gutter={[16, 16]}>
              {search.map((result, index) => (
                <Col key={index} xs={24} sm={12} md={8} lg={4}>
                  <Link to={`/detail/${result?.id}`}>
                    <Card
                      hoverable
                      cover={
                        <img
                          alt={result?.title || result?.name}
                          src={`https://image.tmdb.org/t/p/w200/${result?.poster_path}`}
                        />
                      }
                    >
                      <Card.Meta
                        title={result?.title || result?.name}
                        description={
                          result?.release_date || result?.first_air_date
                        }
                      />
                    </Card>
                  </Link>
                </Col>
              ))}
            </Row>
          </div>
        </Content>
      </Layout>
    </>
  );
};

export default MovieSearch;
