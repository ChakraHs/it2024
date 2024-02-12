// import Navbar from "../../Header/Navbar";
// import bgVid from "../static/bgVid.mp4";
// import Timer from "../Timer";
// import {useTheme} from "@mui/material/styles";
// import {Box, Button, Typography} from "@mui/material";
// import React from "react";
// import Rules from "../Rules";
// import Rating from "../Rating";
// import CpNutshell from "./CpNutshell";
// import Socials from "../Socials";
// import Prize from "../Prize";
// import cpPrizes from "../static/cpPrizes.png"
// import cashPrize from "../static/cashPrize.png";
// const Cp = () => {
//     const theme = useTheme();

//     const videoContainerStyle = {
//         position:"fixed",
//         top:0,
//         left:0,
//         width : "100vw",
//         height : "100vh",
//         zIndex: -1,
//         // background: "linear-gradient(-45deg,  #112D4E,#3c0063)",
//         // backgroundSize: "400% 400%",
//         // animation: "gradient 15s ease infinite",
//         backgroundColor: "black"
//     }
//     const backgroundVideoStyle = {
//         width: "100%",
//         height: "100%",
//         objectFit : "cover",
//         position : "absolute",
//         left : 0,
//         top : 0,
//         opacity : 0.3,
//     }
//     const centerContainerStyle = {
//         position: "absolute",
//         top: "0",
//         left: "50%",
//         transform: "translate(-50%,30vh)",
//         color: "white",
//         width:{
//             xs:"86%",
//             sm:"75%"
//         }
//     }
//     const devjamInfoStyle = {
//         backgroundColor:"white",
//         borderRadius:{
//             xs:"2rem 2rem 0 0",
//             sm:"2rem"
//         },
//         padding: "3rem",
//         boxSizing:"border-box",
//         width:"100%",
//         alignItems:"center",
//         display:"flex",
//         flexDirection:"column",
//         justifyContent:"center",
//         gap:"3rem"
//     }

//     // content
//     const rulesContent = {
//         text:<>
//             - All participants should participate in teams of three from the same school <br/>
//             - The contest is open to all students currently inrolled in an actif moroccan course <br/>
//             - The contest will be held physically at ENSIAS, Rabat , so presence is mendatory the day of the competition<br/>
//         </>
//     }
//     const ratingContent = {
//         text:""
//     }
//     const cpPrize ={
//         text:<>
//             <Typography variant={"justifiedText"} color={"black"}>
//                 The three winners teams will receive the following prizes
//             </Typography>
//             <img src={cpPrizes} style={{width:"80%",margin:"auto"}}/>
//         </>
//     }


//     const cpDeadline = new Date('2023-02-03T18:00:00');

//     return <>
//         <Navbar/>
//         {/* VIDEO PLAYER FOR BACKGROUND THINGY*/}
//         <div style={ videoContainerStyle }>
//             <video autoPlay loop muted playsInline style={ backgroundVideoStyle }>
//                 <source src={ bgVid } type='video/mp4' />
//             </video>
//         </div>

//         <Box sx={centerContainerStyle}>
//             <div id="title-text">
//                 <Typography variant={"h1"} sx={{ color:"white",fontSize: {xs :"3rem", md:"7rem"},textAlign:"center" }}>Competitive Programing</Typography>
//                 <p style={{textAlign:"center",margin:"0 0 5rem 0",fontSize:"1.3rem"}}>Be the first to solve all the problems !</p>
//             </div>
//             <Box id={"devjam-info"} sx={devjamInfoStyle}>
//                 {
//                     (cpDeadline > new Date())?<>
//                             <Timer targetDate={ cpDeadline } dark/>
//                             <Button variant="contained" href={"https://forms.gle/ZdphQtLjayU5JY5CA"} target="_blank">
//                                 <h2 style={{ margin:"10px" }}>Register in the contest !</h2>
//                             </Button>
//                         </>
//                         :
//                         <Typography variant={"h1"} sx={{ color:theme.palette.primary.dark ,textAlign:"center" }}> - Registration has ended - </Typography>
//                 }

//                 <CpNutshell/>
//                 <Rules content={rulesContent}/>
//                 {/*<Rating content={ratingContent}/>*/}
//                 <Prize content={cpPrize}/>
//                 <Socials/>

//             </Box>
//         </Box>


//     </>
// }

// export default Cp;