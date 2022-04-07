import React from 'react';
import ReactDOM from 'react-dom'
import {
    BrowserRouter,
    Switch,
    Route
} from "react-router-dom";
import Navbar from "./Navbar";
import Welcome from "./Welcome";
import Core from "./Core";
import Tellstory from "./Tellstory";
import HelpUkraine from "./HelpUkraine";
import AboutUs from "./AboutUs";

const Main = () => {
    return (
        <BrowserRouter>
            <div className='app-body'>
                <Navbar/>
                <div id='app-body'>
                    <Switch>
                        <Route exact path='/'>
                            <Welcome/>
                        </Route>
                        <Route exact path='/core'>
                            <Core/>
                        </Route>
                        <Route exact path='/tellstory'>
                            <Tellstory/>
                        </Route>
                        <Route exact path='/helpukraine'>
                            <HelpUkraine/>
                        </Route>
                        <Route exact path='/about'>
                            <AboutUs/>
                        </Route>
                    </Switch>
                </div>
            </div>
        </BrowserRouter>
    );
};

export default Main;

if (document.getElementById('root')) {
    ReactDOM.render(<Main />, document.getElementById('root'));
}
