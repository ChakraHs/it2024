import {AppBar, Box, Container, Toolbar, Typography, IconButton, Menu, MenuItem} from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
import logo from "./logo.png"
import styles from "./Navbar.module.css"
import {Link} from "react-router-dom";
import {useState} from "react";
import {useTheme} from "@mui/material/styles";

const headerStyle = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
}
const headerAppBar = {
    boxShadow: "none"
}
const pages = [
    {
        id: "#WhoAreWe",
        title:"WHO ARE WE"
    },
    // {
    //     id: "Highlight",
    //     title:"HIGHLIGHTS"
    // },
    {
        id: "#OurCells",
        title:"CELLS"
    },
    {
        id: "#OurEvents",
        title:"EVENTS"
    },
    {
        id: "itholic",
        title:"ITHOLIC"
    },
];


const Navbar = () => {
    const [anchorElNav, setAnchorElNav] = useState(null);
    const theme = useTheme();

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };


    return <AppBar position="absolute" color={"transparent"} sx={headerAppBar}>
        <Toolbar >
            <Container maxWidth={"xl"} sx={headerStyle}>
                <Link to={"/"}>
                    <Box className={styles.logo}>
                        <img style={{ padding:"10px",width: "5rem"}} src={ logo } alt={"logo"}/>
                        {/*<Typography variant={"h6"} color={"common.white"}>*/}
                        {/*    ENSIAS IT CLUB*/}
                        {/*</Typography>*/}
                    </Box>
                </Link>

                <Box className={styles.links} sx={{display: { xs: "none", md: "flex" }}}>
                    <ul>
                        <li><a href={"/#WhoAreWe"} style={{textDecoration:"none"}}>
                            <Typography variant={"p"} color={"common.white"}>WHO ARE WE</Typography>
                        </a></li>
                        {/*<li><a href={"#Highlight"}>*/}
                        {/*    <Typography variant={"p"} color={"common.white"}>HIGHLIGHTS</Typography>*/}
                        {/*</a></li>*/}
                        <li><a href={"/#OurCells"} style={{textDecoration:"none"}}>
                            <Typography variant={"p"} color={"common.white"}>CELLS</Typography>
                        </a></li>
                        <li><a href={"/#OurEvents"} style={{textDecoration:"none"}}>
                            <Typography variant={"p"} color={"white"} hov>EVENTS</Typography>
                        </a></li>
                        <li><a href={"/itholic"} style={{textDecoration:"none"}}>
                            <Typography variant={"p"} color={"white"} hov>ITHOLIC</Typography>
                        </a></li>
                    </ul>
                </Box>

                <Box sx={{ display: { xs: "block", md: "none" } }}>
                    <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleOpenNavMenu}
                        color={"primary"}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorElNav}
                        anchorOrigin={{
                            vertical: "bottom",
                            horizontal: "left"
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: "top",
                            horizontal: "left"
                        }}
                        open={Boolean(anchorElNav)}
                        onClose={handleCloseNavMenu}
                        sx={{
                            display: { xs: "block", md: "none" }
                        }}
                    >
                        {pages.map((page) => (
                            <MenuItem key={page} onClick={handleCloseNavMenu}>
                                <a href={"/"+page.id} style={{  textDecoration: "none", color:theme.palette.text.primary}}>
                                    <Typography textAlign="center">{page.title}</Typography>
                                </a>
                            </MenuItem>
                        ))}
                    </Menu>
                </Box>
            </Container>

        </Toolbar>
    </AppBar>
}

export default Navbar;