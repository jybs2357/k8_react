import { useEffect, useState } from "react";

export default function BoxOffice() {
    const [cnt, setCnt] = useState();

    const handleUp = () => {
        setCnt(cnt + 1);
    }
    useEffect(() => {
        const apiKey = process.env.REACT_APP_MV_KEY;
        console.log("apikey=", apiKey);
    }, []);

    return (
        <div className="h-screen flex flex-col justify-center items-center">
            <div>

            </div>
        </div>
    )
}