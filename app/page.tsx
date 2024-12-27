import AboutMe from "./_components/about-me";
import ContactMe from "./_components/contact-me";
import FooterComponent from "./_components/footer";
import HeroComponent from "./_components/hero";
import MySkills from "./_components/my-skills";
import ProjectsComponent from "./_components/projects";

export default function Home() {
  return (
    <div className="w-full">
      <HeroComponent />
      <AboutMe />
      <MySkills />
      <ProjectsComponent />
      <ContactMe />
      <FooterComponent />
    </div>
  );
}
