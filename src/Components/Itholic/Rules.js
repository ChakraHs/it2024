import {Box, Typography} from "@mui/material";
import {useTheme} from "@mui/material/styles";

const Rules = ({ content }) => {
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

    return <div id={"rules"} style={{width:"100%"}}>
        <Typography variant={"h1"} color={"primary.dark"} sx={sectionTitleSX}>
            <Typography variant={"span"} color={"primary"}>RULES</Typography>
        </Typography>
        <Box sx={ mainParagraphSX }>
            <Typography variant={"justifiedText"} color={"black"}>
                <p>
                    { content.text }
                </p>
            </Typography>
        </Box>
    </div>
}

export default Rules;