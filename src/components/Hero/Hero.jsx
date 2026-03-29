import { ArrowRight } from 'lucide-react';
import { useScrollTo } from '../../hooks/useScrollTo.js';
import { useInView } from '../../hooks/useInView.js';
import { HeroBackground } from './HeroBackground.jsx'

export default function Hero() {
	const [isVisible, sectionRef] = useInView();
	const scrollTo = useScrollTo();

	return (
		<section
			ref={sectionRef}
			className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden"
		>
			<HeroBackground />

			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
				<div className="grid lg:grid-cols-2 gap-12 items-center">
					<div
						className={`transition-all duration-1000 ${
							isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
						}`}
					>
						<h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-none">
							Seu negócio
							<div className="gradient-text">na internet</div>
							do jeito certo
						</h1>

						<p className="text-lg text-[var(--color-text-muted)] mb-8 max-w-xl">
							Não importa se você é autônomo ou tem dezenas de funcionários. Nós
							transformamos sua
							presença online com sites, sistemas e estratégias de tráfego que geram
							resultados
							reais para o seu negócio.
						</p>

						<div className="flex flex-wrap gap-4">
							<button
								onClick={() => scrollTo('contato')}
								className="inline-flex items-center gap-2 gradient-bg text-white px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition-opacity cursor-pointer border-0"
							>
								Quero meu site agora
								<ArrowRight className="w-5 h-5" />
							</button>
						</div>

						<div className="flex items-center gap-8 mt-10">
							<div>
								<p className="text-3xl font-bold gradient-text">15 anos</p>
								<p className="text-sm text-[var(--color-text-muted)]">de experiência</p>
							</div>
							<div className="w-px h-12 bg-[var(--color-border)]" />
							<div>
								<p className="text-3xl font-bold gradient-text">98%</p>
								<p className="text-sm text-[var(--color-text-muted)]">clientes
									satisfeitos</p>
							</div>
							<div className="w-px h-12 bg-[var(--color-border)]" />
							<div>
								<p className="text-3xl font-bold gradient-text">50</p>
								<p className="text-sm text-[var(--color-text-muted)]">sites entregues</p>
							</div>
						</div>
					</div>

					<div
						className={`relative transition-all duration-1000 delay-300 ${
							isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
						}`}
					>
						<div className="relative animate-float">
							<div className="absolute inset-0 gradient-bg opacity-20 rounded-3xl blur-2xl" />

							<div className="relative glass rounded-3xl p-8 border border-[var(--color-glass-border)]">
								<div className="flex items-center gap-4 mb-6">
									<div className="flex gap-2">
										<div className="w-3 h-3 rounded-full bg-red-400" />
										<div className="w-3 h-3 rounded-full bg-yellow-400" />
										<div className="w-3 h-3 rounded-full bg-green-400" />
									</div>
									<div className="flex-1 glass px-4 py-1.5 rounded-lg text-sm text-[var(--color-text-muted)]">
										seusite.com.br
									</div>
								</div>

								<div className="space-y-4">
									<div className="h-4 bg-[var(--color-border)] rounded w-3/4" />
									<div className="h-4 bg-[var(--color-border)] rounded w-1/2" />
									<div className="h-20 gradient-bg rounded-xl flex items-center justify-center">
									</div>
									<div className="grid grid-cols-3 gap-3">
										<div className="h-16 bg-[var(--color-border)] rounded-xl" />
										<div className="h-16 bg-[var(--color-border)] rounded-xl" />
										<div className="h-16 bg-[var(--color-border)] rounded-xl" />
									</div>
								</div>

								<div className="absolute -top-4 -right-4 glass px-4 py-2 rounded-xl border border-[var(--color-glass-border)]">
									<span className="text-sm font-semibold text-[var(--color-primary)]">Completamente personalizável</span>
								</div>

								<div className="absolute -bottom-4 -left-4 glass px-4 py-2 rounded-xl border border-[var(--color-glass-border)]">
									<span className="text-sm font-semibold text-[var(--color-secondary)]">100% Responsivo</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
