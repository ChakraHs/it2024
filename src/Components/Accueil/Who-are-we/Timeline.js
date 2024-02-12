import {Box} from "@mui/material";
import TimelineDot from "./TimelineDot";
import { useTheme } from "@mui/material/styles";

const Timeline = (props) => {
    const theme = useTheme();
    // Styling
    const mainBoxSX = {
        width:"100%",
        height:"150px",
        position:"relative",
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        zIndex:0
    }
    const lineSvgSX = {
        position:"absolute",
        width:"97%",
        height:"35px",
        top:"50%",
        left:"50%",
        transform:"translate(-50%,-50%)",
        zIndex:"-1"
    }

    return (
        <Box sx={ mainBoxSX }>
            <TimelineDot year={ 2018 } setCardYear={props.setCardYear} cardYear={ props.cardYear }/>
            <TimelineDot year={ 2019 } setCardYear={props.setCardYear} cardYear={ props.cardYear }/>
            <TimelineDot year={ 2020 } setCardYear={props.setCardYear} cardYear={ props.cardYear }/>
            <TimelineDot year={ 2021 } setCardYear={props.setCardYear} cardYear={ props.cardYear }/>
            <TimelineDot year={ 2022 } setCardYear={props.setCardYear} cardYear={ props.cardYear }/>
            <svg style={ lineSvgSX }>
                 <line x1="0" y1="15" x2="1920" y2="15" stroke="#ffffff" stroke-width="2"/>
            </svg>
        </Box>
    )
}

export default Timeline;