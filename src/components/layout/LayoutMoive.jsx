import { Layout, Space } from "antd";
import { Routes, Route } from "react-router-dom";
import MovieFooter from "../footer/MovieFooter";
import MovieHeader from "../header/MovieHeader";
import MovieHome from "../pages/home/MovieHome";
import MovieDetail from "../pages/MovieDetail";
import MovieSider from "../sider/MovieSider";
const { Content } = Layout;

const LayoutMoive = () => {
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
              <Route path="/detail/:id" element={<MovieDetail />} />
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
