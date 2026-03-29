import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, FileText } from 'lucide-react';

export default function TermsOfUse() {
	useEffect(() => {
		window.scrollTo(0, 0);
		document.title = 'Termos de Uso — CostaWeb';
	}, []);

	return (
		<div className="min-h-screen bg-surface">
			<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
				<Link
					to="/"
					className="inline-flex items-center gap-2 text-muted hover:text-primary transition-colors mb-10 group"
				>
					<ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
					Voltar ao início
				</Link>

				<div className="flex items-center gap-4 mb-8">
					<div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center flex-shrink-0">
						<FileText className="w-6 h-6 text-white" />
					</div>
					<div>
						<h1 className="text-3xl sm:text-4xl font-bold font-display text-ink">
							Termos de Uso
						</h1>
						<p className="text-muted text-sm mt-1">
							Última atualização: março de 2025
						</p>
					</div>
				</div>

				<div className="space-y-8">
					<Section>
						<p className="text-ink-alt leading-relaxed">
							Bem-vindo ao site da <strong>CostaWeb</strong>. Ao acessar e utilizar nosso site e serviços, você concorda com os Termos de Uso descritos abaixo. Leia com atenção. Se não concordar com algum ponto, pedimos que não utilize nossos serviços.
						</p>
					</Section>

					<Section title="1. Aceitação dos termos">
						<p className="text-ink-alt leading-relaxed">
							Ao acessar este site, você declara ter lido, entendido e concordado com os presentes Termos de Uso, bem como com nossa{' '}
							<Link to="/politica-de-privacidade" className="text-primary hover:underline font-medium">
								Política de Privacidade
							</Link>. Estes termos podem ser atualizados a qualquer momento, e o uso contínuo do site implica a aceitação das alterações.
						</p>
					</Section>

					<Section title="2. Descrição dos serviços">
						<p className="text-ink-alt leading-relaxed mb-4">
							A CostaWeb oferece serviços de desenvolvimento web, design digital e marketing, incluindo:
						</p>
						<ul className="space-y-2">
							<Item>Criação de Landing Pages e sites institucionais;</Item>
							<Item>Desenvolvimento de sites estáticos e dinâmicos;</Item>
							<Item>Otimização para mecanismos de busca (SEO);</Item>
							<Item>Gestão de tráfego pago (Google Ads, Meta Ads);</Item>
							<Item>Consultoria e estratégia digital.</Item>
						</ul>
					</Section>

					<Section title="3. Uso do site">
						<p className="text-ink-alt leading-relaxed mb-4">
							Ao utilizar nosso site, você concorda em:
						</p>
						<ul className="space-y-2">
							<Item>Não reproduzir, copiar ou distribuir qualquer conteúdo sem autorização prévia;</Item>
							<Item>Não utilizar o site para fins ilegais ou prejudiciais a terceiros;</Item>
							<Item>Não tentar acessar áreas restritas ou sistemas internos da CostaWeb;</Item>
							<Item>Fornecer informações verdadeiras e atualizadas em formulários de contato.</Item>
						</ul>
					</Section>

					<Section title="4. Propriedade intelectual">
						<p className="text-ink-alt leading-relaxed">
							Todo o conteúdo presente neste site — incluindo textos, imagens, logotipos, identidade visual, código-fonte e design — é de propriedade exclusiva da CostaWeb ou de seus licenciantes. É vedada qualquer reprodução, modificação ou distribuição sem autorização prévia e expressa por escrito.
						</p>
					</Section>

					<Section title="5. Isenção de responsabilidade">
						<p className="text-ink-alt leading-relaxed mb-4">
							A CostaWeb não se responsabiliza por:
						</p>
						<ul className="space-y-2">
							<Item>Danos diretos ou indiretos decorrentes do uso ou impossibilidade de uso do site;</Item>
							<Item>Interrupções temporárias por manutenção ou falhas técnicas;</Item>
							<Item>Conteúdo de sites de terceiros acessados por links presentes em nosso site;</Item>
							<Item>Resultados específicos de campanhas de marketing, que dependem de variáveis externas.</Item>
						</ul>
					</Section>

					<Section title="6. Orçamentos e contratos de serviço">
						<p className="text-ink-alt leading-relaxed">
							As informações disponíveis neste site têm caráter informativo e não constituem proposta formal de serviços. A contratação de quaisquer serviços está sujeita à elaboração de proposta comercial específica e assinatura de contrato entre as partes, com termos e condições definidos individualmente.
						</p>
					</Section>

					<Section title="7. Links para terceiros">
						<p className="text-ink-alt leading-relaxed">
							Nosso site pode conter links para sites externos. Esses links são fornecidos apenas para conveniência e não implicam endosso ou responsabilidade pela CostaWeb em relação ao conteúdo, produtos ou serviços de terceiros.
						</p>
					</Section>

					<Section title="8. Legislação aplicável">
						<p className="text-ink-alt leading-relaxed">
							Estes Termos de Uso são regidos pelas leis da República Federativa do Brasil. Para resolução de quaisquer disputas, fica eleito o foro da Comarca de São Paulo — SP, com renúncia a qualquer outro, por mais privilegiado que seja.
						</p>
					</Section>

					<Section title="9. Contato">
						<p className="text-ink-alt leading-relaxed">
							Em caso de dúvidas sobre estes Termos de Uso, entre em contato conosco:
						</p>
						<div className="mt-4 glass rounded-2xl p-6 space-y-2">
							<p className="text-ink font-semibold">CostaWeb</p>
							<p className="text-ink-alt text-sm">
								E-mail:{' '}
								<a href="mailto:contato@costaweb.com.br" className="text-primary hover:underline">
									contato@costaweb.com.br
								</a>
							</p>
							<p className="text-ink-alt text-sm">
								WhatsApp:{' '}
								<a href="https://wa.me/5511999639567" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
									(11) 99963-9567
								</a>
							</p>
						</div>
					</Section>
					<div className="flex items-center gap-4 mb-8">
						<Link
							to="/"
							className="inline-flex items-center gap-2 text-muted hover:text-primary transition-colors mb-10 group"
						>
							<ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
							Voltar ao início
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}

function Section({ title, children }) {
	return (
		<div className="border-b border-border pb-8 last:border-0 last:pb-0">
			{title && (
				<h2 className="text-xl font-bold font-display text-ink mb-4">
					{title}
				</h2>
			)}
			{children}
		</div>
	);
}

function Item({ children }) {
	return (
		<li className="flex items-start gap-3 text-ink-alt leading-relaxed">
			<span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
			<span>{children}</span>
		</li>
	);
}
