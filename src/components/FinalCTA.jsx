import { MessageCircle } from 'lucide-react';
import { useInView } from '../hooks/useInView';

export default function FinalCTA() {
	const [isVisible, sectionRef] = useInView();

	return (
		<section
			id="contato"
			ref={sectionRef}
			className="py-20 relative overflow-hidden"
		>
			<div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary" />
			<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTTM2IDE4Yy0xLjEgMC0yIC45LTIgMnMuOSAyIDIgMiAyLS45IDItMi0uOS0yLTItMnMtLjktMi0yLTJ6IiBmaWxsPSJub25lIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjEiIG9wYWNpdHk9IjAuMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30" />

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
							className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-xl font-bold hover:bg-white/90 transition-colors shadow-lg"
						>
							<MessageCircle className="w-5 h-5" />
							Entre em contato agora
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}
