import TailButton from "../UI/TailButton";
import { useState, useEffect, useRef } from "react";

export default function Rest() {
    const [tdata, setTdata] = useState([]);
    const [trs, setTrs] = useState([]);

    const txt1Ref = useRef();
    const txt2Ref = useRef();

    //restfull endpoint 주소
    const url = 'http://localhost:3005/posts';

    //데이터 가져오기 사용자 정의함수
    const getFetchData = async () => {
        const resp = await fetch(url);
        console.log('resp =', resp);
        const data = await resp.json();
        console.log('data =', data);

        //전체 데이터 저장 state변수에 넣기
        setTdata(data);
    }

    //컴포넌트 생성시 실행
    useEffect(() => {
        //데이터 가져오기
        getFetchData();
    }, []);

    // 보낼 데이터 object로 만들기
    const postData = {
        title : txt1Ref.current.value,
        author : txt2Ref.current.value
    }

    const handlePost = () => {
        if (txt1Ref.current.value === '') {
            alert('제목을 입력하세요.');
            txt1Ref.current.focus();
            return; //함수 종료
        }
    }

    //tdata가 변경이 되었을 때 실행
    useEffect(() => {}, [tdata]);

    return (
        <div className="w-full flex flex-col justify-center items-center">
            <div className="w-11/12 grid grid-cols-1 md:grid-cols-7 
                      bg-slate-100
                      text-center my-5 p-5">
                <label htmlFor="txt1" className="my-2">제목</label>
                <div className="flex col-span-3">
                    <input id="txt1"
                        type="text"
                        className="form-input w-full" />
                </div>
                <label htmlFor="txt2" className="my-2">작성자</label>
                <div className="flex">
                    <input id="txt2"
                        type="text"
                        className="form-input w-full"
                        inRef={txt2Ref} />
                </div>
                <TailButton caption="입력"
                    bcolor="blue"
                    handleClick='' />
            </div>
            <table className="w-11/12 text-left text-sm font-light text-surface">
                <thead className="border-b border-neutral-200 font-medium">
                    <tr className="bg-black text-white font-bold text-center">
                        <th scope="col" className="px-6 py-3 w-3/6 text-center">제목</th>
                        <th scope="col" className="px-6 py-3 w-1/6 text-center">작성자</th>
                        <th scope="col" className="px-6 py-3 w-1/6 text-center">삭제</th>
                        <th scope="col" className="px-6 py-3 w-1/6 text-center">편집</th>
                    </tr>
                </thead>
                <tbody>
                    {trs}
                </tbody>
            </table>
        </div>
    )
}
