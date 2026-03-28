import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Menu, X } from 'lucide-react';
import { useScrollTo } from '../hooks/useScrollTo';

export default function Header() {
	const [isScrolled, setIsScrolled] = useState(false);
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const scrollTo = useScrollTo();

	useEffect(() => {
		const handleScroll = () => setIsScrolled(window.scrollY > 50);
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const navLinks = [
		{ label: 'Serviços', id: 'servicos' },
		{ label: 'Por que nós', id: 'porque-nos' },
		{ label: 'Processo', id: 'processo' },
		{ label: 'FAQ', id: 'faq' },
	];

	return (
		<header
			className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass shadow-lg py-3' : 'bg-transparent py-5'
				}`}
		>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between">
					<Link to="/" className="flex items-center gap-2">
						<div className="w-10 h-10 gradient-bg rounded-xl flex items-center justify-center">
							<span className="text-white font-bold text-xl font-[var(--font-display)]">C</span>
						</div>
						<span className="text-xl font-bold font-[var(--font-display)] text-[var(--text-primary)]">
							CostaWeb
						</span>
					</Link>

					<nav className="hidden md:flex items-center gap-8">
						{navLinks.map((link) => (
							<button
								key={link.id}
								onClick={() => scrollTo(link.id)}
								className="text-[var(--text-secondary)] hover:text-[var(--color-primary)] transition-colors font-medium cursor-pointer bg-transparent border-0 p-0"
							>
								{link.label}
							</button>
						))}
					</nav>

					<div className="flex items-center gap-3">
						<button
							onClick={() => scrollTo('contato')}
							className="hidden md:flex items-center gap-2 gradient-bg text-white px-5 py-2.5 rounded-xl font-semibold hover:opacity-90 transition-opacity cursor-pointer border-0"
						>
							Falar no WhatsApp
							<ArrowRight className="w-4 h-4" />
						</button>

						<button
							onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
							className="md:hidden p-2 rounded-xl bg-[var(--bg-secondary)]"
							aria-label="Menu"
						>
							{mobileMenuOpen ? (
								<X className="w-6 h-6 text-[var(--text-primary)]" />
							) : (
								<Menu className="w-6 h-6 text-[var(--text-primary)]" />
							)}
						</button>
					</div>
				</div>

				{mobileMenuOpen && (
					<div className="md:hidden mt-4 glass rounded-2xl p-4">
						<nav className="flex flex-col gap-4">
							{navLinks.map((link) => (
								<button
									key={link.id}
									onClick={() => { scrollTo(link.id); setMobileMenuOpen(false); }}
									className="text-left text-[var(--text-secondary)] hover:text-[var(--color-primary)] transition-colors font-medium py-2 cursor-pointer bg-transparent border-0 w-full"
								>
									{link.label}
								</button>
							))}
							<button
								onClick={() => { scrollTo('contato'); setMobileMenuOpen(false); }}
								className="flex items-center justify-center gap-2 gradient-bg text-white px-5 py-3 rounded-xl font-semibold cursor-pointer border-0 w-full"
							>
								Falar no WhatsApp
								<ArrowRight className="w-4 h-4" />
							</button>
						</nav>
					</div>
				)}
			</div>
		</header>
	);
}
