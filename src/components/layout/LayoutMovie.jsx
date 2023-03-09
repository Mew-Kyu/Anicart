import { Layout, Space } from "antd";
import { Routes, Route, useNavigate } from "react-router-dom";
import MovieFooter from "../footer/MovieFooter";
import { publicRoute, privateRoutes } from "../../routes/index";
import { useEffect } from "react";
const { Content } = Layout;

const LayoutMovie = () => {
  const token = localStorage.getItem("Token");
  const navigator = useNavigate();
  useEffect(() => {
    if (!token) {
      navigator("/login");
    }
  }, [token, navigator]);
  return (
    <Space
      direction="vertical"
      style={{
        width: "100%",
      }}
      size={[0, 48]}
    >
      <Layout>
        <Layout>
          <Content>
            <Routes>
              {token ? (
                <>
                  {privateRoutes.map((route) => (
                    <Route
                      key={route.path}
                      path={route.path}
                      element={route.element}
                    />
                  ))}
                </>
              ) : (
                <>
                  (
                  {publicRoute.map((route) => (
                    <Route
                      key={route.path}
                      path={route.path}
                      element={route.element}
                    />
                  ))}
                  )
                </>
              )}
            </Routes>
          </Content>
        </Layout>
        <MovieFooter />
      </Layout>
    </Space>
  );
};
export default LayoutMovie;
