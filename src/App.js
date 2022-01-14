import React from 'react';

import './App.css';
import Users from "./components/Users";
import Posts from "./components/Posts";
import Comments from "./components/Comments";

const App = () => {
    return (
        <>
            <div className={'wrapper'}>
                <Users/>
                <Posts/>
            </div>
            <Comments/>
        </>
    );
};

export default App;
