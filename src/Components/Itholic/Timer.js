import {useEffect, useState} from "react";

// No idea bruh : https://blog.greenroots.info/how-to-create-a-countdown-timer-using-react-hooks#heading-the-countdown-app
const useCountdown = (targetDate) => {
    const countDownDate = new Date(targetDate).getTime();

    const [countDown, setCountDown] = useState(
        countDownDate - new Date().getTime()
    );

    useEffect(() => {
        const interval = setInterval(() => {
            setCountDown(countDownDate - new Date().getTime());
        }, 1000);

        return () => clearInterval(interval);
    }, [countDownDate]);

    return getReturnValues(countDown);
};

const getReturnValues = (countDown) => {
    // calculate time left
    const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
        (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((countDown % (1000 * 60)) / 1000);
    return [days, hours, minutes, seconds];
};

const Timer = ({ targetDate, dark }) => {
    //styles
    const clockContainerStyleWide = {
        width: "fit-content",
        padding: "2rem 1rem",
        border: dark? "#00000060 2px solid":"#ffffff60 2px solid",
        borderRadius: "1rem",
        display: "flex",
        flexDirection: "row",
    }
    const clockContainerStyleNarrow = {
        width: "fit-content",
        /* height: 100px; */
        padding: "2rem 1rem",
        border: "#ffffff60 2px solid",
        borderRadius: "1rem",
        display: "flex",
        flexDirection: "column",
        gap:"1rem"
    }
    const clockElementStyle = {
        width: "100%",
        margin: "0 1rem",
        color: dark? "black":"white",
        display: "flex",
        flexDirection: "column",
        gap: "0"
    }
    const centeredElement = {
        margin: "auto"
    }
    const centeredElementSep = {
        margin: "0 auto"
    }

    const [days, hours, minutes, seconds] = useCountdown(targetDate);

    if (days + hours + minutes + seconds <= 0) {
        //TODO handle end of timer
    } else {
        if(window.innerWidth > 550){
            return (
                <div style={ clockContainerStyleWide }>
                    <div style={clockElementStyle} id='days'>
                        <h1 style={centeredElement}>{days}</h1>
                        <p style={centeredElement}>Days</p>
                    </div>
                    <div style={clockElementStyle}>
                        <h1 style={centeredElementSep}>:</h1>
                    </div>
                    <div style={clockElementStyle} id='hours'>
                        <h1 style={centeredElement}>{hours}</h1>
                        <p style={centeredElement}>Hours</p>
                    </div>

                    <div style={clockElementStyle}>
                        <h1 style={centeredElementSep}>:</h1>
                    </div>

                    <div style={clockElementStyle} id='minutes'>
                        <h1 style={centeredElement}>{minutes}</h1>
                        <p style={centeredElement}>Minutes</p>
                    </div>
                    <div style={clockElementStyle}>
                        <h1 style={centeredElementSep}>:</h1>
                    </div>
                    <div style={clockElementStyle} id='seconds'>
                        <h1 style={centeredElement}>{seconds}</h1>
                        <p style={centeredElement}>Seconds</p>
                    </div>
                </div>
            )
        }
        return (
            <div className='clock-container' style={ clockContainerStyleNarrow }>
                <div style={{ display:"flex", flexDirection:"row" }}>
                    <div style={clockElementStyle} id='days'>
                        <h1 style={centeredElement}>{days}</h1>
                        <p style={centeredElement}>Days</p>
                    </div>
                    <div style={clockElementStyle}>
                        <h1 style={centeredElementSep}>:</h1>
                    </div>
                    <div style={clockElementStyle} id='hours'>
                        <h1 style={centeredElement}>{hours}</h1>
                        <p style={centeredElement}>Hours</p>
                    </div>
                </div>

                <div style={{ display:"flex", flexDirection:"row" }}>
                    <div style={clockElementStyle} id='minutes'>
                        <h1 style={centeredElement}>{minutes}</h1>
                        <p style={centeredElement}>Minutes</p>
                    </div>
                    <div style={clockElementStyle}>
                        <h1 style={centeredElementSep}>:</h1>
                    </div>
                    <div style={clockElementStyle} id='seconds'>
                        <h1 style={centeredElement}>{seconds}</h1>
                        <p style={centeredElement}>Seconds</p>
                    </div>
                </div>

            </div>
        )
    }


}

export default Timer;