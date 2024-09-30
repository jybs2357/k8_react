import { useEffect, useState } from "react";
import TailButton from "../UI/TailButton";

export default function BoxOffice() {
    const [cnt, setCnt] = useState();

    const handleUp = () => {
        setCnt(cnt + 1);
    }
    useEffect(() => {
        console.log("useEffect []");
        setCnt(100);
    }, []);

    useEffect(() => {
        console.log("useEffect [cnt]", cnt);
    }, [cnt]);
    
    useEffect(() => {
        console.log("useEffect");
    });


    return (
        <div className="h-screen flex flex-col justify-center items-center">
            <div className="flex justify-center items-center m-5 text-3xl">
                {cnt}
            </div>
            <div>
                <TailButton caption = "증가" color="blue" handleClick={handleUp} />
            </div>
        </div>
    )
}