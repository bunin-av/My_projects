import './App.css';
import React, {ComponentType} from 'react';
import Navbar from "./components/Navbar/Navbar";
import TopSidebar from "./components/TopSidebar/TopSidebar";
import Content from "./components/Content/Content";
import HeaderContainer from "./components/Header/HeaderContainer";
import {connect, ConnectedProps} from "react-redux";
import {getUserProfile} from "./redux/profile-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import {getInitialized} from "./redux/app-reducer";
import {compose} from "redux";
import {withRouter} from "react-router-dom";
import {RootState} from "./redux/redux-store";


class App extends React.Component<AppProps> {

    componentDidMount() {
        this.props.getInitialized();
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


const mapState = (state: RootState) => ({
    isInitialized: state.app.isInitialized
})

export type AppProps = ConnectedProps<typeof connector>
const connector = connect(mapState, {getInitialized, getUserProfile})
export default compose<ComponentType> (
  connector,
  withRouter
)(App);
