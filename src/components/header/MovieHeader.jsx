import React from "react";
import { Layout, Menu } from "antd";
import "./index.css";
import { Link } from "react-router-dom";

const { Header } = Layout;

const MovieHeader = () => {
  return (
    <Header className="header">
      <div className="logo" />
      <div className="header-content">
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["1"]}
          items={[
            { key: "1", label: <Link to="/">Home</Link> },
            { key: "2", label: <Link to="/movie">Movie</Link> },
            { key: "3", label: <Link to="/tv">TV Show</Link> },
            { key: "4", label: <Link to="/actor">Actor</Link> },
          ]}
        />
      </div>
    </Header>
  );
};

export default MovieHeader;
