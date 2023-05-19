import Head from "next/head";
import ShowSkill from "@/components/data/contexts/ShowSkill";
import Page from "@/components/template/Page";
import Footer from "@/components/template/footer";
import Copyright from "@/components/template/footer/Copyright";
import Socials from "@/components/template/footer/Socials";
import Header from "@/components/template/header";
import Logo from "@/components/template/header/Logo";
import Navbar from "@/components/template/header/Navbar";
import Intro from "@/components/template/intro";
import Skills from "@/components/template/skills";
import Projects from "@/components/template/projects";

export default function Home() {
  return (
    <>
      <Head>
        <title>Alexandre | Developer Portfolio</title>
        <meta name="description" content="Full Stack Developer | Next Js" />
        <link rel="icon" type="image/svg" href="/favicon.svg" />
      </Head>
      <Page>
        <Header>
          <Logo />
          <Navbar />
        </Header>
        <Intro />
        <Skills />
        <ShowSkill />
        <Projects />
        <Footer>
          <Socials />
          <Copyright />
        </Footer>
      </Page>
    </>
  )
}
