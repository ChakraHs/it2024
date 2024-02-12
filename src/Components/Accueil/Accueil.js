import Navbar from "../Header/Navbar";
import Splashscreen from "./Splashscreen/Splashscreen";
import WhoAreWe from "./Who-are-we/WhoAreWe";
import OurCells from "./Our-cells/OurCells";
import OurEvents from "./Our-events/OurEvents";
import Footer from "../Footer/Footer";
import Highlight from "./Higlight/Highlight";


const Accueil = () => {
    return <>
        <Navbar/>
        <Splashscreen/>
        <WhoAreWe  id={"WhoAreWe"} sectionId={1}/>
        {/*<Highlight id={"Highlight"} sectionId={2}/>*/}
        <OurCells  id={"OurCells"} sectionId={2}/>
        <OurEvents id={"OurEvents"} sectionId={3}/>
        <Footer/>
    </>
}

export default Accueil;