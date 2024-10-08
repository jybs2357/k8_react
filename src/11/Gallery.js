import { useState, useEffect, useRef } from "react";
import TailCard from "../UI/TailCard";
import TailButton from "../UI/TailButton";

export default function Gallery() {
    const val = useRef();
    
    const handleCancel = () => {
        val.current.value="";
        val.current.focus();
    }

    useEffect(() => {
        val.current.focus();
    }, []);

    return (

        <div className="w-full flex justify-center">
            <div className="w-10/12 p-5">
                <h1 className="w-full flex justify-center text-3xl mb-5">
                </h1>
                <div className="w-full p-5 bg-blue-50 grid grid-cols-1 lg:grid-cols-2 gap-2">
                    <div className="flex justify-center lg:justify-end items-center">
                        <input ref={val} type='text' className="w-10/12 form-input" id='kw' name='kw' />
                    </div>
                    <div className="flex justify-center lg:justify-start items-center">
                        <TailButton caption='확인'
                            color='blue'
                            handleClick=''
                            size='w-1/2' />
                        <TailButton caption='취소'
                            color='blue'
                            handleClick=''
                            size='w-1/2' />
                    </div>
                </div>
            </div>

            {/* <TailCard imgUrl = "http://tong.visitkorea.or.kr/cms2/website/52/2586952.jpg"
                title = "서울빛초롱축제"
                content = "서울특별시 종로구"
                kw = "서울빛초롱축제, 서울특별시 종로구, 2018 하반기 기획사진, 청계천 야경, 서울 등 축제, 서울 축제"/> */}
        </div>
    )
}