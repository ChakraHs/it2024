import {Box, Typography} from "@mui/material";
import {useTheme} from "@mui/material/styles";

const Rating = ({ content }) => {
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

    return <div id={"rating"} style={{width:"100%"}}>
        <Typography variant={"h1"} color={"primary.dark"} sx={sectionTitleSX}>
            <Typography variant={"span"} color={"primary"}>RATING</Typography>
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

export default Rating;