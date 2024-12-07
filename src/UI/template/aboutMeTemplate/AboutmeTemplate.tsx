import AboutMe from "@/UI/organisms/about-me/about-me";
import Experience from "@/UI/organisms/experience/experience";
import ProfileCard from "@/UI/organisms/profile-card/profile-card";
import Technologies from "@/UI/organisms/technologies/technologies";

const AboutmeTemplate = () => {
    return (
        <div>
            <ProfileCard />
            <Experience />
            <Technologies />
            <AboutMe />
        </div>
    )
};

export default AboutmeTemplate;
