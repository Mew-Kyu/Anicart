import React from "react";
import { Layout, Menu, Input } from "antd";
import "./index.css";

const { Header } = Layout;
const { Search } = Input;

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
            {
              key: "5",
              label: (
                <Search
                  placeholder="Search for a movie"
                  allowClear
                  enterButton
                  style={{
                    width: 300,
                    paddingTop: "16px",
                  }}
                />
              ),
            },
          ]}
        />
      </div>
    </Header>
  );
};

export default MovieHeader;
