import './App.css';
import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import TopSidebar from "./components/TopSidebar/TopSidebar";
import Content from "./components/Content/Content";
import HeaderContainer from "./components/Header/HeaderContainer";
import {connect} from "react-redux";
import {getUserProfile} from "./redux/profile-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import {getInitialized} from "./redux/app-reducer";
import {compose} from "redux";
import {withRouter, Redirect} from "react-router-dom";


type AppPropsType = {
    getInitialized: () => void
    getUserProfile: (id: number, authId: number) => void
    isInitialized: boolean
}

class App extends React.Component<AppPropsType, any> {

    componentDidMount() {
        this.props.getInitialized();
        // if (this.props.match.url === '/') <Redirect to={'/profile'}/>
        debugger
    }

    render() {
        if (!this.props.isInitialized) {
            return <Preloader/>
        }

        return <div className="app-wrapper">
            <HeaderContainer/>
            <TopSidebar/>
            <Navbar/>
            <Content/>
        </div>
    }
}


const mapState = (state: { app: { isInitialized: boolean } }) => ({
    isInitialized: state.app.isInitialized
})

export default compose<React.Component> (
  connect(mapState, {getInitialized, getUserProfile}),
  withRouter
)(App);
