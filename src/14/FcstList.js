import { useSearchParams } from "react-router-dom";

export default function FcstList() {
    const [sParams] = useSearchParams();
    //http://localhost:3000/fcstlist?gubun=%EC%B4%88%EB%8B%A8%EA%B8%B0%EC%98%88%EB%B3%B4&dt=20241015&x=98&y=76$area=%EB%B6%80%EC%82%B0%EA%B4%91%EC%97%AD%EC%8B%9C
    const gubun = sParams.get('gubun');
    const dt = sParams.get('dt');
    const x = sParams.get('x');
    const y = sParams.get('y');
    const area = sParams.get('area');
    console.log(gubun, dt, x, y, area);

    const getFetchData = () => {
        const apikey = process.env.REACT_APP_API_KEY;
        const keyword = encodeURI(x.current.value);

        let url = `https://apis.data.go.kr/B551011/PhotoGalleryService1/gallerySearchList1?`;
        url = `${url}serviceKey=${apikey}&numOfRows=20&pageNo=1&MobileOS=ETC&MobileApp=AppTest&arrange=A`;
        url = `${url}&keyword=${keyword}&_type=json`;

        console.log(url);

        fetch(url)
          .then(resp => resp.json())
          .then(data => console.log(data))
          .catch(err => console.error(err)) ;

          
    return (





        <div>
            초단기예보
        </div>
    )
}