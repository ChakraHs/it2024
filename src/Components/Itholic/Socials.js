import {Box, Typography, Link} from "@mui/material";
import {useTheme} from "@mui/material/styles";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import discordSVG from "./static/discord-icon-svgrepo-com.svg"

const Socials = () => {
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
    const linkStyles = {
        display:"flex",
        flexDirection:"column",
        gap:"2rem",
    }
    const linkElementStyle = {
        display:"flex",
        flexDirection:"row",
        gap:"1rem",
        justifyContent:"center"
    }

    return <div id={"socials"} style={{width:"100%"}}>
        <Typography variant={"h1"} color={"primary.dark"} sx={sectionTitleSX}>
            <Typography variant={"span"} color={"primary"}>SOCIALS</Typography>
        </Typography>
        <Box sx={ mainParagraphSX }>
            <Typography variant={"justifiedText"} color={"black"}>
                <p>
                    To stay up to date with the latest info, we recommend that you guys follow us on our social
                    media pages !
                </p>
                <Box sx={linkStyles}>
                    <Link style={linkElementStyle} href="https://discord.gg/DJrjrCSH2P" target="_blank" underline="hover">
                        <img src={discordSVG} style={{ width:"1.75rem" }}/> <span>ITHOLIC Server</span>
                    </Link>
                    <Link style={linkElementStyle} href="https://www.facebook.com/ensiasitclub" target="_blank" underline="hover">
                        <FacebookIcon fontSize={"large"}/> <span>ensiasitclub</span>
                    </Link>
                    <Link style={linkElementStyle} href="https://www.instagram.com/ensias_it_club/" target="_blank" underline="hover">
                        <InstagramIcon fontSize={"large"}/> <span>ensias_it_club</span>
                    </Link>
                    <Link style={linkElementStyle} href="https://www.linkedin.com/company/ensias-it-club/" target="_blank" underline="hover">
                        <LinkedInIcon fontSize={"large"}/> <span>ensias_it_club</span>
                    </Link>
                    <Link style={linkElementStyle} href="https://www.youtube.com/@ENSIASITClub" target="_blank" underline="hover">
                        <YouTubeIcon fontSize={"large"}/> <span>ENSIASITClub</span>
                    </Link>

                </Box>
            </Typography>

        </Box>
    </div>
}

export default Socials;