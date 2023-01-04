import React from "react";
import Header from "./components/header/header-1";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header1 from "./components/header/header-2";
import Slider1 from "./components/slider/slider-1";
import Section1_1 from "./components/section1/section1-1";
import "./fonts/Parastoo.woff";
import "./fonts/Sahel.woff";
import "./fonts/Tanha.woff";
const App = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={
                    <div>
                        <div className="header-class">
                            <Header />
                            <Slider1 />
                            <Section1_1 />
                        </div>
                                                
                        <div className="header-class1">
                            <Header1 />
                            <Slider1 />
                            <Section1_1 />
                        </div>
                    </div>
                }/>
                <Route path="/first" element={<h2>man</h2>}/>
            </Routes>
        </BrowserRouter>
    )
};
export default App;
