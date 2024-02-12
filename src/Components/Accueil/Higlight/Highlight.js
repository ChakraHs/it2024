import MainDiv from "../../_UI/MainDiv";
import Timeline from "../Who-are-we/Timeline";
import GlassCard from "../../_UI/GlassCard";
import {Box, Container, Typography} from "@mui/material";
import {useEffect, useState} from "react";
import {styled, useTheme} from "@mui/material/styles";
import cardImage1 from "../../../static/img/rr.jpg";
import cardImage2 from "../../../static/img/49022249_1125614244278950_7211991186590924800_n.jpg";
import bg from "./higlights-bg.svg"

const timelineHistory = {
    2018:{
        img: cardImage1,
        caption: "2018 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed molestie urna sit amet accumsan tincidunt. Nullam ultricies hendrerit mi, eu tempor purus. Maecenas in turpis tellus."
    },
    2019:{
        img: cardImage2,
        caption: "2019 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed molestie urna sit amet accumsan tincidunt. Nullam ultricies hendrerit mi, eu tempor purus. Maecenas in turpis tellus."
    },
    2020:{
        img: cardImage1,
        caption: "2020 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed molestie urna sit amet accumsan tincidunt. Nullam ultricies hendrerit mi, eu tempor purus. Maecenas in turpis tellus."
    },
    2021:{
        img: cardImage2,
        caption: "2021 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed molestie urna sit amet accumsan tincidunt. Nullam ultricies hendrerit mi, eu tempor purus. Maecenas in turpis tellus."
    },
    2022:{
        img: cardImage1,
        caption: "2022 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed molestie urna sit amet accumsan tincidunt. Nullam ultricies hendrerit mi, eu tempor purus. Maecenas in turpis tellus."
    },
    null:{
        img: null,
        caption: ""
    }
}


const Highlight = ({ id,sectionId }) => {
    const [ cardYear, setCardYear ] = useState(2022);
    const theme = useTheme();


    const timelineSX = {
        width:"90%",
        margin:"auto",
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        transition:"0.2s",
        height:"90vh",
        zIndex:"0",
        gap:"2rem"
    }
    const sectionTitleSX = {
        textAlign: (sectionId%2)? "left" : "right",
        [theme.breakpoints.down('sm')]: {
            textAlign:"center",
        },
    }
    const TextWrapper = styled('div')(({ theme }) => ({
        // [theme.breakpoints.down('sm')]: {
        //     width:"95%",
        // },
    }));
    return (
        <MainDiv id={id} style={{
            backgroundImage: `url(${bg})`,
            backgroundColor: theme.palette.primary.dark,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center center",
        }}>
            {/*<ParticlesBackground/>*/}
            <Container maxWidth={"xl"}>
                <TextWrapper>
                    <Typography variant={"h1"} color={theme.palette.primary.light} sx={sectionTitleSX}>
                        CLUB <Typography variant={"span"} color={theme.palette.common.white}>HIGHLIGHTS</Typography>
                    </Typography>
                </TextWrapper>
                <Box sx={ timelineSX }>
                    <Timeline cardYear={cardYear} setCardYear={ setCardYear }/>
                    <GlassCard src={timelineHistory[cardYear].img} isShown={cardYear !== null} year={cardYear}>
                        { timelineHistory[cardYear].caption }
                    </GlassCard>
                </Box>
            </Container>
        </MainDiv>
    )
}

export default Highlight;