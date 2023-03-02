import { Layout, Space } from "antd";
import MovieFooter from "../footer/MovieFooter";
import MovieHeader from "../header/MovieHeader";
import MovieSider from "../sider/MovieSider";
const { Content } = Layout;

const contentStyle = {
  textAlign: "center",
  minHeight: 120,
  lineHeight: "120px",
  color: "#fff",
  backgroundColor: "#108ee9",
};

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
        <Content style={contentStyle}>Content</Content>
        <MovieSider />
      </Layout>
      <MovieFooter />
    </Layout>
  </Space>
);
export default LayoutMoive;
