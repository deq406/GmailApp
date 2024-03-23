import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import "./Home.css";
import Body from "../components/Body";

function Home() {
  return (
    <>
      <Header />
      <div className="grid-cont">
        <Sidebar />
        <Body />
      </div>
    </>
  );
}

export default Home;
