import Layout from "../app/components/Layout";
import Hero from "../app/components/Hero";
import About from "../app/components/About";
import Projects from "../app/components/Projects";
import Skills from "../app/components/Skills";
import Contact from "../app/components/Contact";


const Home: React.FC = () => {
  return (
    <Layout>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </Layout>
  );
};

export default Home;
