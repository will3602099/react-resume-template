import dynamic from 'next/dynamic';
import { FC, memo } from 'react';
import Page from '../components/Layout/Page';
import PasswordGate from '../components/PasswordGate';
import About from '../components/Sections/About';
import Contact from '../components/Sections/Contact';
import Footer from '../components/Sections/Footer';
import Hero from '../components/Sections/Hero';
import Portfolio from '../components/Sections/Portfolio';
import Resume from '../components/Sections/Resume';
import Testimonials from '../components/Sections/Testimonials';
import { homePageMeta } from '../data/data';

// eslint-disable-next-line react-memo/require-memo
const Header = dynamic(() => import('../components/Sections/Header'), { 
  ssr: false,
  loading: () => <div className="h-16" /> // 预加载占位
});

const HomeContent: FC = memo(() => {
  const { title, description } = homePageMeta;
  return (
    <Page description={description} title={title}>
      <Header />
      <Hero />
      <About />
      <Resume />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </Page>
  );
});

const Home: FC = () => (
  <PasswordGate>
    <HomeContent />
  </PasswordGate>
);

export default Home;