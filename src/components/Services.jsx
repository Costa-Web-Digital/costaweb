import { ArrowRight, Database, Globe, Monitor, Search, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useInView } from '../hooks/useInView';

function ServiceCard({ service, index, isVisible }) {
	return (
		<div
			className={`group glass rounded-2xl p-6 border border-glass-border card-hover transition-all duration-700 ${
				isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
			}`}
			style={{ transitionDelay: `${index * 100}ms` }}
		>
			<div className="w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
				<service.icon className="w-7 h-7 text-white" />
			</div>

			<h3 className="text-xl font-semibold mb-3 text-ink">
				{service.title}
			</h3>

			<p className="text-muted mb-5 text-sm leading-relaxed">
				{service.description}
			</p>

			<Link
				to="/contato"
				className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
			>
				Saber mais
				<ArrowRight className="w-4 h-4" />
			</Link>
		</div>
	);
}

const services = [
	{
		icon: Monitor,
		title: 'Landing Pages',
		description: 'Páginas de alta conversão focadas em capturar leads e vender. Design atrativo e copy persuasivo para maximizar seus resultados.',
	},
	{
		icon: Globe,
		title: 'Sites Estáticos',
		description: 'Sites rápidos, seguros e elegantes para presença profissional. Ideal para quem precisa de uma cartão de visitas digital de alto impacto.',
	},
	{
		icon: Database,
		title: 'Sites Dinâmicos',
		description: 'Sistemas com CMS, blog, e-commerce e painel administrativo. Controle total do seu conteúdo com facilidade e flexibilidade.',
	},
	{
		icon: Search,
		title: 'Tráfego Orgânico (SEO)',
		description: 'Ranqueamento no Google, criação de conteúdo e autoridade de domínio. Deixe que clientes te encontrem organicamente.',
	},
	{
		icon: TrendingUp,
		title: 'Tráfego Pago (ADS)',
		description: 'Campanhas no Google Ads e Meta Ads com foco em ROI. Investimento inteligente para resultados imediatos e mensuráveis.',
	},
];

export default function Services() {
	const [isVisible, sectionRef] = useInView();

	return (
		<section
			id="servicos"
			ref={sectionRef}
			className="py-20 bg-surface"
		>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div
					className={`text-center mb-16 transition-all duration-700 ${
						isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
					}`}
				>
					<h2 className="text-3xl sm:text-4xl font-bold mb-4">
						Nossos <span className="bg-gradient-to-br from-secondary to-tertiary text-transparent bg-clip-text">Serviços</span>
					</h2>
					<p className="text-muted max-w-2xl mx-auto">
						Soluções completas para fazer seu negócio decolar no digital.
						Do design ao tráfego, cuidamos de tudo para você focar no que sabe fazer
						melhor.
					</p>
				</div>

				<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
					{services.map((service, index) => (
						<ServiceCard
							key={service.title}
							service={service}
							index={index}
							isVisible={isVisible}
						/>
					))}
				</div>
			</div>
		</section>
	);
}
