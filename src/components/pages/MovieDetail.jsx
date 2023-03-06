import React, { useState, useEffect } from "react";
import DETAIL_URL from "../../utils/detail";
import api_key from "../../utils/key";
import { Row, Col, Card, Typography } from "antd";
import { useParams } from "react-router-dom";
const { Title, Text } = Typography;

const MovieDetail = () => {
  const [detail, setDetail] = useState();
  const [companies, setCompanies] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch(`${DETAIL_URL}${id}?api_key=${api_key}&language=en-US`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.success === false) {
          alert("error");
        }
        setDetail(data);
        setCompanies(data.production_companies);
      });
  }, [id]);
  return (
    <div>
      <Row gutter={[16, 16]} style={{ margin: 10, padding: 10 }}>
        <Col xs={24} md={8}>
          <Card
            hoverable
            cover={
              <img
                alt={detail?.original_title}
                src={`https://image.tmdb.org/t/p/w200/${detail?.poster_path}`}
              />
            }
          >
            <Card.Meta
              title={detail?.original_title}
              description={detail?.release_date}
            />
          </Card>
        </Col>
        <Col xs={24} md={16}>
          <Title level={2}>{detail?.original_title}</Title>
          <Text strong>Release Date:</Text> {detail?.release_date}
          <br />
          <Text strong>Budget:</Text> {detail?.budget}$
          <br />
          <Text strong>Revenue:</Text> {detail?.revenue}$
          <br />
          <Text strong>Plot:</Text> {detail?.overview}
          <br />
          <Text strong>Production Companies:</Text> <br />
          <ul>
            {companies.map((companies, index) => (
              <li key={index}>
                <p>{companies?.name}</p>
                <img
                  src={`https://image.tmdb.org/t/p/w200/${companies?.logo_path}`}
                  alt={companies?.name}
                />
              </li>
            ))}
          </ul>
        </Col>
      </Row>
    </div>
  );
};

export default MovieDetail;
