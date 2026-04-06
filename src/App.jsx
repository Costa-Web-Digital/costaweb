import { HashRouter, Routes, Route } from 'react-router-dom';
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

function App() {
	return (
		<HashRouter>
			<div className="min-h-screen bg-surface">
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
