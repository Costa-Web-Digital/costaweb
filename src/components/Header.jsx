import { useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Menu, X } from 'lucide-react';

const NAV_LINKS = [
	{ label: 'Serviços', to: '/servicos' },
	{ label: 'Por que nós', to: '/porque-nos' },
	{ label: 'Processo', to: '/processo' },
	{ label: 'FAQ', to: '/faq' },
];

export default function Header() {
	const [isScrolled, setIsScrolled] = useState(false);
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	const handleScroll = useCallback(() => {
		setIsScrolled(window.scrollY > 50);
	}, []);

	useEffect(() => {
		window.addEventListener('scroll', handleScroll, { passive: true });
		return () => window.removeEventListener('scroll', handleScroll);
	}, [handleScroll]);

	const closeMobileMenu = useCallback(() => {
		setMobileMenuOpen(false);
	}, []);

	return (
		<header
			className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
				isScrolled ? 'glass shadow-lg py-3' : 'bg-transparent py-5'
			}`}
		>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between">
					<Link to="/">
						<img src="/logo-header.png" alt="CostaWeb" className="h-6 w-auto" />
					</Link>

				<nav className="hidden md:flex items-center gap-8">
					{NAV_LINKS.map((link) => (
						<Link
							key={link.to}
							to={link.to}
							className="text-ink-alt hover:text-primary transition-colors font-medium"
						>
							{link.label}
						</Link>
					))}
				</nav>

				<div className="flex items-center gap-3">
					<Link
						to="/contato"
						className="hidden md:flex items-center gap-2 bg-gradient-to-br from-primary to-secondary text-white px-5 py-2.5 rounded-xl font-semibold hover:opacity-90 transition-opacity"
					>
						Entre em contato agora
						<ArrowRight className="w-4 h-4" />
					</Link>

						<button
							onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
							className="md:hidden p-2 rounded-xl bg-surface-alt"
							aria-label="Menu"
							aria-expanded={mobileMenuOpen}
						>
							{mobileMenuOpen ? (
								<X className="w-6 h-6 text-ink" />
							) : (
								<Menu className="w-6 h-6 text-ink" />
							)}
						</button>
					</div>
				</div>

				{mobileMenuOpen && (
					<div className="md:hidden mt-4 glass rounded-2xl p-4">
						<nav className="flex flex-col gap-4">
							{NAV_LINKS.map((link) => (
								<Link
									key={link.to}
									to={link.to}
									onClick={closeMobileMenu}
									className="text-left text-ink-alt hover:text-primary transition-colors font-medium py-2 w-full"
								>
									{link.label}
								</Link>
							))}
							<Link
								to="/contato"
								onClick={closeMobileMenu}
								className="flex items-center justify-center gap-2 bg-gradient-to-br from-primary to-secondary text-white px-5 py-3 rounded-xl font-semibold w-full"
							>
								Entre em contato agora
								<ArrowRight className="w-4 h-4" />
							</Link>
						</nav>
					</div>
				)}
			</div>
		</header>
	);
}
