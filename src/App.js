import './App.css';
import { FaHome } from "react-icons/fa";
// import FoodMain from './06/FoodMain';
// import BoxOffice from "./07/BoxOffice";
// import MyBoxFlag from "./08/MyBoxFlag";
// import MyRef from './10/MyRef';
import Gallery from './11/Gallery';

function App() {
    return (
        <div className="w-full xl:w-10/12 h-screen mx-auto
                    flex flex-col justify-center items-center">
            <header className="w-full h-20
                         flex justify-between items-center
                         bg-slate-200">
                <p className="text-2xl font-bold p-5">
                    PNU KDT React 개발
                </p>
                <p className="text-4xl font-bold p-5">
                    <FaHome />
                </p>
            </header>
            <main className="w-full grow
                       flex flex-col justify-center items-center
                       overflow-y-auto">
                <Gallery />
            </main>
            <footer className="w-full h-20
                         flex justify-center items-center
                         bg-black text-white">
                <p>Korea National Open University<br />Computer Science 이준영</p>
            </footer>
        </div>
    );
}

export default App;