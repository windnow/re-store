import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './app.css';
import { CartPage, HomePage } from '../pages';


/* Simple examples of context data
import SimpleCtx from '../pages/simple/simpleHoc';
import SimpleHOC from '../pages/simple/simpleCtx';
import SimpleHook from '../pages/simple/simpleHook';
*/

const App = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<HomePage />} exact/>
                <Route path="/cart" element={<CartPage />} />
            </Routes>
        </div>
    )
};

export default App;