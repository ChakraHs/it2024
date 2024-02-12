import React, {useEffect, useState} from 'react';
import {Box, Typography} from "@mui/material";
import { useTheme } from '@mui/material/styles';
import { motion } from "framer-motion";
import styles from "./TimelineDot.module.css";

const TimelineDot = (props) => {
    // Hooks
    const theme = useTheme();
    const [scale, setScale] = useState(1);
    const isSelected = (props.cardYear === props.year);
    const year = props.year;
    useEffect(() => {
        (isSelected)? setScale(1.3):setScale(1)
    },[isSelected])

    // Functions
    const labelPlacement = (year) => {
        return (year%2 === 0)? '150%': '-200%';
    }
    const labelPlacementMobile = (year) => {
        return (year%2 === 0)? '150%': '-150%';
    }
    const toggleCard = (props) => {
        props.setCardYear(
            (props.cardYear === null || props.cardYear !== props.year)? props.year:null
        );
    }
    const dotAnimation = (scale) => {
        return {
            initial:{
                transform:'scale('+ 1 +')'
            },
            animate:{
                transform:'scale('+ scale +')'
            },
            onMouseEnter: () => setScale(1.5) ,
            onMouseLeave: () => {(isSelected)? setScale(1.3):setScale(1)},
            onClick: () => toggleCard(props)
        }
    }

    // Styling
    const yearSX = {
        position:"absolute",
        top: labelPlacement(year),
        left:"50%",
        transform:"translateX(-50%)",
        fontWeight:200,
        [theme.breakpoints.down('sm')]: {
            fontSize:"1.5rem",
            top: labelPlacementMobile(year),
        },
    }
    const backgroundCircleStyle = {
        background: theme.palette.common.white
    }
    const backgroundSelectedStyle = {
        background: "linear-gradient(45deg, "+ theme.palette.common.white +" 0%, "+ theme.palette.secondary.main +" 100%)"
    }

    return (
            <Box sx={{ position:"relative" }}>
                <motion.div {... dotAnimation(scale)}
                            style={ ((isSelected)? backgroundSelectedStyle:backgroundCircleStyle) }
                            className={ styles.circle + " " + ((isSelected)? styles.selected:'') }/>
                <Typography sx={ yearSX } variant={"h4"} color={theme.palette.common.white}>
                    {year}
                </Typography>
            </Box>
        
    )
}

export default TimelineDot;