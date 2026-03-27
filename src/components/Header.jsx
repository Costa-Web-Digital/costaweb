import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, ArrowRight } from 'lucide-react';
import { useTheme } from './ThemeContext';

export default function Header() {
	const { isDark, toggleTheme } = useTheme();
	const [isScrolled, setIsScrolled] = useState(false);
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 50);
		};
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const navLinks = [
		{ label: 'Serviços', href: '#servicos' },
		{ label: 'Por que nós', href: '#porque-nos' },
		{ label: 'Processo', href: '#processo' },
		{ label: 'Portfólio', href: '#portfolio' },
		{ label: 'FAQ', href: '#faq' },
	];

	return (
		<header
			className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
				isScrolled ? 'glass shadow-lg py-3' : 'bg-transparent py-5'
			}`}
		>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between">
					<a href="#" className="flex items-center gap-2">
						<div className="w-10 h-10 gradient-bg rounded-xl flex items-center justify-center">
							<span className="text-white font-bold text-xl font-[var(--font-display)]">C</span>
						</div>
						<span className="text-xl font-bold font-[var(--font-display)] text-[var(--text-primary)]">
							CostaWeb
						</span>
					</a>

					<nav className="hidden md:flex items-center gap-8">
						{navLinks.map((link) => (
							<a
								key={link.href}
								href={link.href}
								className="text-[var(--text-secondary)] hover:text-[var(--color-primary)] transition-colors font-medium"
							>
								{link.label}
							</a>
						))}
					</nav>

					<div className="flex items-center gap-3">
						<button
							onClick={toggleTheme}
							className="p-2 rounded-xl bg-[var(--bg-secondary)] hover:bg-[var(--border-color)] transition-colors"
							aria-label="Alternar tema"
						>
							{isDark ? (
								<Sun className="w-5 h-5 text-[var(--text-primary)]" />
							) : (
								<Moon className="w-5 h-5 text-[var(--text-primary)]" />
							)}
						</button>

						<a
							href="#contato"
							className="hidden md:flex items-center gap-2 gradient-bg text-white px-5 py-2.5 rounded-xl font-semibold hover:opacity-90 transition-opacity"
						>
							Falar no WhatsApp
							<ArrowRight className="w-4 h-4" />
						</a>

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
								<a
									key={link.href}
									href={link.href}
									onClick={() => setMobileMenuOpen(false)}
									className="text-[var(--text-secondary)] hover:text-[var(--color-primary)] transition-colors font-medium py-2"
								>
									{link.label}
								</a>
							))}
							<a
								href="#contato"
								onClick={() => setMobileMenuOpen(false)}
								className="flex items-center justify-center gap-2 gradient-bg text-white px-5 py-3 rounded-xl font-semibold"
							>
								Falar no WhatsApp
								<ArrowRight className="w-4 h-4" />
							</a>
						</nav>
					</div>
				)}
			</div>
		</header>
	);
}
