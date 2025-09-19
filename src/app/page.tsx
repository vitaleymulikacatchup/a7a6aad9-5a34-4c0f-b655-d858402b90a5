use client
import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarStyleApple from '@/components/navigation/NavbarStyleApple/NavbarStyleApple';
import VoidHero from '@/components/sections/layouts/hero/VoidHero';
import SplitAbout from '@/components/sections/layouts/about/SplitAbout';
import CentralFAQ from '@/components/sections/layouts/faq/CentralFAQ';
import HowToBuy2D from '@/components/sections/layouts/howtobuy/2DHTB';
import PatternTokenomics from '@/components/sections/layouts/tokenomics/PatternTokenomics';
import FooterLogoEmphasis from '@/components/footer/FooterLogoEmphasis';

export default function Home() {
  return (
    <SiteThemeProvider theme={{ styleVariant: 'futuristicAndOutOfBox', colorTemplate: 2, textAnimation: 'slide' }}>
      <div id="nav" data-section="nav">
        <NavbarStyleApple navItems={[{ name: 'Hero', id: 'hero' }, { name: 'About', id: 'about' }, { name: 'FAQ', id: 'faq' }, { name: 'How To Buy', id: 'how-to-buy' }, { name: 'Tokenomics', id: 'tokenomics' }, { name: 'Footer', id: 'footer' }]} logoSrc="/images/logo.svg" logoAlt="NovaFlow Logo" brandName="NovaFlow" />
      </div>
      <div id="hero" data-section="hero">
        <VoidHero title="Welcome to NovaFlow" description="Your gateway to streamlined, futuristic SaaS experiences." tagLabel="Futuristic SaaS" primaryButtonText="Start Free Trial" secondaryButtonText="Learn More" />
      </div>
      <div id="about" data-section="about">
        <SplitAbout description="At NovaFlow, we focus on delivering seamless and innovative solutions that engage users and drive conversions, merging technology with design for outstanding results." />
      </div>
      <div id="faq" data-section="faq">
        <CentralFAQ items={[{ title: 'What is NovaFlow?', content: 'NovaFlow is a cutting-edge SaaS platform designed to optimize user engagement and conversion rates.' }, { title: 'How do I start?', content: 'Sign up for a free trial to experience NovaFlow's features firsthand.' }, { title: 'Where can I get support?', content: 'Visit our support page or contact our team for assistance.' }, { title: 'What technologies does NovaFlow use?', content: 'We utilize modern technologies to ensure a robust and scalable solution.' }]} />
      </div>
      <div id="how-to-buy" data-section="how-to-buy">
        <HowToBuy2D variant="simple" />
      </div>
      <div id="tokenomics" data-section="tokenomics">
        <PatternTokenomics title="Tokenomics Overview" description="Our tokenomics model is designed for sustainability and growth, ensuring robust returns for our investors." kpiItems={[{ value: '100M', description: 'Total Supply' }, { value: '2M', description: 'Market Cap' }, { value: '1.5M', description: 'Liquidity' }]} />
      </div>
      <div id="footer" data-section="footer">
        <FooterLogoEmphasis logoSrc="/images/logo.svg" logoAlt="NovaFlow Logo" logoText="NovaFlow" columns={[{ items: [{ label: 'Privacy Policy', onClick: () => {} }, { label: 'Terms of Service', onClick: () => {} }, { label: 'Contact', onClick: () => {} }] }]} copyrightText="© 2023 NovaFlow. All rights reserved." onPrivacyClick={() => {}} />
      </div>
    </SiteThemeProvider>
  );
}