import { useState, useEffect } from "react";
import TrafficNav from "./TrafficNav";

export default function Traffic() {
    const [tdata, setTdata] = useState();
    
    cosnt [c1, setC1] = useState();
    cosnt [selC1, selSetC1] = useState();

    cosnt [c2, setC2] = useState();
    cosnt [selC2, selSetC2] = useState();

    const [info, setInfo] = useState();


    const getFetchData = () => {
        let url = `https://api.odcloud.kr/api/15070282/v1/uddi:8449c5d7-8be5-4712-9093-968fc0b2d9fc?`;
        url = `${url}page=1&perPage=18&serviceKey=${process.env.REACT_APP_API_KEY}`;
        console.log(url);

        fetch(url)
            .then(resp => resp.json())
            .then(data => setTdata(data.data))
            .catch(err => console.log(err));

    }

    useEffect(() => {
        getFetchData();
    }, []);



    useEffect(() => {

        console.log(tdata)
        let tm = tdata.map( item => item["사고유형대분류"] );
        tm = [...new Set(tm)];
        console.log("tm=", tm)

        setC1(tm);

    }, [tdata]);

    useEffect(() => {
        console.log(selC1)

    }, [selC1]);


    useEffect(() => {
        console.log(selC1)
        let tm = tdata.filter( item => item["사고유형대분류"] == selC1);
        tm = tm.map(item => item['사고유형']);
        setC2(tm);

    }, [selC1]);

    useEffect()



    return (
        <div className="w-full flex flex-col justify-center items-center">
            <TrafficNav title="대분류" c={[c1]} sel={selC1} setSel={setSelC1} />
            <TrafficNav title="중분류" c={[c2]} sel={selC2} setSel={setSelC2} />
            <div className="grid grid-cols-5 gap-2">
                
            </div>
        </div>
    )
}

