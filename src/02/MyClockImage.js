import colock from "./colock.png";
function MyClockImage() {

    return(
        <div className="w-full flex justify-center items-start text-2xl font-bold">
            { new Date().toTimeString}
        </div>
    );

}

export default MyClockImage;