import MyDiv3 from "./MyDiv3";
export default function MyDiv2({dn1, dn2, dn3}) {
    return (
        <div className="w-4/6 h-4/6
                      flex flex-col justify-center items-center
                      bg-blue-800 text-white font-bold">
            <div className="w-full h-10 m-2
                        flex justify-start items-center">
                {`${dn1} > ${dn2}`}
            </div>

            <MyDiv3 dn1={dn1} dn2={dn2} dn3={dn3} />
        </div>
    )
}
