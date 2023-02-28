import React from "react";
import { Layout, Menu } from "antd";
import "./index.css";

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
            { key: "1", label: "Home" },
            { key: "2", label: "Movies" },
            { key: "3", label: "TV Shows" },
            { key: "4", label: "Actors" },
          ]}
        />
      </div>
    </Header>
  );
};

export default MovieHeader;
