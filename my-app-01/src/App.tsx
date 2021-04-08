import './App.css';
import React from 'react';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import TopSidebar from "./components/TopSidebar/TopSidebar";
import Content from "./components/Content/Content";

function App(props: any) {
    return (
      <div className="app-wrapper">
          <Header/>
          <TopSidebar/>
          <Navbar state={props.state}/>
          <Content state={props.state} dispatch={props.dispatch}/>
      </div>
    );
}

export default App;
