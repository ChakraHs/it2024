import React from 'react';
import {Box, Container, Typography } from "@mui/material";
import { TypeAnimation } from "react-type-animation";
import Carousel from 'react-material-ui-carousel';
import styles from "./Splashscreen.module.css";
import img1 from "./img/itholic_ceremony.png";
import img2 from "./img/49022249_1125614244278950_7211991186590924800_n.jpg";
import img3 from "./img/75233701_1341316452708727_7337963230217633792_n.jpg";
import ParticlesBackground from "../Higlight/ParticlesBackground";
import MainDiv from "../../_UI/MainDiv";

const carouselImages = [img1,img2,img3];

const Splashscreen = () => {
    return (
        <MainDiv style={{ marginTop:0,paddingTop:0}}>
            <ParticlesBackground />
            <Container className={styles.splashscreen} maxWidth={"xl"} sx={{zIndex:10}}>
                {/*<Box className={styles.backgroundImage} sx={{zIndex:1}}>*/}
                {/*    <div className={styles.overlay}></div>*/}
                {/*    <Carousel indicators={null} className={styles.image} >*/}
                {/*        {*/}
                {/*            carouselImages.map(img => <img src={img} alt={"SplashScreen"}/>)*/}
                {/*        }*/}
                {/*    </Carousel>*/}
                {/*</Box>*/}
                <Box className={styles.frontText} textAlign={"center"} sx={{zIndex:2}}>
                    <Typography variant={"bigTitle"} color={"primary"} sx={{ fontSize: {xs :"4rem", sm:"7rem"} }}>ENSIAS IT CLUB</Typography>
                    <Typography variant={"codeLike"} color={"common.white"} sx={{ fontSize: {xs :"1.5rem", sm:"2rem"} }}>
                        <TypeAnimation sequence={[1000,"Where IT minds get creative"]}
                                       wrapper="p"
                                       style={{ margin: 0 }}
                                       speed={1}/>
                    </Typography>
                </Box>
            </Container>
        </MainDiv>

    )
}

export default Splashscreen;