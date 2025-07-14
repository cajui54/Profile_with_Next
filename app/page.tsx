import AboutMe from "./_components/about-me";
import ContactMe from "./_components/contact-me";
import CarouselFreelancer from "./_components/corousel-freelancer";
import FooterComponent from "./_components/footer";
import HeaderComponent from "./_components/header";
import HeroComponent from "./_components/hero";
import MySkills from "./_components/my-skills";
import ProjectsComponent from "./_components/projects";

export default function Home() {
  return (
    <div className="w-full">
      <HeaderComponent />
      <HeroComponent />
      <AboutMe />
      <CarouselFreelancer />
      <MySkills />
      <ProjectsComponent />
      <ContactMe />
      <FooterComponent />
    </div>
  );
}
