import { useNavigate } from "react-router-dom";
import TailButton from "../UI/TailButton";
import getxy from './getxy.json';
import { useRef } from "react-router-dom";

export default function Fcst() {
    let sido = getxy.map(item => item["1단계"])
                    .map(item => <option key={item} vlaue={item}>{item}</option>);


    const navigate = useNavigate();

    //버튼이 눌러 졌을 때
    const handleOk = (gubun) => {
        if (txtDt.current.value === '') {
            alert('날짜를 선택하세요.'
            txtDt.current.focus();
            return;
        }
        console.log(gubun);
        const dt = txtDt.current.value.replaceAll('-', '');
        navigate(`/fcstlist?gubun=${gubun}dt=${dt}&x=${x}&y=${y}`);
    }

    return (
        <div className="w-full flex flex-col justify-center items-center">
            <h1 className="w-full text-center text-3xl my-10 font-bold">
                일기예보선택
            </h1>
            <div className="
                w-10/12 grid grid-cols-1
                md:grid-cols-2 gap-4
                place-items-center
            ">
                <input type='date'
                    className="form-input w-full"
                    id='txt1' />
                <select className="form-select w-full">
                    <option value=''>-- 지역을 선택하세요. --</option>
                    {sido}
                </select>
                <TailButton caption='초단기예보'
                    color='blue'
                    handleClick=''
                    size='w-1/2' />
                <TailButton caption='단기예보'
                    color='blue'
                    handleClick=''
                    size='w-1/2' />
            </div>
        </div>
    )
}