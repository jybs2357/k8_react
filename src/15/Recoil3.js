import TailButton from "../UI/TailButton";
import { useState, useEffect, useRef } from "react";

export default function Recoil3({x3, y3}) {
    const [x, setX] = useState(x3);
    const [y, setY] = useState(y3);
    const inRef = useRef();

    const handleUp = () => {
        setX(x + 1);
    }

    const handleDwon = () => {
        setX(x - 1);
    }

    useEffect(() => {
        setY(x * parseInt(inRef.current.value));
    }, [x]);

    return (
        <div className="w-14/15 h-4/5 flex flex-col mt-10 p-5 mx-2  bg-lime-200 text-lime-900 font-bold">
            Recoil3 (x = {x}, y = {y})
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
                <input type="number" min={2} max={5} ref={inRef} defaultValue={2} className="form-input" />
                <TailButton
                    caption ="증가"
                    color="blue"
                    handleClick={handleUp}
                    size = 'w-1/2' />
                <TailButton
                    caption ="감소"
                    color="orange"
                    handleClick={handleDwon}
                    size = 'w-1/2' />
            </div>
        </div>
    )
}
