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
            { key: "2", label: <Link to="/search">Search</Link> },
          ]}
        />
      </div>
    </Header>
  );
};

export default MovieHeader;
