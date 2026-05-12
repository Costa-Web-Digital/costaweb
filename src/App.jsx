import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero/Hero.jsx';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import Process from './components/Process';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfUse from './pages/TermsOfUse';

// Map routes to section IDs
const ROUTE_TO_SECTION = {
	'/servicos': 'servicos',
	'/porque-nos': 'porque-nos',
	'/processo': 'processo',
	'/faq': 'faq',
	'/contato': 'contato',
};

function ScrollToSection() {
	const { pathname } = useLocation();

	useEffect(() => {
		const sectionId = ROUTE_TO_SECTION[pathname];
		if (sectionId) {
			const timer = setTimeout(() => {
				document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
			}, 100);
			return () => clearTimeout(timer);
		} else if (pathname === '/') {
			window.scrollTo({ top: 0, behavior: 'smooth' });
		}
	}, [pathname]);

	return null;
}

function HomePage() {
	return (
		<main>
			<Hero />
			<Services />
			<WhyUs />
			<Process />
			<FAQ />
			<FinalCTA />
		</main>
	);
}

function AppLayout() {
  return (
    <div className="min-h-screen bg-surface">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/servicos" element={<HomePage />} />
        <Route path="/porque-nos" element={<HomePage />} />
        <Route path="/processo" element={<HomePage />} />
        <Route path="/faq" element={<HomePage />} />
        <Route path="/contato" element={<HomePage />} />
        <Route path="/politica-de-privacidade" element={<PrivacyPolicy />} />
        <Route path="/termos-de-uso" element={<TermsOfUse />} />
      </Routes>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <HashRouter>
      <ScrollToSection />
      <AppLayout />
    </HashRouter>
  );
}

export default App;
