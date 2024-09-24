export default function MyDiv3({dn1, dn2, dn3}) {
    return (
        <div className="w-4/6 h-4/6
                        flex flex-col justify-center items-center
                        bg-yellow-600 text-white font-bold">
            <div className="w-full h-10 p-5
                            flex justify-start items-center ">
                {`${dn1} > ${dn2} > ${dn3}`}
            </div>
        </div>
    )
}
