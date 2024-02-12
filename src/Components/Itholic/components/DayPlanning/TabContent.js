import {Container, Typography} from "@mui/material";

const TabContent = (props) => {
    // styling
    const containerSX = {
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        height:"100%",
        alignItems:"start",
        justifyContent:"start"
    }

    return (
        <Container maxWidth={"xl"} sx={ containerSX }>
            {/* <img src={props.img} alt={"cell"} style={{height:"50%",width:"100%",margin:"1.5rem 0", objectFit:"contain", borderRadius:"15px"}}/> */}
            <Typography variant={"justifiedText"} color={"white"}>
                <p>{props.children}</p>
            </Typography>
        </Container>
    )
}


export default TabContent;