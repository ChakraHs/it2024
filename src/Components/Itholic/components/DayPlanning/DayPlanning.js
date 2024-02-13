import { useTheme } from "@emotion/react";
import {Box, Container, Tabs, Tab, Typography} from "@mui/material";
import {useEffect, useState} from "react";
import TabPanel from "../../../_UI/TabPanel";
import MainDiv from "../../../_UI/MainDiv";
import TabContent from "./TabContent";

// const dayinfo = [
//     {
//         Day1: {
//             title: "9:30 a.m - 11:30 a.m",
//             text: "planning of matin.",
//         }
//     },
//     {
//         Day2: {
//             title: "9:30 a.m - 11:30 a.m",
//             text: "lftor okda",
//         }
//     },
//     {
//         Day3: {
//             title: "12:30 p.m - 1:30 p.m",
//             text: "chi tajin mbr3 fach yrb7 hossin lahoma barik",
//         }

//     },
// ]

const DayPlanning = ({dayinfo,id,sectionId }) => {
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
            height:"50px",
            transition: ".4s",
            fontSize:"1rem",
            fontWeight:"400",
            color:"black"
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
                <TabContent>
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
            borderRadius:"10px 10px 0 0",
            color:"black",
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
        top:"10px",
        "& [aria-label]":{
            alignItems:"start"
        },
    }
    const tabIndcatorsProps = {
        sx:{
            display: "none"
        }
    }
    const tabBoxSX ={
        display:"flex",
        flexDirection:"row",
        justifyContent:"start",
        alignItems:"top",
        marginTop:"0px",
        marginLeft:"auto",
        height:"200px",
        width:"60%",
    }
    useEffect(() => {
        window.addEventListener("resize", () => setWidth(window.innerWidth));
    });

    
    return (
        <MainDiv id={id}>
            <Container className="dayPlanning" maxWidth={"xl"} style={{ position: "relative", padding:"10px" }}>
                {
                    width > theme.breakpoints.values.sm ?
                        <Box sx={ tabBoxSX } color={"white"}>
                            { dayinfo.map(generateTabPanel) }
                            <Tabs
                                orientation="vertical"
                                sx={ tabGroupSX }
                                textColor="secondary"
                                indicatorColor="secondary"
                                aria-label="Our cells"
                                value={value}
                                onChange={handleChange}
                                TabIndicatorProps={ tabIndcatorsProps }>
                                { dayinfo.map(generateTab) }
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
                                { dayinfo.map(generateTab_Mobile) }
                            </Tabs>
                            { dayinfo.map(generateTabPanel) }
                        </Box>
                }



            </Container>
        </MainDiv>
    )
}

export default DayPlanning;