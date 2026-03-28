import { useEffect, useRef, useState } from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { useScrollTo } from '../hooks/useScrollTo';

export default function FinalCTA() {
	const [isVisible, setIsVisible] = useState(false);
	const sectionRef = useRef(null);
	const scrollTo = useScrollTo();

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
			id="contato"
			ref={sectionRef}
			className="py-20 relative overflow-hidden"
		>
			<div className="absolute inset-0 gradient-bg" />
			<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyQ3VzdG9tSW5wdXQiPjxwYXRoIGQ9Ik0zNiAxOGMtMS4xIDAtMiAuOS0yIDJzLjkgMiAyIDIgMi0uOSAyLTItLjktMi0yLTJzLS45LTItMi0yeiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIxIiBvcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30" />

			<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
				<div
					className={`text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
					}`}
				>
					<h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-white">
						Pronto para crescer online?
					</h2>

					<p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto">
						Vamos transformar sua presença digital. Fale com nossos especialistas
						e descubra a melhor solução para seu negócio.
					</p>

					<div className="flex flex-wrap justify-center gap-4">
						<a
							href="https://wa.me/5511999639567"
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center gap-2 bg-white text-[var(--color-primary)] px-8 py-4 rounded-xl font-bold hover:bg-white/90 transition-colors shadow-lg"
						>
							<MessageCircle className="w-5 h-5" />
							Falar no WhatsApp
						</a>
						<button
							onClick={() => scrollTo('servicos')}
							className="inline-flex items-center gap-2 glass-dark text-white px-8 py-4 rounded-xl font-bold hover:bg-white/5 transition-all border border-white/10 cursor-pointer"
						>
							Ver serviços
							<ArrowRight className="w-5 h-5" />
						</button>
					</div>
				</div>
			</div>
		</section>
	);
}
