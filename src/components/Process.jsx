import { Code, FileText, Headphones, PenTool, Rocket } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const steps = [
	{
		icon: FileText,
		title: 'Briefing',
		description: 'Entendemos seu negócio, objetivos e público-alvo.',
	},
	{
		icon: PenTool,
		title: 'Proposta',
		description: 'Apresentamos o projeto, prazos e investimento.',
	},
	{
		icon: Code,
		title: 'Desenvolvimento',
		description: 'Criamos seu projeto com atenção a cada detailhe.',
	},
	{
		icon: Rocket,
		title: 'Entrega',
		description: 'Seu projeto no ar, pronto para gerar resultados.',
	},
	{
		icon: Headphones,
		title: 'Suporte',
		description: 'Acompanhamento pós-entrega para garantir sucesso.',
	},
];

export default function Process() {
	const [isVisible, sectionRef] = useInView();

	return (
		<section
			id="processo"
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
						Como <span className="gradient-text">Funciona</span>
					</h2>
					<p className="text-muted max-w-2xl mx-auto">
						Processo simples e transparente. Você sabe exatamente o que acontece
						em cada etapa do seu projeto.
					</p>
				</div>

				<div className="relative">
					<div className="grid lg:grid-cols-5 gap-8">
						{steps.map((step, index) => (
							<div
								key={step.title}
								className={`relative transition-all duration-700 ${
									isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
								}`}
								style={{ transitionDelay: `${index * 150}ms` }}
							>
								<div className="flex flex-col items-center text-center">
									<div className="relative z-10 w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mb-4 shadow-lg animate-pulse-glow">
										<step.icon className="w-9 h-9 text-white" />
									</div>

									<div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mb-3 lg:hidden">
										<span className="text-white font-bold">{index + 1}</span>
									</div>

									<h3 className="text-lg font-semibold mb-2 text-ink">
										{step.title}
									</h3>

									<p className="text-sm text-muted">
										{step.description}
									</p>
								</div>

								{index < steps.length - 1 && (
									<div className="hidden lg:flex absolute top-10 left-[calc(50%+40px)] right-[calc(-50%+40px)] h-1">
										<div className="flex-1 border-t-2 border-dashed border-border" />
									</div>
								)}
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
