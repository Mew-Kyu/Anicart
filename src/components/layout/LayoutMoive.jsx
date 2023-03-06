import { Layout, Space } from "antd";
import { Routes, Route } from "react-router-dom";
import MovieFooter from "../footer/MovieFooter";
import MovieHeader from "../header/MovieHeader";
import MovieHome from "../pages/home/MovieHome";
import MovieLogin from "../pages/login/MovieLogin";
import MovieDetail from "../pages/MovieDetail";
import MovieSearch from "../pages/search/MovieSearch";
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
              <Route path="*" element={<MovieHome />} />
              <Route path="/search" element={<MovieSearch />} />
              <Route path="/login" element={<MovieLogin />} />
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
