import {Box, Typography} from "@mui/material";
import {useTheme} from "@mui/material/styles";

const Prize = ({ content }) => {
    const theme = useTheme();

    const sectionTitleSX = {
        margin:"0 0 2rem 0",
        [theme.breakpoints.down('sm')]: {
            textAlign:"center",
        },
    }
    const mainParagraphSX = {
        position: "relative",
        display:"flex",
        flexDirection:"column",
        alignItems:"center"
    }

    return <div id={"rules"} style={{width:"100%"}}>
        <Typography variant={"h1"} color={"primary.dark"} sx={sectionTitleSX}>
            <Typography variant={"span"} color={"primary"}>PRIZES</Typography>
        </Typography>
        <Box sx={ mainParagraphSX }>
            { content.text }
        </Box>
    </div>
}

export default Prize;