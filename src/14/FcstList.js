import { useSearchParams } from "react-router-dom";

export default function FcstList() {
    const [sParams] = useSearchParams;
    const gubun = sParams.get('gubun');
    const dt = sParams.get('dt');
    const x = sParams.get('x');
    const y = sParams.get('y');
    console.log("gubun=", gubun);

    return (
        <div>
            일보예보항목
        </div>
    )
}
