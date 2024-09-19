function MyClockTime() {
    let today = new Date();
    today = today.toLocaleString();
    return(
        <>
            <p style={{backgroundColor: "gray", color:"white"}}>
                {today}
            </p>
        </>
    );
}

export default MyClockTime;