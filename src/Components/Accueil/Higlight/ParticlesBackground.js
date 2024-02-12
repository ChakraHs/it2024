import Particles from "react-particles";
import particlesConfig from "./config/particles-config";
import {useCallback} from "react";
import { loadFull } from "tsparticles";
import styles from "./ParticlesBackground.module.css"

const ParticlesBackground = () => {
    const particlesInit = useCallback(async (engine) => {
        console.log(engine);
        await loadFull(engine);
    }, []);
    const particlesLoaded = useCallback(async (container) => {
        await console.log(container);
    }, []);

    return (
        <div style={{
            width:"100%",
            height:"100%",
            position: "absolute",
            overflow:"hidden",
            zIndex:-1,
            background:"-webkit-linear-gradient(#112D4E,#04172f)"
        }}>
            <Particles
                id="tsparticles"
                style={{ position:"none!important"}}
                init={particlesInit}
                loaded={particlesLoaded}
                options={ particlesConfig }
            />
        </div>
    )
}
export default ParticlesBackground;