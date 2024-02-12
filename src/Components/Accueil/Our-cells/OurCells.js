import {Box, Container, Tabs, Tab, Typography} from "@mui/material";
import {useEffect, useState} from "react";
import TabContent from "./TabContent";
import TabPanel from "../../_UI/TabPanel";
import MainDiv from "../../_UI/MainDiv";
import {useTheme} from "@mui/material/styles";

import trainingImg from './img/Open source-rafiki.svg'
import designImg from './img/Palette-rafiki.svg'
import eventImg from './img/Events-rafiki.svg'
import sponsoringImg from './img/Finance-rafiki.svg'
import cpImg from './img/pair-programming-rafiki-3057.webp'
import mediaImg from './img/Digital tools-rafiki.svg'

const cellInfo = [
    {
        training: {
            title: "Training",
            text: "La cellule TRAINING se charge de l’organisation des formations dans des domaines divers dérivant de l’informatique : cloud, sécurité, devops, ... " +
                "Il s’agit d’un environnement où les ENSIASTES peuvent partager leur savoir avec les autres en assistant " +
                "à des ateliers de formations ou en les effectuant eux-mêmes.",
            img: trainingImg
        }
    },
    {
        sposoring: {
            title: "Sponsoring",
            text: "la cellule SPONSORING possède un rôle prépondérant qui consiste à " +
                "contacter les sponsors et les collaborateurs et les convaincre de nous fournir " +
                "un appui financier afin d’assurer le bon " +
                "déroulement de nos événements.",
            img: sponsoringImg
        }
    },
    {
        event: {
            title: "Event",
            text: "La cellule EVENT est responsable de l’organisation des événements et le contact des " +
                "invités. Elle assure aussi la logistique " +
                "nécessaire au bon déroulement des événements.",
            img: eventImg
        }
    },
    {
        cp: {
            title: "competitive programming",
            text: "La cellule CP à pour rôle principal d’aider les " +
                "étudiants à développer leurs compétences dans la programmation compétitive et les préparer aux fameuses " +
                "compétitions de programmation à travers des compétitions et des séances " +
                "de coaching qu’elle organise tout au long de l’année.",
            img: cpImg
        }
    },
    {
        media: {
            title: "Media",
            text: "La cellule MEDIA a pour objectif de médiatiser les événements et les compétitions " +
                "organisés par le club à travers les réseaux " +
                "sociaux. Les membres de cette cellule se " +
                "chargent aussi du contact des enseignes " +
                "de presse et de la rédaction des articles " +
                "et des communiqués de presse.",
            img: mediaImg
        }
    },
    {
        design: {
            title: "Design",
            text: "La cellule DESIGN consiste à cultiver l’esprit " +
                "créatif chez ses membres et les aider à " +
                "maîtriser les outils du design. Elle se " +
                "charge aussi de la création des affiches " +
                "qui sont indispensables dans la médiatisation des événements du club.",
            img: designImg
        }
    }
]

const OurCells = ({ id,sectionId }) => {
    // Hooks
    const [value, setValue] = useState(0);
    const [width,setWidth] = useState(window.innerWidth);
    const theme = useTheme();
    // Functions
    function a11yProps(index) {
        return {
            id: `vertical-tab-${index}`,
            'aria-controls': `vertical-tabpanel-${index}`,
        };
    }
    const tabSX = (selectedValue, tabValue) => {
        const isSelected = (selectedValue === tabValue)
        const width = (isSelected)? "100%":"90%";
        const borderColor = (isSelected)? "secondary":"divider";
        const background = (isSelected)? "linear-gradient(-90deg,rgba(231,81,255,0.05) 0%, rgba(0,0,0,0) 100% )":null;
        return {
            borderRight: 2,
            borderColor: borderColor,
            background:background,
            alignItems:"end",
            textAlign:"right",
            maxWidth:"none",
            width: width,
            height:"100px",
            transition: ".4s",
            fontSize:"1.5rem",
            fontWeight:"400",
        }
    }
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const generateTabPanel = (el,index) => {
        const cellName = Object.keys(el)[0];
        el = el[cellName];
        return (
            <TabPanel value={value} index={index}>
                <TabContent img={el.img}>
                    {el.text}
                </TabContent>
            </TabPanel>
        )
    }
    const generateTab = (el,index) => {
        const cellName = Object.keys(el)[0];
        el = el[cellName];
        return <Tab sx={tabSX(value,index)} label={el.title} {...a11yProps(index)}></Tab>
    }
    const generateTab_Mobile = (el,index) => {
        const cellName = Object.keys(el)[0];
        el = el[cellName];
        return <Tab sx={{
            fontSize:"1.5rem",
            fontWeight:"400",
            borderRadius:"10px 10px 0 0"
        }} label={el.title} {...a11yProps(index)}></Tab>
    }

    // Styling
    const sectionTitleSX = {
        textAlign: (sectionId%2)? "left" : "right",
        [theme.breakpoints.down('sm')]: {
            textAlign:"center",
        },
    }
    const tabGroupSX = {
        width:"35%",
        position:"absolute",
        left:0,
        top:"192px",
        "& [aria-label]":{
            alignItems:"start"
        }
    }
    const tabIndcatorsProps = {
        sx:{
            display: "none"
        }
    }
    const tabBoxSX ={
        display:"flex",
        flexDirection:"row",
        justifyContent:"end",
        alignItems:"center",
        marginTop:"80px",
        marginLeft:"auto",
        height:"700px",
        width:"60%"
    }
    useEffect(() => {
        window.addEventListener("resize", () => setWidth(window.innerWidth));
    });
    return (
        <MainDiv id={id}>
            <Container maxWidth={"xl"}>
                <Typography variant={"h1"} color={"primary.dark"} align={"right"} sx={sectionTitleSX}>
                    OUR <Typography variant={"span"} color={"primary"}>CELLS</Typography>
                </Typography>
                {
                    width > theme.breakpoints.values.sm ?
                        <Box sx={ tabBoxSX }>
                            { cellInfo.map(generateTabPanel) }
                            <Tabs
                                orientation="vertical"
                                sx={ tabGroupSX }
                                textColor="secondary"
                                indicatorColor="secondary"
                                aria-label="Our cells"
                                value={value}
                                onChange={handleChange}
                                TabIndicatorProps={ tabIndcatorsProps }>
                                { cellInfo.map(generateTab) }
                            </Tabs>
                        </Box> :
                        <Box>
                            <Tabs
                                value={value}
                                onChange={handleChange}
                                variant="scrollable"
                                scrollButtons="auto"
                                indicatorColor="secondary"
                                textColor="secondary"
                                allowScrollButtonsMobile
                                aria-label="scrollable auto tabs example"
                                sx={{ margin:"auto" }}
                            >
                                { cellInfo.map(generateTab_Mobile) }
                            </Tabs>
                            { cellInfo.map(generateTabPanel) }
                        </Box>
                }



            </Container>
        </MainDiv>
    )
}

export default OurCells;