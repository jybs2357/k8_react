function Hello() {
    let today = new Date();
    today = today.toLocaleString();

    let name="KNOU";
    return(
        <>
            <p className="p1">
                Hello React!!
            </p>
            <p className="text-4xl text-slate-500">
                {name === "KNOU" ? "한국방송통신대학교 이준영" : "이준영"}
            </p>
            <p style={{backgroundColor: "gray", color:"white"}}>
                {/* {new Date().toLocaleString()} */}
                {today}
            </p>
        </>
    );
}

export default Hello;