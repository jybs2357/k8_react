import TailButton from "../UI/TailButton";
import TailBall from "./TailBall";

import { useState } from "react";

export default function Lotto() {
    const [tags, setTags] = useState();

    const handleClick = () => {
        let arr = [];
        while (arr.length < 7) {
            let n = Math.floor(Math.random() * 45) + 1;

            if (!arr.includes(n)) arr.push(n);

        }

        const bonus = arr.splice(-1);
        arr.sort((a, b) => a - b);
        arr = arr.concat(bonus);
        let tm = arr.map(item => {return <TailBall key = {"b" + item} n = {item} />});
        tm = tm.splice(6, 0, <div className="text-3xl mx-2 font-bold" key="sp">+</div>)
        console.log(tm)
        setTags(tm);
    }
 
    return (
        <div className="w-full">
            <div className="w-full flex justify-center items-center mb-10">
                {tags}
            </div>
            <div className="w-full flex justify-center items-center mb-10">
                <TailButton caption='로또번호생성' color='blue' handleClick = {handleClick}/>
            </div>
        </div>
    )
}