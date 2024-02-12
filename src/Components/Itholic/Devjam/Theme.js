// import {Box, Typography} from "@mui/material";
// import {useTheme} from "@mui/material/styles";
// import bgVid from "../static/devjamBG.mp4";
// import React from "react";

// const Theme = () => {
//     const theme = useTheme();

//     const sectionTitleSX = {
//         margin:"0 0 2rem 0",
//         [theme.breakpoints.down('sm')]: {
//             textAlign:"center",
//         },
//     }
//     const mainParagraphSX = {
//         position: "relative",
//     }
//     const themeBox = {
//         position:"relative",
//         width: "100%",
//         height:"200px",
//         borderRadius:"2rem",
//         backgroundColor:"black",
//         display:"flex",
//         alignItems:"center",
//         justifyContent:"center",
//         // background: "radial-gradient(circle, rgba(126,0,147,1) 0%, rgba(77,0,89,1) 100%)",
//     }
//     const backgroundVideoStyle = {
//         borderRadius:"2rem",
//         width: "100%",
//         height: "100%",
//         objectFit : "cover",
//         position : "absolute",
//         left : 0,
//         top : 0,
//         opacity : 0.5,
//     }

//     return <div id={"theme"} style={{ width:"100%" }}>
//         <Typography variant={"h1"} color={"primary.dark"} sx={sectionTitleSX}>
//             <Typography variant={"span"} color={"primary"}>THEME</Typography>
//         </Typography>
//         <Box sx={ mainParagraphSX }>
//             <Box sx={ themeBox }>
//                 <video autoPlay loop muted playsInline style={ backgroundVideoStyle }>
//                     <source src={ bgVid } type='video/mp4' />
//                 </video>
//                 <Typography variant={"h2"} style={{zIndex:1}}>
//                     <b>EDUCATION</b>
//                 </Typography>
//             </Box>
//             <Typography variant={"justifiedText"} color={"black"}>
//                 {/*<p>*/}
//                 {/*    With the help of the latest cutting edge technologies like AR/VR, Web3, Cloud computing, AI and*/}
//                 {/*    many more, we want YOU to help the world with the creation of a project within the lines of the*/}
//                 {/*    Thematic we will unveil to you at the start of the competition, that is to say the 1st of February.*/}
//                 {/*</p>*/}
//                 <p>
//                     The theme will be annouced at the start of the contest : <b>February the 1st at 12:00</b>
//                 </p>
//             </Typography>
//         </Box>
//     </div>
// }

// export default Theme;