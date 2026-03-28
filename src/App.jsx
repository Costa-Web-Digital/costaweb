import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfUse from './pages/TermsOfUse';

// Section routes map: route path → section element ID
const SECTION_ROUTES = {
	'/servicos': 'servicos',
	'/porque-nos': 'porque-nos',
	'/processo': 'processo',
	'/faq': 'faq',
	'/contato': 'contato',
};

function HomePage() {
	const { pathname } = useLocation();

	useEffect(() => {
		const sectionId = SECTION_ROUTES[pathname];
		if (sectionId) {
			// Small delay to ensure DOM is ready
			const timer = setTimeout(() => {
				document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
			}, 100);
			return () => clearTimeout(timer);
		} else {
			window.scrollTo({ top: 0, behavior: 'smooth' });
		}
	}, [pathname]);

	return (
		<main>
			<Hero />
			<Services />
			<WhyUs />
			<Process />
			<Testimonials />
			<FAQ />
			<FinalCTA />
		</main>
	);
}

function App() {
	return (
		<HashRouter>
			<div className="min-h-screen bg-[var(--bg-primary)]">
				<Header />
				<Routes>
					{/* Home page with section scroll support */}
					<Route path="/" element={<HomePage />} />
					<Route path="/servicos" element={<HomePage />} />
					<Route path="/porque-nos" element={<HomePage />} />
					<Route path="/processo" element={<HomePage />} />
					<Route path="/faq" element={<HomePage />} />
					<Route path="/contato" element={<HomePage />} />

					{/* Legal pages */}
					<Route path="/politica-de-privacidade" element={<PrivacyPolicy />} />
					<Route path="/termos-de-uso" element={<TermsOfUse />} />
				</Routes>
				<Footer />
			</div>
		</HashRouter>
	);
}

export default App;
