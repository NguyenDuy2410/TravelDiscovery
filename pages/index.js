import { Background_Content } from "../components";
import { Header } from "../components";
import { TourTravel } from "../components";
import { TravelPackage } from "../components";
import { NewTravel } from "../components";
import { TouristAttraction } from "../components";
import { Footer } from "../components";
export default function Home() {
    return (
        <div>
            <Header />
            <Background_Content />
            <TourTravel />
            <TravelPackage />
            <NewTravel />
            <TouristAttraction />
            <Footer />
            {/* <div style={{ height: "1000px" }}></div> */}
        </div>
    );
}
