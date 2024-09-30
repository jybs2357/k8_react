import { useState, useEffect } from "react"

function MyClockTime() {
    const [cTime, setCTime] = useState(new Date());

    useEffect(() => {
        setInterval(() => {
            setCTime(new Date());
        }, 1000);

        return () => {clearInterval(tm)};
    }, []);
    return(
        <div claseName="w-full flex justify-center items-center text-2xl font-bold">
            {cTime.toLocaleTimeString()}
        </div>
    );
}

export default MyClockTime;