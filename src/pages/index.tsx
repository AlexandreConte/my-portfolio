import Intro from "@/components/content/intro";
import Skills from "@/components/content/skills";
import ShowSkill from "@/components/data/contexts/ShowSkill";
import Footer from "@/components/footer";
import Copyright from "@/components/footer/Copyright";
import Socials from "@/components/footer/Socials";
import Header from "@/components/header";
import Logo from "@/components/header/Logo";
import Navbar from "@/components/header/Navbar";
import Page from "@/components/template/Page";

export default function Home() {
  return (
    <Page>
      <Header>
        <Logo />
        <Navbar />
      </Header>

      <Intro />
      <Skills />
      <ShowSkill />

      <Footer>
        <Socials />
        <Copyright />
      </Footer>
    </Page>
  )
}
