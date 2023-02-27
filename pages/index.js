import { Background_Content } from "../components";
import { Header } from "../components";
import { TourTravel } from "../components";
import { TravelPackage } from "../components";
import { SectionContainer } from "../components";

export default function Home() {
    return (
        <div>
            <Header />
            <Background_Content />
            <TourTravel />
            <TravelPackage />
            <div style={{ height: "1000px" }}></div>
        </div>
    );
}
