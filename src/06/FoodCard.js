import bank from "./img/bank.png";
import busan from "./img/busan.png";
import market from "./img/market.png";
import {useState} from "react";

export default function FoodCard() {
    const [isShow, setIsShow] = useState(false);
    const obj = {
        "구분": "광역지원센터",
        "시군구": "부산시",
        "사업장명": "부산광역푸드뱅크",
        "신고기준": "당연",
        "사업장 소재지": "부산광역시 동래구 낙민로 25, 부산사회복지종합센터 302호",
        "연락처(대표번호)": "051-791-1377",
        "팩스번호": "051-714-3096",
        "운영주체 분류": "1. 사회복지법인",
        "운영주체명": "부산광역시사회복지협의회"
    };

    const objImg = {
        "광역지원센터" : busan,
        "기초푸드뱅크" : bank,
        "기초푸드센터" : market
    }

    const handleClick = () => {
        setIsShow(!isShow);
    }

    return(
        <div className="w-full flex
                        border border-slate-300
                        rounded-md p-5">
            <div className="mr-5">
                <img src={objImg[obj["구분"]]} alt={obj["구분"]} />
            </div>
            <div className="flex flex-col justify-between items-start">
                <div>
                    <div className="text-2xl text-slate-400 font-bold">
                        {obj["구분"]}
                    </div>
                    <div>
                        {obj["사업장명"]}
                    </div>
                    <div>
                        {obj["사업장 소재지"]}
                    </div>
                </div>
                <div className="w-full h-8 p-2
                                flex justify-end items-center
                                bg-slate-500 text-white font-bold"
                                onClick={handleClick}>
                    {isShow ? obj["연락처(대표번호)"] : ""}
                </div>
            </div>
        </div>
    )
}