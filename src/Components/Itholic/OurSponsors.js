import {Box, Container, Tabs, Typography} from "@mui/material";
import {useTheme} from "@mui/material/styles";
import dxcLogo from "./static/DXC_logo.png";
import eurafricLogo from "./static/EURAFRIC_logo.png";




const OurSponsors = ()=> {
    const theme = useTheme();

    const sectionTitleSX = {
        margin:"0 0 2rem 0",
        [theme.breakpoints.down('sm')]: {
            textAlign:"center",
        }
    }
    const mainParagraphSX = {
        position: "relative",
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        gap:"3rem"
    }
    const imgStyle = {
        width:"40%",
        maxWidth:"200px"
    }
    const tabBoxSX ={
        marginTop:"80px"
    }

    return <Container sx={ tabBoxSX } maxWidth={"xl"}>
        <Typography variant={"h1"} color={"primary.dark"} sx={sectionTitleSX}>
            OUR <Typography variant={"span"} color={"primary"}>SPONSORS</Typography>
        </Typography>
        <Typography  variant={"justifiedText"} color={"text.primary"}>
            <p>
                We want to deeply thank our sponsors for making this IT event possible !
            </p>
        </Typography>
        <Box sx={ mainParagraphSX }>
            <img style={imgStyle} src={dxcLogo}/>
            <img style={imgStyle} src={eurafricLogo}/>
        </Box>
    </Container>
}

export default OurSponsors;