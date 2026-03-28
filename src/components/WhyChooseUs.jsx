import { useEffect, useRef, useState } from 'react';
import { Headphones, Shield, TrendingUp, Zap } from 'lucide-react';

const features = [
	{
		icon: Zap,
		title: 'Entrega Rápida',
		description: 'Seus projetos prontos em tempo recorde. Sem atrasos, semedoração. Compromisso com prazos.',
		stat: '7 dias',
		statLabel: 'média de entrega',
	},
	{
		icon: Headphones,
		title: 'Suporte Dedicado',
		description: 'Time sempre disponível para tirar suas dúvidas e fazer ajustes pós-entrega.',
		stat: '24/7',
		statLabel: 'suporte disponível',
	},
	{
		icon: TrendingUp,
		title: 'Foco em Conversão',
		description: 'Não fazemos sites apenas bonito. Fazemos máquinas de gerar leads e vendas.',
		stat: '+50%',
		statLabel: 'média de conversao',
	},
	{
		icon: Shield,
		title: 'Transparência Total',
		description: 'Sem letras miúdas. Você sabe exatamente o que está contratando e quanto vai pagar.',
		stat: '100%',
		statLabel: 'transparente',
	},
];

export default function WhyChooseUs() {
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
			id="porque-nos"
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
						Por que escolher a <span className="gradient-text">CostaWeb?</span>
					</h2>
					<p className="text-[var(--text-muted)] max-w-2xl mx-auto">
						Diferenciais que fazem toda a diferença no seu projeto.
						Experiência e compromisso com resultados em cada detailhe.
					</p>
				</div>

				<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
					{features.map((feature, index) => (
						<div
							key={feature.title}
							className={`text-center glass rounded-2xl p-6 border border-[var(--glass-border)] transition-all duration-700 ${
								isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
							}`}
							style={{ transitionDelay: `${index * 100}ms` }}
						>
							<div className="w-16 h-16 mx-auto gradient-bg rounded-2xl flex items-center justify-center mb-5">
								<feature.icon className="w-8 h-8 text-white" />
							</div>

							<h3 className="text-lg font-semibold mb-2 text-[var(--text-primary)]">
								{feature.title}
							</h3>

							<p className="text-sm text-[var(--text-muted)] mb-4">
								{feature.description}
							</p>

							<div className="pt-4 border-t border-[var(--border-color)]">
								<p className="text-3xl font-bold gradient-text">{feature.stat}</p>
								<p className="text-xs text-[var(--text-muted)]">{feature.statLabel}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
