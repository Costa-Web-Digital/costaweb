import { useEffect, useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
	{
		question: 'Qual é o prazo médio de entrega de um projeto?',
		answer: 'O prazo varia conforme a complexidade do projeto. Landing pages ficam prontas em 5-7 dias úteis. Sites institucionais em 10-15 dias. Sistemas mais complexos levam de 20-30 dias. Sempre combinamos os prazos no contrato.',
	},
	{
		question: 'Quanto custa um site profissional?',
		answer: 'Nossos preços começam a partir de R$ 1.500 para landing pages, R$ 2.500 para sites institucionais e R$ 5.000+ para sistemas dinâmicos. Cada projeto tem um orçamento personalizado baseado nas suas necessidades específicas.',
	},
	{
		question: 'O site fica responsivo para celular?',
		answer: 'Sim! Todos os nossos projetos são desenvolvidos com design mobile-first, garantindo perfeita visualização e experiência em qualquer dispositivo: celular, tablet ou desktop.',
	},
	{
		question: 'Preciso saber programação para gerenciar o site?',
		answer: 'Não! Fornecemos painel administrativo intuitivo onde você pode gerenciar todo o conteúdo facilmente. Além disso, oferecemos tutorial completo e suporte para dúvidas.',
	},
	{
		question: 'Vocês trabalham com SEO?',
		answer: 'Sim! Todos os sites são desenvolvidos com boas práticas de SEO técnico: velocidade, estrutura semântica, tags otimizadas, URLs amigáveis e design responsivo. Também oferecemos serviço especializado de SEO.',
	},
	{
		question: 'Oferecem manutenção após a entrega?',
		answer: 'Sim!Temos planos de manutenção flexíveis que incluem atualizações, ajustes, suporte técnico e backup. Você pode contratar por demanda ou plano mensal, conforme sua necessidade.',
	},
];

export default function FAQ() {
	const [isVisible, setIsVisible] = useState(false);
	const [openIndex, setOpenIndex] = useState(null);
	const sectionRef = useRef(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setIsVisible(true);
				}
			},
			{ threshold: 0.1 }
		);

		if (sectionRef.current) {
			observer.observe(sectionRef.current);
		}

		return () => observer.disconnect();
	}, []);

	const toggleFAQ = (index) => {
		setOpenIndex(openIndex === index ? null : index);
	};

	return (
		<section
			id="faq"
			ref={sectionRef}
			className="py-20 bg-[var(--bg-secondary)]"
		>
			<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
				<div
					className={`text-center mb-16 transition-all duration-700 ${
						isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
					}`}
				>
					<h2 className="text-3xl sm:text-4xl font-bold mb-4">
						Perguntas <span className="gradient-text">Frequentes</span>
					</h2>
					<p className="text-[var(--text-muted)]">
						Tire suas dúvidas sobre nossos serviços e processo de trabalho.
					</p>
				</div>

				<div className="space-y-4">
					{faqs.map((faq, index) => (
						<div
							key={faq.question}
							className={`glass rounded-2xl border border-[var(--glass-border)] overflow-hidden transition-all duration-700 ${
								isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
							}`}
							style={{ transitionDelay: `${index * 100}ms` }}
						>
							<button
								onClick={() => toggleFAQ(index)}
								className="w-full flex items-center justify-between p-5 text-left"
							>
								<span className="font-semibold text-[var(--text-primary)] pr-4">
									{faq.question}
								</span>
								<ChevronDown
									className={`w-5 h-5 text-[var(--color-primary)] transition-transform duration-300 flex-shrink-0 ${
										openIndex === index ? 'rotate-180' : ''
									}`}
								/>
							</button>
							
							<div
								className={`overflow-hidden transition-all duration-300 ${
									openIndex === index ? 'max-h-40' : 'max-h-0'
								}`}
							>
								<p className="px-5 pb-5 text-[var(--text-muted)]">
									{faq.answer}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
