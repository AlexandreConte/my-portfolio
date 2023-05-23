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
import Experiences from "@/components/template/experiences";
import Courses from "@/components/template/courses";
import Projects from "@/components/template/projects";

export default function Home() {

  const googleSiteVerification = process.env.GOOGLE_SITE_VERIFICATION

  return (
    <>
      <Head>
        <title>Alexandre Portfolio</title>
        <meta name="google-site-verification" content={googleSiteVerification} />
        <meta name="description" content="Full Stack Developer Portfolio" />
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
        <Courses />
        <Experiences />
        <Projects />
        <Footer>
          <Socials />
          <Copyright />
        </Footer>
      </Page>
    </>
  )
}
