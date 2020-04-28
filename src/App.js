import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/NavBar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";

const App = (props) => {

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs'
                           render={() => (<Dialogs state={props.state.dialogPage}/>)}/>
                    <Route exact path='/profile'
                           render={() => (<Profile
                               state={props.state.profilePage}
                               addPost={props.addPost}
                           />)}/>
                    <Route path='/news'
                           render={() => (<News/>)}/>
                    <Route path='/settings'
                           render={() => (<Settings/>)}/>
                </div>
            </div>
        </BrowserRouter>)
}

export default App;
