import { useState, useEffect } from "react";

export default function MyBox() {
    const [blueFlag, setBlueflag] = useState(false);
    const [orangeFlag, setOrangeflag] = useState(false);

    const handleBlue = () => {
        setBlueflag(!blueFlag);
        console.log("handleBlue =>", blueFlag);
    }

    const handleOrange = () => {
        setOrangeflag(!orangeFlag);
        console.log("handleOrange =>", orangeFlag);
    }

    useEffect(() => {
        console.log("useEffect blue => ", blueFlag)
    }, [blueFlag])

    useEffect(() => {
        console.log("useEffect orange => ", orangeFlag)
    }, [orangeFlag])

    return (
        <div className="w-full h-full flex flex-row justify-center items-center">
            <div className={`w-1/3 flex flex-col justify-center items-center border border-slate-500 rounded-md p-5 m-5`}>
                <h1 className="flex justify-center items-center text-3xl font-bold border border-slate-900 bg-blue-100 rounded-md p-5 m-5">
                    Blue
                </h1>
                <div className="flex justify-center items-center text-xl font-bold border border-blue-900 rounded-md p-5 m-5" onClick={handleBlue}>
                    Blue Toggle
                </div>
            </div>
            <div className={`w-1/3 flex flex-col justify-center items-center border border-slate-500 rounded-md p-5 m-5`}>
                <h1 className="flex justify-center items-center text-3xl font-bold border border-slate-900 bg-orange-100 rounded-md p-5 m-5">
                    Orange
                </h1>
                <div className="flex justify-center items-center text-xl font-bold border border-orange-900 rounded-md p-5 m-5"onClick={handleOrange}>
                    Orange Toggle
                </div>
            </div>
        </div>
    )
} 