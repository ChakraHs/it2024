import {Card, CardContent, CardMedia, Typography} from "@mui/material";
import {motion,AnimatePresence} from "framer-motion"
import {styled} from "@mui/material/styles";
import { useTheme } from '@mui/material/styles';

const cardAnimation = {
    hide:{
        height:0,
        opacity:0,
        transition:{
            height:{
                ease:"easeInOut",
                delay:.5
            }
        }},
    show:{
        height:"60%",
        width:"90%",
        opacity:1,
        transition:{
            height:{
                ease:"easeInOut",
            },
            opacity:{
                delay:.2
            }
        }}
}

const GlassCard = (props) => {
    const theme = useTheme();
    // Styles
    const MyCard = styled('div')(({ theme }) => ({
        padding:"2rem",
        height:"100%",
        backgroundColor:"rgba(255,255,255,0.1)",
        boxSizing:"border-box",
        borderRadius:"20px",
        boxShadow:"none",
        display:"flex",
        gap:"1rem",
        backdropFilter:"blur(5px)",
        zIndex:1,
        transition: ".3s",
        maxWidth: "lg",
        alignItems: "center",
        [theme.breakpoints.down('sm')]: {
            flexDirection: "column",
            padding:"1.5rem",
        },
        [theme.breakpoints.up('sm')]: {
            flexDirection: "row",
        }
    }));
    const glassCardImageSX ={
        width: {xs:"100%",sm:"50%",md:"50%"},
        height: "100%",
        objectFit: "cover",
        borderRadius: "20px",
    }

    return (
        <AnimatePresence>
            {props.isShown && (
                <motion.div
                    key={ "glassCard" }
                    variants={ cardAnimation }
                    initial={"hide"}
                    animate={"show"}
                    exit={"hide"}>
                    <MyCard>
                        <CardMedia
                            component="img"
                            image={props.src}
                            alt="Live from space album cover"
                            sx={ glassCardImageSX }
                        />
                        <CardContent sx={{ width:{xs:"90%",sm:"50%",md:"50%"},height:"100%", overflowY:"auto" }} >
                            <Typography gutterBottom align={"center"} variant="h3" color={theme.palette.common.white}>
                                {props.year}
                            </Typography>
                            <Typography variant="justifiedText" component={"p"} color={theme.palette.common.white}>
                                {props.children}
                            </Typography>
                        </CardContent>
                    </MyCard>
                </motion.div>
            )}
        </AnimatePresence>

    )
}

export default GlassCard;