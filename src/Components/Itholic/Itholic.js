import Navbar from "../Header/Navbar";
import {useTheme} from "@mui/material/styles";
import bgVid from "./static/bgVid.mp4";
import itholicLogo from "./static/itholic logo.png"
import Timer from './Timer'
import {Button} from "@mui/material";
import {useEffect, useState} from "react";
import backgroundGif from "./static/bg.gif"
import OurSponsors from "./OurSponsors";
import Footer from "../Footer/Footer";


const Itholic = () => {
    const itholicDate = new Date('2023-02-10T08:00:00');
    const devjamStartRegistrationDate = new Date('2023-01-24T20:30:00');
    const cpStartRegistrationDate = new Date('2023-01-22T20:00:00');
    const cpEndRegistrationDate = new Date('2023-02-03T23:59:59');
    const [checkTimeRegistrationDEVJAM,setCheckTimeRegistrationDEVJAM] = useState(new Date() > devjamStartRegistrationDate);
    useEffect(() => {
        const interval = setInterval(() => {
            setCheckTimeRegistrationDEVJAM(new Date() > devjamStartRegistrationDate)
        }, 1000);
        return () => clearInterval(interval);
    }, []);
    // theme instance
    const theme = useTheme();

    // styling
    const videoContainerStyle = {
        position:"relative",
        top:0,
        left:0,
        width : "100vw",
        height : "100vh",
        zIndex: -1,
        // background: "linear-gradient(-45deg,  #112D4E,#3c0063)",
        // backgroundSize: "400% 400%",
        // animation: "gradient 15s ease infinite",
        backgroundColor: "black",
    }
    const backgroundVideoStyle = {
        width: "100%",
        height: "100%",
        objectFit : "cover",
        position : "absolute",
        left : 0,
        top : 0,
        opacity : 0.3,
    }
    const centerContainerStyle = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)",
        color: "white"
    }
    const buttonContainerStyle = {
        margin:"2rem 0",
        display:"flex",
        flexDirection:"row",
        gap:"1rem",
    }
    const buttonStyle = {
        width:"50%",
        color:"white",
        borderColor:"#ffffff60",
        textAlign:"center"
    }
    const disabledButtonStyle = {
        color:"gray"
    }

    return <>
        <Navbar/>
        {/* VIDEO PLAYER FOR BACKGROUND THINGY*/}
        <div style={ videoContainerStyle }>
            <video autoPlay loop muted playsInline  className='background-video' style={ backgroundVideoStyle }>
                <source src={ bgVid } type='video/mp4' />
            </video>
        </div>

        {/* TIMER SECTION */}
        <div style={centerContainerStyle}>
            {/*<h1 style={{ textAlign:"center" }}>COMING SOON</h1>*/}
            <img src={itholicLogo} style={{ width:"100%" }}/>
            <div style={{ width:"fit-content", margin:"auto" }}>
                <Timer targetDate={ itholicDate }/>
                <div style={buttonContainerStyle}>
                    {
                        (checkTimeRegistrationDEVJAM)?
                            <Button variant="outlined" style={{...buttonStyle}} href={"https://ensias-it-club.netlify.app/itholic/devjam"}>Register for DEVJAM</Button>:
                            <Button variant="outlined" style={{...buttonStyle,...disabledButtonStyle}} disabled>Coming soon</Button>
                    }

                    <Button variant="outlined" style={buttonStyle} href={"https://ensias-it-club.netlify.app/itholic/cp"}>Register for CP</Button>
                </div>
            </div>
        </div>
        <OurSponsors/>
        <Footer/>
    </>
}

export default Itholic;