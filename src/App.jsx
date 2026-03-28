import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

function App() {
	return (
		<div className="min-h-screen bg-[var(--bg-primary)]">
			<Header />
			<main>
				<Hero />
				<Services />
				<WhyUs />
				<Process />
				<Testimonials />
				<FAQ />
				<FinalCTA />
			</main>
			<Footer />
		</div>
	);
}

export default App;
