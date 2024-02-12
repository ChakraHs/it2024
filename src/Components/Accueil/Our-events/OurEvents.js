import {useEffect, useState} from "react";
import {Box, Container, Tab, Tabs, Typography} from "@mui/material";
import TabContent from "../Our-cells/TabContent";
import TabPanel from "../../_UI/TabPanel";
import MainDiv from "../../_UI/MainDiv";
import styles from "./OurEvent.module.css";
import {useTheme} from "@mui/material/styles";
import graduate_se from "./img/graduate-SE/274244890_2029601210546911_5393788161861892451_n.jpg";
import itholic from "./img/itholic/itholic_ceremony.png";
import mitcc from "./img/mitcc/159898560_107460338081716_2656113953935473263_n.png";
import ucb from "./img/underground-coding-battles/78691756_1368627353310970_3130621805451018240_n.jpg";
import src from "../static/ic_sharp-model-training.png";

const eventInfo = [
    {
        itholic: {
            title: "ITHOLIC",
            text: "ITHOLIC tel que son nom l’indique, est un carrefour de rencontre et de partage pour toute personne obsédée et passionnée par la technologie et l’informatique.\n" +
                "Après une conférence sous le thème « Cloud & Linux », animée par des ingénieurs cloud de haut calibre, les participants ont eu la chance de mettre en pratique leurs talents durant un workshop sur « Kubernetes ». Et pour conclure l'événement terminait avec une compétition de programmation compétitive « Competitive Programming » ouverte à tous les étudiants des universités marocaines.",
            img: itholic
        }
    },
    {
        graduate_se: {
            title: "Future of a Graduate Software Engineer",
            text: "En tant qu'élève ingénieur informatique, vous êtes incertain de votre carrière future. Vos attentes ne coincident pas forcement avec ce que la réalité offre. Par conséquent, nous somme ici pour clarifier votre vision ! Une conférence modérée par El ASSALI Mehdi, où plusieurs gens du domaine se sont joints pour présenter ce qu'est être un ingénieur logiciel.\n",
            img: graduate_se,
            link: "https://www.facebook.com/ensiasitclub/videos/970671867176266/?_rdc=1&_rdr"
        }
    },
    {
        MITCC: {
            title: "MITCC",
            text: "Le MITCC est une compétition de programation interne en collaboration avec l'AIAC, EHTP et ENSIAS. Son objectif est d'offrir un environnement amusant et compétitif dans lequel les élèves-ingénieurs peuvent pratiquer et perfectionner leurs compétences en résolution de problèmes ainsi qu'acquérir une expérience de programation et de codage.",
            img: mitcc,
            link:"https://www.facebook.com/Moroccan-It-Clubs-Contest-107458028081947/?_rdc=1&_rdr"
        }
    },
    {
        UCB: {
            title: "Underground Coding Battle",
            text: "Une compétition organisée par le club EITC, où plusieurs équipes sont ammenées à résoudre des problèmes de programation et de logique.",
            img: ucb,
            link:"https://www.facebook.com/ensiasitclub/posts/pfbid0nWr9bNArrdr9m2CXnkA2xb1tgxktt7N77ebkvj1ovphLsBiuaUe1wojVpgmcqwRZl?_rdc=1&_rdr"
        }
    }
]

const OurEvents = ({ id,sectionId }) => {
    // Hooks
    const [value, setValue] = useState(0);
    const [width,setWidth] = useState(window.innerWidth);
    const theme = useTheme();

    // Functions
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const tabSX = (selectedValue, tabValue) => {
        const isSelected = (selectedValue === tabValue);
        const isITHOLIC = (0 === tabValue);

        var width = (isSelected)? "100%":"90%";
        var borderColor = (isSelected)? "secondary":"divider";
        var background = (isSelected)? "linear-gradient(90deg,rgba(231,81,255,0.05) 0%, rgba(0,0,0,0) 100% )":null;
        var generalStyle = (isITHOLIC)? ITHOLICSX:{
            borderLeft: 2,
            background:background
        };
        return {
            ...generalStyle,
            borderColor: borderColor,
            alignItems:"start",
            textAlign: "left",
            maxWidth:"none",
            width: width,
            height:"150px",
            transition: ".4s",
            fontSize:"1.5rem",
            fontWeight:"400",
        }
    }
    const tabITHOLICSX_mobile = (selectedValue, tabValue) =>{
        const isSelected = (selectedValue === tabValue);
        const isITHOLIC = (0 === tabValue);
        var borderColor = (isSelected)? "secondary":"divider";
        var background = (isSelected)? "linear-gradient(0deg,rgba(231,81,255,0.05) 0%, rgba(0,0,0,0) 100% )":null;
        var generalStyle = (isITHOLIC)? ITHOLICSX:{
            borderLeft: 2,
            background:background
        };
        return {
            ...generalStyle,
            width:"150px",
            transition: ".4s",
            borderRadius:"10px 10px 0 0"
        }
    }
    function a11yProps(index) {
        return {
            id: `vertical-tab-${index}`,
            'aria-controls': `vertical-tabpanel-${index}`,
        };
    }
    const generateTabPanel =(el,index) => {
        const cellName = Object.keys(el)[0];
        el = el[cellName];
        return (
            <TabPanel value={value} index={index}>
                <TabContent img={el.img}>
                    {el.text}
                    <br/><br/>
                    {
                        el.link ? <a href={el.link}> Pour plus d'information </a> : null
                    }
                </TabContent>
            </TabPanel>
        )
    }
    const generateTab = (el,index) => {
        const cellName = Object.keys(el)[0];
        el = el[cellName];
        if (index === 0)
            return <Tab sx={tabSX(value,index)} className={(value === 0)? styles.itholicSelected:null} label={el.title} {...a11yProps(index)}></Tab>;
        return <Tab sx={tabSX(value,index)} label={el.title} {...a11yProps(index)}></Tab>;
    }
    const generateTab_Mobile = (el,index) => {
        const cellName = Object.keys(el)[0];
        el = el[cellName];
        if (index === 0)
            return <Tab sx={{
                fontSize:"1.5rem",
                fontWeight:"400",
                height:"75px",
                // ...tabITHOLICSX_mobile(value,index)
            }} /*className={(value === 0)? styles.itholicSelectedMobile:null}*/ label={el.title} {...a11yProps(index)}></Tab>;
        return <Tab sx={{
            fontSize:"1.5rem",
            fontWeight:"400",
            height:"75px"
        }} label={el.title} {...a11yProps(index)}></Tab>;

    }

    // Styling
    const sectionTitleSX = {
        textAlign: (sectionId%2)? "left" : "right",
        [theme.breakpoints.down('sm')]: {
            textAlign:"center",
        },
    }
    const ITHOLICSX = {
        borderColor: "secondary",
        backgroundImage: "linear-gradient(47deg, var(--primary-dark) 100%, rgba(231,81,255,1) 100%)",
        color:"white!important",
    }
    const tabGroupSX = {
        width:"35%",
        position:"absolute",
        right:0,
        top:"192px",
        "& [aria-label]":{
            alignItems:"end"
        }
    }
    const tabIndcatorsProps = {
        sx:{
            display: "none"
        }
    }
    const tabBoxSX = {
        display:"flex",
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        marginTop:"80px",
        height:"600px",
        width:"60%"
    }

    useEffect(() => {
        window.addEventListener("resize", () => setWidth(window.innerWidth));
    });
    return (
        <MainDiv id={id}>
            <Container maxWidth={"xl"}>
                <Typography variant={"h1"} color={"primary.dark"} align={"left"} sx={sectionTitleSX}>
                    OUR <Typography variant={"span"} color={"primary"}>EVENTS</Typography>
                </Typography>
                {
                    width > theme.breakpoints.values.sm ?
                        <Box sx={ tabBoxSX }>
                            <Tabs
                                orientation="vertical"
                                sx={ tabGroupSX }
                                textColor="secondary"
                                indicatorColor="secondary"
                                aria-label="Our cells"
                                value={value}
                                onChange={ handleChange }
                                TabIndicatorProps={ tabIndcatorsProps }
                            >
                                { eventInfo.map(generateTab) }
                            </Tabs>
                                { eventInfo.map(generateTabPanel) }
                        </Box> :
                        <Box>
                            <Tabs
                            value={value}
                            onChange={handleChange}
                            variant="scrollable"
                            scrollButtons="auto"
                            indicatorColor="secondary"
                            textColor="secondary"
                            scrollButtons
                            allowScrollButtonsMobile
                            aria-label="scrollable auto tabs example"
                            sx={{ margin:"auto"}}
                            >
                                { eventInfo.map(generateTab_Mobile) }
                            </Tabs>
                                { eventInfo.map(generateTabPanel) }
                        </Box>
                }
            </Container>
        </MainDiv>
    )
}

export default OurEvents;