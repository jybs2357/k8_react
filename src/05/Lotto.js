import TailButton from "../UI/TailButton";
import TailBall from "./TailBall";

export default function Lotto() {
    const handleClick = () => {
        console.log("handleClick1")
    }

    return (
        <div className="w-full">
            <div className="w-full flex justify-center items-center mb-10">
                <TailBall n={10}/>
                <TailBall n={20}/>
                <TailBall n={30}/>
                <TailBall n={40}/>
                <TailBall n={50}/>
                <TailBall n={60}/>
            </div>
            <div>
                <TailButton caption='로또번호생성' color='blue' handleClick = {handleClick1}/>
            </div>
        </div>
    )
}