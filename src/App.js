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


import RouteMain from './13/RouteMain';

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
    
        <div className="w-full xl:w-10/12 h-screen mx-auto flex flex-col justify-center items-center">
            <header className="w-full h-20 flex flex-row justify-between items-center  bg-slate-200">
                <p className="text-2xl font-bold p-5">
                    PNU KDT React 개발
                </p>
                <ul>
                    <li>
                        <Link to = "/">시계</Link>
                    </li>
                    <li>
                        <Link to = "/lotto">로또</Link>
                    </li>
                    <li>
                        <Link to = "/FoodMain">푸드</Link>
                    </li>
                    <li>
                        <Link to = "/BoxOffice">BoxOffice</Link>
                    </li>
                    <li>
                        <Link to = "/Traffic">Traffic</Link>
                    </li>

                </ul>
                <p className="text-4xl font-bold p-5">
                    <FaHome />
                </p>
            </header>
            <main className="w-full grow flex flex-col justify-center items-center overflow-y-auto">

                <Routes>
                    <Route path='/' element={<MyClock />}/>
                    <Route path='/lotto' element={<Lotto />}/>
                    <Route path='/FoodMain' element={<FoodMain />}/>
                    <Route path='/BoxOffice' element={<BoxOffice />}/>
                    <Route path='/Traffic' element={<Traffic />}/>
                </Routes>

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