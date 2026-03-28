import { useEffect, useRef, useState } from 'react';
import { ExternalLink } from 'lucide-react';

const projects = [
	{
		title: 'TechStore E-commerce',
		type: 'Site Dinâmico',
		category: 'E-commerce',
		color: 'from-blue-500 to-cyan-500',
	},
	{
		title: 'HealthClinic Landing',
		type: 'Landing Page',
		category: 'Saúde',
		color: 'from-green-500 to-emerald-500',
	},
	{
		title: 'FinanceHub',
		type: 'Site Estático',
		category: 'Finanças',
		color: 'from-purple-500 to-pink-500',
	},
	{
		title: 'FoodDelivery App',
		type: 'Site Dinâmico',
		category: 'Alimentação',
		color: 'from-orange-500 to-red-500',
	},
	{
		title: 'EduOnline Platform',
		type: 'Site Dinâmico',
		category: 'Educação',
		color: 'from-indigo-500 to-blue-500',
	},
	{
		title: 'RealEstate Pro',
		type: 'Landing Page',
		category: 'Imóveis',
		color: 'from-teal-500 to-cyan-500',
	},
];

export default function Portfolio() {
	const [isVisible, setIsVisible] = useState(false);
	const sectionRef = useRef(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setIsVisible(true);
				}
			},
			{ threshold: 0.1 },
		);

		if (sectionRef.current) {
			observer.observe(sectionRef.current);
		}

		return () => observer.disconnect();
	}, []);

	return (
		<section
			id="portfolio"
			ref={sectionRef}
			className="py-20 bg-[var(--bg-secondary)]"
		>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div
					className={`text-center mb-16 transition-all duration-700 ${
						isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
					}`}
				>
					<h2 className="text-3xl sm:text-4xl font-bold mb-4">
						Nosso <span className="gradient-text">Portfólio</span>
					</h2>
					<p className="text-[var(--text-muted)] max-w-2xl mx-auto">
						Projetos que мы сделали para empresas que decidiram crescer no digital.
						Cada projeto é único, mas todos têm algo em comum: resultados.
					</p>
				</div>

				<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
					{projects.map((project, index) => (
						<div
							key={project.title}
							className={`group relative glass rounded-2xl overflow-hidden border border-[var(--glass-border)] card-hover transition-all duration-700 ${
								isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
							}`}
							style={{ transitionDelay: `${index * 100}ms` }}
						>
							<div className={`h-48 bg-gradient-to-br ${project.color} relative`}>
								<div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />

								<div className="absolute top-4 left-4">
									<span className="glass px-3 py-1 rounded-full text-xs font-medium text-white">
										{project.type}
									</span>
								</div>

								<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
									<a
										href="#contato"
										className="inline-flex items-center gap-2 glass px-4 py-2 rounded-xl text-white font-medium hover:bg-white/20 transition-colors"
									>
										Ver projeto
										<ExternalLink className="w-4 h-4" />
									</a>
								</div>
							</div>

							<div className="p-5">
								<p className="text-xs text-[var(--text-muted)] mb-1">{project.category}</p>
								<h3 className="text-lg font-semibold text-[var(--text-primary)]">
									{project.title}
								</h3>
							</div>
						</div>
					))}
				</div>

				<div className="text-center mt-10">
					<a
						href="#contato"
						className="inline-flex items-center gap-2 gradient-bg text-white px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition-opacity"
					>
						Ver todos os projetos
					</a>
				</div>
			</div>
		</section>
	);
}
