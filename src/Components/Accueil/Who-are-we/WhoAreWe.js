import {Box, Container, Typography} from "@mui/material";
import { styled } from "@mui/material/styles";
import { useTheme } from '@mui/material/styles';
import logo from "./img/logo.png";
import MainDiv from "../../_UI/MainDiv";

const WhoAreWe = ({ id,sectionId }) => {
    // Hooks
    // const [ cardYear, setCardYear ] = useState(2022);
    const theme = useTheme();

    // styling
    const sectionTitleSX = {
        textAlign: (sectionId%2)? "left" : "right",
        [theme.breakpoints.down('sm')]: {
            textAlign:"center",
        },
    }
    const TextBox = styled('div')(({ theme }) => ({
        display:"flex",
        alignItems:"center",
        marginBottom : "5rem",
        [theme.breakpoints.down('sm')]: {
            gap:"2rem",
            flexDirection: "column",
        },
        [theme.breakpoints.up('sm')]: {
            gap:"3rem",
            flexDirection: "row",
        }
    }));
    const TextWrapper = styled('div')(({ theme }) => ({
        [theme.breakpoints.down('sm')]: {
            width:"95%",
        },
        [theme.breakpoints.up('sm')]: {
            width:"60%"
        }
    }));
    const mainParagraphSX = {
        paddingLeft: "1.5rem",
        position: "relative",
        borderLeft : "solid 7px" + theme.palette.primary.main,
        [theme.breakpoints.down('sm')]: {
            paddingLeft : 0 ,
            borderLeft : "none",
        },
    }

    const logoStyle = {
        width: "100%",
        maxWidth: "500px",
        display: "block",
        marginLeft: "auto"
    }

    return (
        <MainDiv id={id}>
            <Container maxWidth={"xl"} >
                <TextBox>
                    <TextWrapper>
                        <Typography variant={"h1"} color={"primary.dark"} sx={sectionTitleSX}>
                            WHO ARE <Typography variant={"span"} color={"primary"}>WE ?</Typography>
                        </Typography>
                        <Box sx={ mainParagraphSX }>
                            <Typography  variant={"justifiedText"} color={"text.primary"}>
                                <p>
                                    EITC n'est pas qu'un simple club IT, mais une communauté d'élèves ingénieurs et de lauréats, liés par leur passion de l'IT.
                                    Notre club suit la philosophie du partage : Nous somme à la fois la source et les consommateurs d'information.
                                    Chacun complète le savoir de l'autre, et tous ensemble nous formons une entité dédiée à l'IT et aux nouvelles technologies.
                                </p>
                            </Typography>
                        </Box>
                    </TextWrapper>
                    <Box sx={{ width:"40%" }}>
                        <img style={ logoStyle } src={ logo } alt={ "logo" }/>
                    </Box>
                </TextBox>
            </Container>
        </MainDiv>
    )
}

export default WhoAreWe;