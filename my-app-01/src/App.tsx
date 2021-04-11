import './App.css';
import React from 'react';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import TopSidebar from "./components/TopSidebar/TopSidebar";
import Content from "./components/Content/Content";

function App() {
    return (
      <div className="app-wrapper">
          <Header/>
          <TopSidebar/>
          <Navbar/>
          <Content/>
      </div>
    );
}

export default App;
