import './App.css';
import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import TopSidebar from "./components/TopSidebar/TopSidebar";
import Content from "./components/Content/Content";
import HeaderContainer from "./components/Header/HeaderContainer";

function App() {
    return (
      <div className="app-wrapper">
          <HeaderContainer />
          <TopSidebar/>
          <Navbar/>
          <Content/>
      </div>
    );
}

export default App;
