import React from "react";
import { Layout } from "antd";

const { Footer } = Layout;

const MovieFooter = () => {
  return (
    <Footer
      style={{
        textAlign: "center",
        color: "#fff",
        backgroundColor: "rgb(0 21 41)",
      }}
    >
      This is a sample movie app created using React and Ant Design.
    </Footer>
  );
};

export default MovieFooter;
