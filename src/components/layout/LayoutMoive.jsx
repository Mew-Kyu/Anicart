import { Layout, Space } from "antd";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import MovieFooter from "../footer/MovieFooter";
import MovieHeader from "../header/MovieHeader";
import MovieHome from "../pages/home/MovieHome";
import MovieDetail from "../pages/MovieDetail";
import MovieSider from "../sider/MovieSider";
import POLULAR_URL from "../../utils/popular";
const { Content } = Layout;

const LayoutMoive = () => {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    fetch(`${POLULAR_URL}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPopular(data.results);
      });
  }, []);
  return (
    <Space
      direction="vertical"
      style={{
        width: "100%",
      }}
      size={[0, 48]}
    >
      <Layout>
        <MovieHeader />
        <Layout>
          <Content>
            <Routes>
              <Route path="/" element={<MovieHome />} />
              <Route
                path={`/detail/${popular?.id}`}
                element={<MovieDetail />}
              />
            </Routes>
          </Content>
          <MovieSider />
        </Layout>
        <MovieFooter />
      </Layout>
    </Space>
  );
};
export default LayoutMoive;
