import { useState, useEffect, useRef } from "react";
import TailCard from "../UI/TailCard";
import TailButton from "../UI/TailButton";

export default function Gallery() {
    const [tdata, setTdata] = useState([]);
    const [tags, setTags] = useState([]);
    const val = useRef();
    
    const getFetchData = async() => {
        const apikey = process.env.REACT_APP_API_KEY;
        const keyword = encodeURI(val.current.value);

        let url = `https://apis.data.go.kr/B551011/PhotoGalleryService1/gallerySearchList1?serviceKey=${apikey}&numOfRows=20&pageNo=1&MobileOS=ETC&MobileApp=AppTest&arrange=A&keyword=${keyword}&_type=json`;
        
        const resp = await fetch(url);
        const data = await resp.json();
        console.log("getFetch:", data.response.body.items.item);
        setTdata(data.response.body.items.item);
    }


    
    const handleOk = () => {
        if (val.current.value === ""){
            alert("키워드를 입력하세요.");
            val.current.focus();
            return;
        }

        getFetchData();
    }

    const handleCancel = () => {
        val.current.value="";
        val.current.focus();
        setTags([]);
    }

    useEffect(() => {
        val.current.focus();
    }, []);

    useEffect(() => {
        // const tm = tdata.map(item => <TailCard key={item.galContentId} imgUrl={item.galWebImageUrl} title={item.galTitle} content={item.galPhotographyLocation} kw={item.galSearchKeyword} />);

    }, [tdata]);


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
                        <TailButton
                            caption='확인'
                            color='blue'
                            handleClick={handleOk}
                            size='w-1/2'
                        />
                        <TailButton
                            caption='취소'
                            color='blue'
                            handleClick={handleCancel}
                            size='w-1/2'
                        />

                    </div>
                </div>
            <div className="w-10/12 p-5 grid grid-col-1 lg:grid-col-2 xl:grid-col-2 lg:justify-center">
                {tags}
            </div>

            </div>
        </div>
    )
}