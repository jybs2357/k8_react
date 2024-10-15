import './App.css';
import { FaHome } from "react-icons/fa";


// import Hello from './01/Hello' ;
import MyClock from './02/MyClock' ;
// import MyDiv1 from './03/MyDiv1';
// import MyList from './04/MyList';
import Lotto from './05/Lotto';
import FoodMain from './06/FoodMain';
import BoxOffice from './07/BoxOffice';
// import MyBox from './08/MyBox';
import Traffic from './09/Traffic' ;
// import MyRef from './10/MyRef';
// import Gallery from './11/Gallery';
// import Festival from './12/Festival';
import Fcst from "./14/Fcst";
import FcstList from "./14/FcstList";

import RouteMain from './13/RouteMain';

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
    
        <div className="w-full xl:w-10/12 h-screen mx-auto flex flex-col justify-center items-center">
            <header className="w-full h-20 flex flex-row justify-between items-center  bg-slate-200">
                    PNU KDT React 개발
            </header>
            <main className="w-full grow flex flex-col justify-center items-center overflow-y-auto">
                <Fcst />
                <FcstList />
            </main>
            <footer className="w-full h-20 flex-shrink-0
                         flex justify-center items-center
                         bg-black text-white">
                <p>Korea National Open University<br />Computer Science 이준영</p>
            </footer>
        </div>
        </BrowserRouter>
    );
}

export default App;