import type { NextPage } from 'next';
import Head from 'next/head';
import Cover from "@/components/Cover"
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Cristian Mañay</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.png' />
      </Head>
      <Cover />
      <Projects/>
      <About/>
      <Skills/>
      <Contact/>
      <Footer/>
    </div>
  );
};

export default Home;