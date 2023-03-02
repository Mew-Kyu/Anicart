import { Layout, Space } from "antd";
import MovieFooter from "../footer/MovieFooter";
import MovieHeader from "../header/MovieHeader";
import MovieHome from "../pages/home/MovieHome";
import MovieSider from "../sider/MovieSider";
const { Content } = Layout;

const LayoutMoive = () => (
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
          <MovieHome />
        </Content>
        <MovieSider />
      </Layout>
      <MovieFooter />
    </Layout>
  </Space>
);
export default LayoutMoive;
