import Hero from "../components/Hero";
import Companies from "../components/Companies";
import FeatureA from "../components/FeatureA";
import FeatureB from "../components/FeatureB";
import Benefits from "../components/Benefits";
import Showcase from "../components/Showcase";
import Reviews from "../components/Reviews";
import Pricing from "../components/Pricing";
import CTA from "../components/CTA";

export default function Home() {
    return (
        <>
            <Hero />
            <Companies />
            <FeatureA />
            <FeatureB />
            <Benefits />
            <Showcase />
            <Reviews />
            <Pricing />
            <CTA />
        </>
    );
}
