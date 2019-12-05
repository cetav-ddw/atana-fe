import React from 'react';
import SEO from '../components/seo';
import HowWeWork from '../components/sections/how-we-work';
import OurPackages from '../components/sections/our-packages';
import Header from '../components/sections/header';
import OurMission from '../components/sections/our-mission';
import Footer from '../components/sections/footer';

import '../styles/global.scss';

const IndexPage = () => (
  <>
    <SEO title="Crea y distribuye comunicados de prensa" />
    <Header />
    <HowWeWork />
    <OurPackages />
    <OurMission />
    <Footer />
  </>
);

export default IndexPage;
