import {Box, Typography} from "@mui/material";
import {useTheme} from "@mui/material/styles";

const DevjamNutshell = () => {
    const theme = useTheme();

    const sectionTitleSX = {
        margin:"0 0 2rem 0",
        [theme.breakpoints.down('sm')]: {
            textAlign:"center",
        },
    }
    const mainParagraphSX = {
        position: "relative",
    }

    return <div id={"devjam-in-a-nutshell"}>
        <Typography variant={"h1"} color={"primary.dark"} sx={sectionTitleSX}>
            <Typography variant={"span"} color={"primary"}>DEVJAM</Typography> IN A NUTSHELL
        </Typography>
        <Box sx={ mainParagraphSX }>
            <Typography variant={"justifiedText"} color={"black"}>
                <p>
                    With the help of the latest cutting edge technologies like AR/VR, Web3, Cloud computing, AI and
                    many more, we want <b>YOU</b> to help the world with the creation of a project within the lines of a
                    theme we will carefully choose !<br/><br/>

                    DEVJAM is a competition where teams of <b>4 people</b> will create a working prototype within the period
                    on <b>1 week</b> that answers the theme that we will announce
                    <b> once the competition will start at the 1st of February</b>.
                    Once the time period ends the competing teams will send multiple deliverables to be judged and
                    eventually win the competition !
                </p>
            </Typography>
        </Box>
    </div>
}

export default DevjamNutshell;