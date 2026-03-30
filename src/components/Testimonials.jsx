import { memo } from 'react';
import { Quote, Star } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const TestimonialCard = memo(function TestimonialCard({ testimonial, index, isVisible }) {
	return (
		<div
			className={`relative glass rounded-2xl p-6 border border-glass-border transition-all duration-700 ${
				isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
			}`}
			style={{ transitionDelay: `${index * 100}ms` }}
		>
			<Quote className="absolute top-4 right-4 w-8 h-8 text-primary opacity-20" />

			<div className="flex gap-1 mb-4">
				{[...Array(testimonial.rating)].map((_, i) => (
					<Star
						key={i}
						className="w-5 h-5 fill-yellow-400 text-yellow-400"
					/>
				))}
			</div>

			<p className="text-ink-alt mb-6 leading-relaxed">
				"{testimonial.content}"
			</p>

			<div className="flex items-center gap-4">
				<div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
					<span className="text-white font-semibold">
						{testimonial.name.split(' ').map(n => n[0]).join('')}
					</span>
				</div>
				<div>
					<p className="font-semibold text-ink">
						{testimonial.name}
					</p>
					<p className="text-sm text-muted">
						{testimonial.role}
					</p>
				</div>
			</div>
		</div>
	);
});

const testimonials = [
	{
		name: 'Carlos Eduardo',
		role: 'CEO, TechStore',
		content: 'Nossa conversão tripled após o novo site. A CostaWeb entendeu exatamente o que precisávamos e entregou além do esperado. Recomendo demais!',
		rating: 5,
	},
	{
		name: 'Mariana Silva',
		role: 'Diretora, HealthClinic',
		content: 'Equipe muito profissional e atenciosa. O site ficou lindo e as campanhas de Ads trouxe pacientes qualificados. ROI super positivo!',
		rating: 5,
	},
	{
		name: 'Roberto Ferreira',
		role: 'Fundador, FinanceHub',
		content: '转型 do nosso negócio online foi completa. Site rápido, bonito e funcional. O suporte pós-entrega também é excelente.',
		rating: 5,
	},
];

export default function Testimonials() {
	const [isVisible, sectionRef] = useInView();

	return (
		<section
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
						O que dizem nossos <span className="bg-gradient-to-br from-secondary to-tertiary text-transparent bg-clip-text">Clientes</span>
					</h2>
					<p className="text-muted max-w-2xl mx-auto">
						A opinião de quem já trabalha conosco é o maior indikator de qualidade.
						Aqui estão alguns feedbacks.
					</p>
				</div>

				<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
					{testimonials.map((testimonial, index) => (
						<TestimonialCard
							key={testimonial.name}
							testimonial={testimonial}
							index={index}
							isVisible={isVisible}
						/>
					))}
				</div>
			</div>
		</section>
	);
}
